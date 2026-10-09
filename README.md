# Kirtick Portfolio — Visual Reset (Stage 2)

React + TypeScript + Vite + Tailwind CSS v4. This version follows the attached video more closely: dark framed hero, condensed display typography, thin outlines, vivid purple/pink gradient CTA, decorative sticker accents, and alternating dark/light sections.

## Run
```bash
npm install
npm run dev
```

## Add your character
Copy your transparent SVG to:
`public/images/character.svg`

The app loads it at `/images/character.svg`. The SVG itself is not bundled because it has not been attached in this conversation yet. If the path is missing, the hero shows a clear placeholder rather than silently leaving empty space.

## Before publishing
- Replace `your-email@example.com` in `src/App.tsx`.
- Replace project visual placeholders and descriptions with your real project screenshots and details.
- Verify project claims, dates, and descriptions before deploying.

## Build
```bash
npm run build
```
