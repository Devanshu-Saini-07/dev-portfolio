'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import {
  PRIMARY_EMAIL,
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
} from '@/data/social-links';
import {
  Mail,
  Linkedin,
  Github,
  Code2,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PRIMARY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const mailtoSubject = encodeURIComponent(`[Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Devanshu,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PRIMARY_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 lg:py-32 border-b border-border/80 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06"
          eyebrow="CONTACT"
          title={<>LET&apos;S <span className="text-accent">BUILD</span>.</>}
          description="Have an engineering role, collaborative project idea, or technical question? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 reveal-l">
            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-[0_0_30px_-5px_rgba(223,193,123,0.15)] transition-all">
              <div className="flex items-center justify-between mb-2.5 sm:mb-3 font-mono text-[11px] sm:text-xs text-text-secondary">
                <span className="uppercase tracking-wider">Direct Inbox</span>
                <span className="flex items-center gap-1.5 text-accent-secondary font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
                  <span>24h Response</span>
                </span>
              </div>

              <div className="flex items-center justify-between gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-surface-elevated/80 border border-border/80">
                <div className="flex items-center gap-2.5 sm:gap-3 truncate">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-text-primary truncate">
                    {PRIMARY_EMAIL}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono rounded-lg border border-border hover:border-accent bg-surface hover:bg-surface-elevated text-text-primary transition-all flex-shrink-0 min-h-[38px] sm:min-h-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-3 sm:mt-4 font-mono text-[11px] sm:text-xs text-text-secondary leading-relaxed">
                Feel free to email directly or use the quick message dispatch on the right.
              </p>
            </div>

            {/* Verified Professional Channels */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface/90 backdrop-blur-sm border border-border/80 shadow-xs">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-text-secondary font-semibold block mb-3 sm:mb-4">
                Verified Handles
              </span>

              <div className="space-y-2 sm:space-y-3 font-mono text-xs">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-surface-elevated/70 hover:bg-surface border border-border/80 hover:border-accent/40 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Linkedin className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-text-primary font-bold text-xs sm:text-sm">LinkedIn</p>
                      <p className="text-text-secondary text-[10px] sm:text-[11px]">devanshu-saini</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>

                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-surface-elevated/70 hover:bg-surface border border-border/80 hover:border-accent/40 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Github className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-text-primary font-bold text-xs sm:text-sm">GitHub</p>
                      <p className="text-text-secondary text-[10px] sm:text-[11px]">Devanshu-Saini-07</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>

                <a
                  href={LEETCODE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-surface-elevated/70 hover:bg-surface border border-border/80 hover:border-accent/40 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Code2 className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-text-primary font-bold text-xs sm:text-sm">LeetCode</p>
                      <p className="text-text-secondary text-[10px] sm:text-[11px]">devanshusaini_</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/80 hover:border-accent/30 p-4 sm:p-8 lg:p-10 shadow-sm hover:shadow-[0_0_35px_-5px_rgba(124,58,237,0.12)] transition-all reveal-r">
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <h3 className="font-display font-bold text-text-primary text-lg sm:text-xl">
                  Send a Direct Message
                </h3>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-text-secondary">
                Direct Dispatch //
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-1.5"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-lg bg-surface-elevated/80 border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-all duration-200 ${
                      errors.name
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-1.5"
                  >
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-surface-elevated/80 border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-all duration-200 ${
                      errors.email
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-1.5"
                >
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Opportunity / Collaboration / Inquiry"
                  className={`w-full px-4 py-3 rounded-lg bg-surface-elevated/80 border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-all duration-200 ${
                    errors.subject
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/20'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 font-mono text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-1.5"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your project, role, or proposal in detail..."
                  className={`w-full px-4 py-3 rounded-lg bg-surface-elevated/80 border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-all duration-200 resize-y ${
                    errors.message
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/20'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Success Notification */}
              {submittedStatus === 'success' && (
                <div className="p-4 rounded-lg bg-accent-secondary-subtle border border-accent-secondary/30 font-mono text-xs text-text-primary flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent-secondary">Launching your email client...</p>
                    <p className="text-text-secondary mt-1">
                      Your default mail application has been prompted with this message pre-filled. If it did not open automatically, send directly to {PRIMARY_EMAIL}.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
                <span className="font-mono text-[11px] text-text-secondary">
                  * Launches your email client with subject &amp; body pre-filled
                </span>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto hover:shadow-[0_0_25px_rgba(223,193,123,0.35)] transition-all"
                >
                  {isSubmitting ? (
                    <span>Preparing dispatch...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-1.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
