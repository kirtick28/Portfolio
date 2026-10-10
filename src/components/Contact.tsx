import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { motion, useReducedMotion } from 'motion/react';

const ACCENT = '#f72585';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: '',
    email: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.service.trim() ||
        `Portfolio enquiry from ${formData.firstName} ${formData.lastName}`.trim()
    );

    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Enquiry: ${formData.service || 'Not specified'}\n\n` +
        `${formData.description}`
    );

    window.location.href = `mailto:kirtick.mm@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);
  };

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const motionProps = (delay = 0) => ({
    variants: reveal,
    initial: reduceMotion ? false : ('hidden' as const),
    whileInView: reduceMotion ? undefined : ('visible' as const),
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  });

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/[0.09] bg-[#08080c] pt-16 text-white sm:pt-20 lg:pt-24"
    >
      {/* Subtle pink ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-[18%] h-[440px] w-[440px] rounded-full bg-[#f72585]/[0.045] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 bottom-[15%] h-[400px] w-[400px] rounded-full bg-[#f72585]/[0.035] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        {/* Heading — preserved */}
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span
            className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em]"
            style={{ color: ACCENT }}
          >
            To Connect
          </span>

          <h2 className="bg-gradient-to-br from-white to-white/30 bg-clip-text font-display text-5xl font-extrabold tracking-tighter text-transparent sm:text-7xl lg:text-8xl">
            CONTACT ME
          </h2>
        </div>

        <div className="mb-24 grid grid-cols-1 gap-16 lg:mb-28 lg:grid-cols-12 lg:gap-20">
          {/* LEFT: INTRODUCTION AND CONTACT DETAILS */}
          <motion.div {...motionProps()} className="lg:col-span-5">
            <span className="mb-5 block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b8e9f]">
              HAVE A PROJECT IN MIND?
            </span>

            <h3 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something
              <span style={{ color: ACCENT }}> meaningful.</span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#9899aa]">
              Have an idea, an opportunity, or something interesting to discuss?
              Send me a message. I&apos;d love to hear what you&apos;re working
              on.
            </p>

            {/* Email first, location immediately below */}
            <div className="mt-10 border-t border-white/[0.10]">
              <a
                href="mailto:kirtick.mm@gmail.com"
                className="group flex items-center justify-between gap-4 border-b border-white/[0.10] py-5 transition-colors duration-300 hover:border-[#f72585]/50"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#f72585]"
                  />

                  <span className="break-all text-sm text-[#e5e5ec] transition-colors group-hover:text-white sm:text-base">
                    kirtick.mm@gmail.com
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#77798a] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f72585]"
                />
              </a>

              {/* Location directly below email */}
              <div className="flex items-center gap-4 border-b border-white/[0.10] py-5">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#f72585]"
                />

                <span className="text-sm text-[#e5e5ec]">
                  Coimbatore, Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/kirtick28"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit GitHub profile"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.12] px-5 py-3 text-xs font-semibold text-[#c4c5d0] transition-all duration-300 hover:border-[#f72585]/50 hover:bg-[#f72585]/[0.06] hover:text-white"
              >
                <Github size={16} />

                <span>GitHub</span>

                <ArrowUpRight
                  size={13}
                  className="text-[#77798a] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f72585]"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/kirtick28/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn profile"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.12] px-5 py-3 text-xs font-semibold text-[#c4c5d0] transition-all duration-300 hover:border-[#f72585]/50 hover:bg-[#f72585]/[0.06] hover:text-white"
              >
                <Linkedin size={16} />

                <span>LinkedIn</span>

                <ArrowUpRight
                  size={13}
                  className="text-[#77798a] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f72585]"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div {...motionProps(0.1)} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="relative">
              <div className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.12] pb-5">
                <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Send an enquiry
                </h3>

                <span className="font-mono text-[10px] tracking-wide text-[#77798a]">
                  * REQUIRED
                </span>
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
                <div className="group">
                  <label
                    htmlFor="contact-first-name"
                    className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#f72585]"
                  >
                    First name <span className="text-[#f72585]">*</span>
                  </label>

                  <input
                    id="contact-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    className="w-full border-b border-white/[0.15] bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#f72585]"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="contact-last-name"
                    className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#f72585]"
                  >
                    Last name <span className="text-[#f72585]">*</span>
                  </label>

                  <input
                    id="contact-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    className="w-full border-b border-white/[0.15] bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#f72585]"
                  />
                </div>
              </div>

              {/* Email + Enquiry type */}
              {/* Email + Enquiry type — side by side */}
              <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
                {/* Email */}
                <div className="group min-w-0">
                  <label
                    htmlFor="contact-email"
                    className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#f72585]"
                  >
                    Email address <span className="text-[#f72585]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full border-b border-white/[0.15] bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#f72585]"
                  />
                </div>

                {/* Enquiry type — original native dropdown */}
                <div className="group min-w-0">
                  <label
                    htmlFor="contact-service"
                    className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#f72585]"
                  >
                    What would you like to discuss?
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => updateField('service', e.target.value)}
                    className="w-full appearance-none border-b border-white/[0.15] bg-[#08080c] py-3 text-sm text-white outline-none transition-colors duration-300 hover:border-white/30 focus:border-[#f72585]"
                  >
                    <option value="" className="bg-[#0d0d13]">
                      Choose a topic
                    </option>
                    <option value="Job opportunity" className="bg-[#0d0d13]">
                      Job opportunity
                    </option>
                    <option value="Freelance project" className="bg-[#0d0d13]">
                      Freelance project
                    </option>
                    <option value="Collaboration" className="bg-[#0d0d13]">
                      Collaboration
                    </option>
                    <option
                      value="Technical discussion"
                      className="bg-[#0d0d13]"
                    >
                      Technical discussion
                    </option>
                    <option value="Other enquiry" className="bg-[#0d0d13]">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* Message — 3 visible rows, manually expandable */}
              <div className="group mt-8">
                <label
                  htmlFor="contact-message"
                  className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#f72585]"
                >
                  Message <span className="text-[#f72585]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="description"
                  rows={2}
                  required
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full resize-y border-b border-white/[0.15] bg-transparent py-3 text-sm leading-7 text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#f72585]"
                />
              </div>

              {/* Submit */}
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-6 text-[#77798a]">
                  Your email app will open with your message ready to send.
                </p>

                <button
                  type="submit"
                  className="btn-neon-pill group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f72585] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080c]"
                >
                  <span>
                    {submitted ? 'Open email app again' : 'Send message'}
                  </span>

                  <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
