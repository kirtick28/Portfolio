import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setSubmitError('');
    setSubmitted(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          service: formData.service || 'Not specified',
          time: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
          message: formData.description,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        service: '',
        email: '',
        description: '',
      });
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setSubmitError(
        'Unable to send your message right now. Please try again.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {

    setFormData((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);
    setSubmitError('');
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



  const fieldClass =

    'w-full border-b border-[var(--contact-field-border)] bg-transparent py-3 text-sm text-[var(--contact-text)] outline-none transition-colors duration-300 placeholder:text-[var(--contact-placeholder)] hover:border-[var(--contact-field-hover)] focus:border-[#f72585]';



  const labelClass =

    'mb-3 block text-xs font-medium text-[var(--contact-label)] transition-colors group-focus-within:text-[#f72585]';



  const socialClass =

    'group inline-flex items-center gap-3 rounded-full border border-[var(--contact-social-border)] px-5 py-3 text-xs font-semibold text-[var(--contact-social-text)] transition-all duration-300 hover:border-[#f72585]/50 hover:bg-[#f72585]/[0.06] hover:text-[var(--contact-text)]';



  return (

    <section

      id="contact"

      className="contact-section relative isolate overflow-hidden border-t border-[var(--contact-section-border)] pt-16 text-[var(--contact-text)] sm:pt-20 lg:pt-24"

    >

      {/* Ambient lighting */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute -right-64 top-[18%] h-[440px] w-[440px] rounded-full bg-[#f72585]/[0.045] blur-[150px]"

      />



      <div

        aria-hidden="true"

        className="pointer-events-none absolute -left-64 bottom-[15%] h-[400px] w-[400px] rounded-full bg-[#8a2be2]/[0.045] blur-[150px]"

      />



      <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">

        {/* Heading */}

        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">

          <span

            className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em]"

            style={{ color: ACCENT }}

          >

            To Connect

          </span>



          <h2 className="bg-gradient-to-br from-[var(--contact-heading-start)] to-[var(--contact-heading-end)] bg-clip-text font-display text-5xl font-extrabold tracking-tighter text-transparent sm:text-7xl lg:text-8xl">

            CONTACT ME

          </h2>

        </div>



        <div className="mb-24 grid grid-cols-1 gap-16 lg:mb-28 lg:grid-cols-12 lg:gap-20">

          {/* Left: Introduction and contact details */}

          <motion.div {...motionProps()} className="lg:col-span-5">

            <span className="mb-5 block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--contact-muted)]">

              HAVE A PROJECT IN MIND?

            </span>



            <h3 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-[var(--contact-text)] sm:text-4xl lg:text-5xl">

              Let&apos;s build something

              <span style={{ color: ACCENT }}> meaningful.</span>

            </h3>



            <p className="mt-6 max-w-md text-sm leading-7 text-[var(--contact-body)]">

              Have an idea, an opportunity, or something interesting to discuss?

              Send me a message. I&apos;d love to hear what you&apos;re working

              on.

            </p>



            {/* Email and location */}

            <div className="mt-10 border-t border-[var(--contact-divider)]">

              <a

                href="mailto:kirtick.mm@gmail.com"

                className="group flex items-center justify-between gap-4 border-b border-[var(--contact-divider)] py-5 transition-colors duration-300 hover:border-[#f72585]/50"

              >

                <div className="flex min-w-0 items-center gap-4">

                  <Mail

                    size={18}

                    strokeWidth={1.5}

                    className="shrink-0 text-[#f72585]"

                  />



                  <span className="break-all text-sm text-[var(--contact-detail)] transition-colors group-hover:text-[var(--contact-text)] sm:text-base">

                    kirtick.mm@gmail.com

                  </span>

                </div>



                <ArrowUpRight

                  size={18}

                  className="shrink-0 text-[var(--contact-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f72585]"

                />

              </a>



              <div className="flex items-center gap-4 border-b border-[var(--contact-divider)] py-5">

                <MapPin

                  size={18}

                  strokeWidth={1.5}

                  className="shrink-0 text-[#f72585]"

                />



                <span className="text-sm text-[var(--contact-detail)]">

                  Coimbatore, Tamil Nadu, India

                </span>

              </div>

            </div>



            {/* Social links */}

            <div className="mt-7 flex flex-wrap gap-3">

              <a

                href="https\://github.com/kirtick28"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="Visit GitHub profile"

                className={socialClass}

              >

                <Github size={16} />

                <span>GitHub</span>

                <ArrowUpRight

                  size={13}

                  className="text-[var(--contact-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f72585]"

                />

              </a>



              <a

                href="https\://www.linkedin.com/in/kirtick28/"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="Visit LinkedIn profile"

                className={socialClass}

              >

                <Linkedin size={16} />

                <span>LinkedIn</span>

                <ArrowUpRight

                  size={13}

                  className="text-[var(--contact-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f72585]"

                />

              </a>

            </div>

          </motion.div>



          {/* Right: Contact form */}

          <motion.div {...motionProps(0.1)} className="lg:col-span-7">

            <form onSubmit={handleSubmit} className="relative">

              <div className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--contact-divider)] pb-5">

                <h3 className="font-display text-xl font-bold tracking-tight text-[var(--contact-text)] sm:text-2xl">

                  Send an enquiry

                </h3>



                <span className="font-mono text-[10px] tracking-wide text-[var(--contact-muted)]">

                  * REQUIRED

                </span>

              </div>



              {/* First and last name */}

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">

                <div className="group">

                  <label htmlFor="contact-first-name" className={labelClass}>

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

                    className={fieldClass}

                  />

                </div>



                <div className="group">

                  <label htmlFor="contact-last-name" className={labelClass}>

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

                    className={fieldClass}

                  />

                </div>

              </div>



              {/* Email and enquiry type remain side by side */}

              <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">

                <div className="group min-w-0">

                  <label htmlFor="contact-email" className={labelClass}>

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

                    className={fieldClass}

                  />

                </div>



                <div className="group min-w-0">

                  <label htmlFor="contact-service" className={labelClass}>

                    What would you like to discuss?

                  </label>



                  <select

                    id="contact-service"

                    name="service"

                    value={formData.service}

                    onChange={(e) => updateField('service', e.target.value)}

                    className={`${fieldClass} contact-select`}

                  >

                    <option value="">Choose a topic</option>

                    <option value="Job opportunity">Job opportunity</option>

                    <option value="Freelance project">Freelance project</option>

                    <option value="Collaboration">Collaboration</option>

                    <option value="Technical discussion">

                      Technical discussion

                    </option>

                    <option value="Other enquiry">Other</option>

                  </select>

                </div>

              </div>



              {/* Message */}

              <div className="group mt-8">

                <label htmlFor="contact-message" className={labelClass}>

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

                  className={`${fieldClass} resize-y leading-7`}

                />

              </div>



              {/* Submit error */}
              {submitError && (
                <p role="alert" className="mt-4 text-sm text-red-500">
                  {submitError}
                </p>
              )}

              {/* Submit */}

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-xs text-xs leading-6 text-[var(--contact-muted)]">

                  {isSending
                    ? 'Sending your message...'
                    : submitted
                      ? 'Your message has been sent successfully.'
                      : 'Your message will be delivered directly to my inbox.'}

                </p>



                <button

                  type="submit"

                  
                  disabled={isSending}
                  className="btn-neon-pill group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f72585] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--contact-section-bg)]"

                >

                  <span>

                    {isSending ? 'Sending...' : submitted ? 'Message sent!' : 'Send message'}

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
