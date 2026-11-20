'use client';

import React, { useState } from 'react';
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
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
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

    // Prepare mailto fallback URL
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Devanshu,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PRIMARY_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');

      // Trigger user's mail client with pre-filled content
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Have an interesting idea? Let's build something."
          description="Whether you want to discuss a project, explore collaboration, or talk about software engineering, my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Action */}
            <div className="p-6 rounded-xl bg-surface border border-border">
              <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-medium block mb-2">
                Primary Contact
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-surface-elevated border border-border">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-text-primary truncate">
                    {PRIMARY_EMAIL}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-border hover:border-accent bg-surface hover:bg-surface-elevated text-text-primary transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-3 font-mono text-xs text-text-secondary">
                Prefer email? Click copy or write directly to reach out.
              </p>
            </div>

            {/* Channels & Profiles */}
            <div className="p-6 rounded-xl bg-surface border border-border">
              <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-medium block mb-4">
                Professional Handles
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-surface border border-border hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-text-primary font-semibold">LinkedIn</p>
                      <p className="text-text-secondary text-[11px]">devanshu-saini</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>

                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-surface border border-border hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-text-primary font-semibold">GitHub</p>
                      <p className="text-text-secondary text-[11px]">Devanshu-Saini-07</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>

                <a
                  href={LEETCODE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-surface border border-border hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-text-primary font-semibold">LeetCode</p>
                      <p className="text-text-secondary text-[11px]">devanshusaini_</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <MessageSquare className="w-4 h-4 text-accent" />
              <h3 className="font-display font-bold text-text-primary text-lg">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-text-primary font-medium mb-1.5"
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
                    className={`w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-border focus:border-accent'
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
                    className="block font-mono text-xs uppercase tracking-wider text-text-primary font-medium mb-1.5"
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
                    className={`w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-border focus:border-accent'
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
                  className="block font-mono text-xs uppercase tracking-wider text-text-primary font-medium mb-1.5"
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
                  placeholder="Project inquiry / Software collaboration"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-border focus:border-accent'
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
                  className="block font-mono text-xs uppercase tracking-wider text-text-primary font-medium mb-1.5"
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
                  placeholder="Tell me about your idea, requirements, or opportunity..."
                  className={`w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-colors resize-y ${
                    errors.message ? 'border-red-500' : 'border-border focus:border-accent'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Status Notice */}
              {submittedStatus === 'success' && (
                <div className="p-3.5 rounded-md bg-accent-subtle border border-accent/30 font-mono text-xs text-text-primary flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent">Launching your email client...</p>
                    <p className="text-text-secondary mt-0.5">
                      Your default mail application has been prompted with this message pre-filled. If it didn’t open, you can send it directly to {PRIMARY_EMAIL}.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[11px] text-text-secondary">
                  * Opens email client with message pre-filled
                </span>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Preparing email...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
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
