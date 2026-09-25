"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  Clock,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";

export function Contact() {
  const { personal, services } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please include a project description or message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
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
    setSubmitting(true);

    // Simulate sending email / webhook integration
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-[#071326]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an enterprise machine learning project, need WhatsApp/voice automation, or want to discuss a full-time role — my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1E3D]/80 border border-slate-200 dark:border-blue-900/40 shadow-sm flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors mt-0.5 block break-all"
                  >
                    {personal.email}
                  </a>
                  <div className="text-xs text-slate-500 mt-1">Guaranteed reply within 24 hours</div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personal.email, "email")}
                type="button"
                aria-label="Copy email address"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                title="Copy to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1E3D]/80 border border-slate-200 dark:border-blue-900/40 shadow-sm flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={personal.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mt-0.5 block"
                  >
                    {personal.phoneDisplay}
                  </a>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                    Click to open direct WhatsApp chat
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personal.phone, "phone")}
                type="button"
                aria-label="Copy phone number"
                className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Copy to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1E3D]/80 border border-slate-200 dark:border-blue-900/40 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Base Location
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  Cairo, Egypt
                </div>
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>GMT+2 Timezone • Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Freelance & Social Badges */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1E3D]/80 border border-slate-200 dark:border-blue-900/40 shadow-sm">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                Freelance & Developer Profiles
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personal.social.khamsat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/30 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-orange-500 hover:border-orange-500/50 transition-all flex items-center justify-between"
                >
                  <span>Khamsat Profile</span>
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                </a>

                <a
                  href={personal.social.mostaql}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/30 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-blue-500 hover:border-blue-500/50 transition-all flex items-center justify-between"
                >
                  <span>Mostaql Profile</span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </a>

                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/30 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-blue-500 hover:border-blue-500/50 transition-all flex items-center justify-between"
                >
                  <span>GitHub Repos</span>
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/30 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-blue-500 hover:border-blue-500/50 transition-all flex items-center justify-between"
                >
                  <span>LinkedIn Network</span>
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1E3D]/80 border border-slate-200 dark:border-blue-900/40 shadow-xl">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send a Message
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Fill out the form below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="mt-8 p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your inquiry has been received. I will review your requirements and respond to{" "}
                    <b>{formData.email}</b> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    type="button"
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eng. Ahmed Hassan"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071326] border text-sm text-slate-900 dark:text-white transition-all ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 dark:border-blue-900/50 focus:border-blue-500 dark:focus:border-cyan-400"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071326] border text-sm text-slate-900 dark:text-white transition-all ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 dark:border-blue-900/50 focus:border-blue-500 dark:focus:border-cyan-400"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Project or Inquiry Focus
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/50 text-sm text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-cyan-400 transition-all"
                    >
                      <option value="">Select a service / topic (optional)</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Hiring / Full-Time Role">Full-Time / Teaching Assistant Opportunity</option>
                      <option value="Custom Project Consultation">Custom Project Consultation</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. WhatsApp Automation Bot for Clinic"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/50 text-sm text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-cyan-400 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message / Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your data pipeline, automation needs, timeline, or company opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071326] border text-sm text-slate-900 dark:text-white transition-all ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-200 dark:border-blue-900/50 focus:border-blue-500 dark:focus:border-cyan-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    id="contact-submit-btn"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Mostafa</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
