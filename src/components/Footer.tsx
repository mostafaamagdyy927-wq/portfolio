"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowUp,
  Mail,
  Heart,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  const { personal, navItems } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Bio & Branding (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B1E3D] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-sm text-cyan-400">MM</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{personal.shortName}</h3>
                <p className="text-xs font-mono text-cyan-400/80">{personal.title}</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building scalable data pipelines, predictive machine learning models, and autonomous AI automation systems for enterprises and global clients.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-xs text-blue-300">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Digital Egypt Pioneers Initiative (DEPI) Trainee</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-300 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Platforms (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-300 mb-4">
              Direct Contact & Socials
            </h4>
            <p className="text-xs text-slate-400">
              Based in Cairo, Egypt. Available for international freelance projects, contract consulting, and full-time technical roles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs">
              <a
                href={personal.social.mostaql}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 underline decoration-slate-700 hover:decoration-cyan-400"
              >
                Mostaql Profile
              </a>
              <span>•</span>
              <a
                href={personal.social.khamsat}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 underline decoration-slate-700 hover:decoration-cyan-400"
              >
                Khamsat Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mostafa Magdy Abdelhamid Ramadan. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Designed & Built with Next.js, TypeScript & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              id="back-to-top-btn"
              aria-label="Back to top"
              className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-200 border border-slate-700 hover:border-blue-500"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
