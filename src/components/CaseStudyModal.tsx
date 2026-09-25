"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function CaseStudyModal({
  project,
  onClose,
  onNext,
  onPrev,
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-blue-900/60 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-white/90 dark:bg-[#071326]/90 backdrop-blur-md border-b border-slate-200 dark:border-blue-900/40">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              {project.resultMetric}
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#0B1E3D] text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Banner Screenshot */}
          <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-blue-900/50 bg-[#0B1E3D]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>

          {/* Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1E3D]/50 border border-slate-200 dark:border-blue-900/30">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Project Overview
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> The Problem
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Key Goals */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Engineering Objectives & Goals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.goals.map((g, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1E3D]/40 border border-slate-200 dark:border-blue-900/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture Flow */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <span>System Architecture & Pipeline Flow</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {caseStudy.architectureFlow.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1E3D]/60 border border-slate-200 dark:border-blue-900/40 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                      STEP {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Challenges & Solutions */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span>Challenges Overcome & Solutions</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B1E3D]/40 border border-slate-200 dark:border-blue-900/30 space-y-2"
                >
                  <div className="text-xs font-bold text-red-500 dark:text-red-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Challenge: {c.challenge}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><b>Engineered Solution:</b> {c.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Measured Impact */}
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <h3 className="text-base font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Measured Results & Real Impact
            </h3>
            <ul className="space-y-2">
              {caseStudy.results.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-[#0B1E3D] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="sticky bottom-0 z-20 p-5 bg-white/95 dark:bg-[#071326]/95 backdrop-blur-md border-t border-slate-200 dark:border-blue-900/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                type="button"
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-blue-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-blue-900/30"
              >
                ← Previous Case Study
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                type="button"
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-blue-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-blue-900/30"
              >
                Next Case Study →
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
