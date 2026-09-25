import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Building2,
  Sparkles,
} from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work & Professional Training"
          title="Experience & Practical Impact"
          subtitle="Real client deliveries across Egypt and the Gulf, combined with elite national training under Egypt's Ministry of Communications and Information Technology."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Timeline Bar */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-800 hidden sm:block opacity-40" />

          <div className="flex flex-col gap-10">
            {experience.map((item, index) => (
              <div
                key={item.id}
                id={`exp-item-${item.id}`}
                className="relative flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#0B1E3D] border-2 border-blue-500 shadow-lg shadow-blue-500/20 items-center justify-center z-10">
                  <Briefcase className="w-7 h-7 text-blue-600 dark:text-cyan-400" />
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1E3D]/70 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {item.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-y-1 gap-x-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">
                      <Building2 className="w-4 h-4 shrink-0" />
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {item.location}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2.5">
                    {item.description.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-blue-900/30 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                      Applied Tech:
                    </span>
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#071326] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
