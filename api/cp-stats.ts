// api/cp-stats.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const HANDLE = 'kirtick_28';

interface PlatformStats {
  maxRating: number;
  badge?: string;
  history: number[];
}

async function fetchCodeforces(): Promise<PlatformStats | null> {
  try {
    const [infoRes, ratingRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${HANDLE}`),
      fetch(`https://codeforces.com/api/user.rating?handle=${HANDLE}`)
    ]);

    const infoData = await infoRes.json();
    const ratingData = await ratingRes.json();

    if (infoData.status !== 'OK' || ratingData.status !== 'OK') return null;

    const user = infoData.result[0];
    const history: number[] = ratingData.result.map((c: any) => c.newRating);
    const maxRating = Math.max(
      user.maxRating ?? 0,
      user.rating ?? 0,
      ...history
    );

    return {
      maxRating,
      history
    };
  } catch (err) {
    console.error('Codeforces fetch error:', err);
    return null;
  }
}

async function fetchLeetCode(): Promise<PlatformStats | null> {
  try {
    const query = `
      query getUserContestData($username: String!) {
        userContestRanking(username: $username) {
          rating
          badge {
            name
          }
        }
        userContestRankingHistory(username: $username) {
          attended
          rating
        }
      }
    `;

    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: `https://leetcode.com/u/${HANDLE}/`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: JSON.stringify({
        query,
        variables: { username: HANDLE }
      })
    });

    const json = await res.json();
    const ranking = json?.data?.userContestRanking;
    const rawHistory = json?.data?.userContestRankingHistory ?? [];

    const history: number[] = rawHistory
      .filter((item: any) => item.attended)
      .map((item: any) => Math.round(item.rating));

    const currentRating = ranking?.rating ? Math.round(ranking.rating) : 0;
    const maxRating = Math.max(currentRating, ...history);

    if (!maxRating) return null;

    return {
      maxRating,
      badge: ranking?.badge?.name || 'Contestant',
      history
    };
  } catch (err) {
    console.error('LeetCode fetch error:', err);
    return null;
  }
}

async function fetchCodeChef(): Promise<PlatformStats | null> {
  try {
    const res = await fetch(`https://www.codechef.com/users/${HANDLE}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!res.ok) return null;
    const html = await res.text();

    // Extract the embedded contest history array from CodeChef's script tag
    const historyMatch = html.match(/var\s+all_rating\s*=\s*(\[[\s\S]*?\]);/);
    let history: number[] = [];

    if (historyMatch && historyMatch[1]) {
      const parsed = JSON.parse(historyMatch[1]);
      history = parsed
        .map((entry: any) => Number(entry.rating))
        .filter((n: number) => !Number.isNaN(n));
    }

    // Extract highest rating text as backup/verification
    const highestMatch = html.match(/Highest Rating\s*(\d+)/i);
    const scrapedMax = highestMatch ? Number(highestMatch[1]) : 0;
    const maxRating = Math.max(scrapedMax, ...history);

    if (!maxRating) return null;

    return {
      maxRating,
      history
    };
  } catch (err) {
    console.error('CodeChef fetch error:', err);
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const [leetcode, codeforces, codechef] = await Promise.all([
    fetchLeetCode(),
    fetchCodeforces(),
    fetchCodeChef()
  ]);

  // Step 3 included: Cache on Vercel Edge for 1 hour, serve stale for 24 hours
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  return res.status(200).json({
    leetcode,
    codeforces,
    codechef,
    fetchedAt: new Date().toISOString()
  });
}
