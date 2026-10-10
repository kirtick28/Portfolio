import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { motion, useReducedMotion } from 'motion/react';

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

    // Open the visitor's email app with the contact message.
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

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/[0.09] bg-[#08080c] pt-24 text-white sm:pt-32"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-[18%] h-[440px] w-[440px] rounded-full bg-[#8a2be2]/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 bottom-[15%] h-[400px] w-[400px] rounded-full bg-[#f72585]/[0.035] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        {/* CONTACT HEADING — PRESERVED */}
        <div className="mb-32 flex flex-col items-center justify-center text-center">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            To Connect
          </span>
          <h2 className="bg-gradient-to-br from-white to-white/30 bg-clip-text font-display text-5xl font-extrabold tracking-tighter text-transparent sm:text-7xl lg:text-8xl">
            CONTACT ME
          </h2>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mb-28 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* LEFT: PERSONAL INTRODUCTION */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="mb-5 block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b8e9f]">
              HAVE A PROJECT IN MIND?
            </span>

            <h3 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's build something
              <span className="text-[#a78bfa]"> meaningful.</span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#9899aa]">
              Have an idea, an opportunity, or something interesting to discuss?
              Send me a message. I'd love to hear what you're working on.
            </p>

            {/* Contact details */}
            <div className="mt-12 space-y-0 border-t border-white/[0.10]">
              <a
                href="mailto:kirtick.mm@gmail.com"
                className="group flex items-center justify-between gap-4 border-b border-white/[0.10] py-5 transition-colors duration-300 hover:border-[#a78bfa]/50"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#a78bfa]"
                  />
                  <div className="min-w-0">
                    <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#77798a]">
                      EMAIL
                    </span>
                    <span className="break-all text-sm text-[#e5e5ec] transition-colors group-hover:text-white sm:text-base">
                      kirtick.mm@gmail.com
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#77798a] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                />
              </a>

              <div className="flex items-center gap-4 border-b border-white/[0.10] py-5">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#a78bfa]"
                />
                <div>
                  <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#77798a]">
                    BASED IN
                  </span>
                  <span className="text-sm text-[#e5e5ec]">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://github.com/kirtick28"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.12] px-5 py-3 text-xs font-semibold text-[#c4c5d0] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.045] hover:text-white"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight
                  size={13}
                  className="text-[#77798a] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/kirtick28/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.12] px-5 py-3 text-xs font-semibold text-[#c4c5d0] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.045] hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight
                  size={13}
                  className="text-[#77798a] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="mb-9 flex items-center justify-between border-b border-white/[0.12] pb-5">
                <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Send an enquiry
                </h3>
                <span className="font-mono text-[10px] tracking-wide text-[#77798a]">
                  ALL FIELDS MARKED * REQUIRED
                </span>
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
                <div className="group">
                  <label
                    htmlFor="contact-first-name"
                    className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#c4b5fd]"
                  >
                    First name <span className="text-[#a78bfa]">*</span>
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
                    className="w-full border-b border-white/[0.15] bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#a78bfa]"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="contact-last-name"
                    className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#c4b5fd]"
                  >
                    Last name <span className="text-[#a78bfa]">*</span>
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
                    className="w-full border-b border-white/[0.15] bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#a78bfa]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group mt-8">
                <label
                  htmlFor="contact-email"
                  className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#c4b5fd]"
                >
                  Email address <span className="text-[#a78bfa]">*</span>
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
                  className="w-full border-b border-white/[0.15] bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#a78bfa]"
                />
              </div>

              {/* Enquiry type */}
              <div className="group mt-8">
                <label
                  htmlFor="contact-service"
                  className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#c4b5fd]"
                >
                  What would you like to discuss?
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => updateField('service', e.target.value)}
                  className="w-full appearance-none border-b border-white/[0.15] bg-[#08080c] py-3 text-sm text-white outline-none transition-colors duration-300 hover:border-white/30 focus:border-[#a78bfa]"
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
                  <option value="Technical discussion" className="bg-[#0d0d13]">
                    Technical discussion
                  </option>
                  <option value="Other enquiry" className="bg-[#0d0d13]">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="group mt-8">
                <label
                  htmlFor="contact-message"
                  className="mb-3 block text-xs font-medium text-[#a1a2b1] transition-colors group-focus-within:text-[#c4b5fd]"
                >
                  Message <span className="text-[#a78bfa]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="description"
                  rows={4}
                  required
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full resize-y border-b border-white/[0.15] bg-transparent py-3 text-sm leading-7 text-white outline-none transition-colors duration-300 placeholder:text-[#555765] hover:border-white/30 focus:border-[#a78bfa]"
                />
              </div>

              {/* Submit */}
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-6 text-[#77798a]">
                  Your email app will open with your message ready to send.
                </p>

                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#08080c] transition-colors duration-300 hover:bg-[#c4b5fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a78bfa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080c]"
                >
                  {submitted ? 'Open email app again' : 'Send message'}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#08080c] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <Send size={13} />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
