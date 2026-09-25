import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  Target,
} from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-[#071326]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education & Academic Standing"
          subtitle="Rigorous foundations in data science, predictive algorithms, computational statistics, and database systems."
        />

        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1E3D]/80 border-2 border-blue-500/20 dark:border-blue-900/60 shadow-xl relative overflow-hidden">
            {/* Top accent banner */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-700" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-blue-900/40">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <div className="mt-1 text-base font-semibold text-blue-600 dark:text-cyan-400">
                    {education.institution}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {education.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Distinction Pill */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 shrink-0">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <div>
                    <div className="text-[11px] uppercase font-bold tracking-wider">
                      Academic Distinction
                    </div>
                    <div className="text-sm font-extrabold">{education.standing}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standing note */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50/80 dark:bg-[#071326] border border-blue-100 dark:border-blue-900/50 flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Academic Cohort Standing: </span>
                {education.standingNote}
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Relevant Coursework & Core Disciplines</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 dark:bg-[#071326]/70 border border-slate-200/80 dark:border-blue-900/30 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Long-term goal */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-blue-900/40 flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <Target className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Future Career Path: </span>
                {education.aspirations}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
