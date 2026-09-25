"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  Download,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Award,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Database,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";

export function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-tech-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open for Opportunities & Freelance</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-cyan-400">
                <Award className="w-3.5 h-3.5 text-blue-500" />
                <span>DEPI Data Engineer Trainee (Cohort 5)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Mostafa Magdy
              </span>
            </h1>

            {/* Professional Title Subhead */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {personal.title}
              </span>
              <span className="hidden sm:inline-block text-slate-400 font-mono text-sm px-2.5 py-0.5 rounded bg-slate-200/60 dark:bg-blue-950/60 border border-slate-300 dark:border-blue-900/60">
                {personal.nameArabic}
              </span>
            </div>

            {/* Tagline & Short Intro */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personal.tagline}
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              {personal.heroSummary}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.cvPath}
                download="Mostafa_Magdy_CV.pdf"
                id="hero-cta-cv"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-[#0B1E3D] hover:bg-slate-100 dark:hover:bg-[#102B54] text-slate-900 dark:text-white border border-slate-300 dark:border-blue-800/80 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Social Icons & Freelance Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-blue-900/40 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-[#0B1E3D] border border-slate-200 dark:border-blue-900/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-[#0B1E3D] border border-slate-200 dark:border-blue-900/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-whatsapp"
                  aria-label="WhatsApp Direct"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-[#0B1E3D] border border-slate-200 dark:border-blue-900/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-400 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.social.mostaql}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-mostaql"
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#0B1E3D] border border-slate-200 dark:border-blue-900/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all"
                >
                  Mostaql (مستقل)
                </a>

                <a
                  href={personal.social.khamsat}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-khamsat"
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#0B1E3D] border border-slate-200 dark:border-blue-900/50 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all"
                >
                  Khamsat (خمسات)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Avatar & Floating Tech Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            {/* Ambient circular frame */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-700 p-[3px] shadow-2xl shadow-blue-600/30 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[21px] overflow-hidden bg-[#0B1E3D] relative">
                  <Image
                    src={personal.avatarPath}
                    alt="Mostafa Magdy - Data Science & AI Automation Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-blue-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white">
                        Cairo, Egypt • Helwan Univ
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-cyan-400">
                      Emtiaz / 4th Year
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge 1: Scikit-learn / ML */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#0F284E]/95 backdrop-blur-md border border-slate-200 dark:border-blue-700/60 shadow-xl flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Core ML</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Scikit-learn & EDA</div>
                </div>
              </div>

              {/* Floating Tech Badge 2: AI Agents & n8n */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#0F284E]/95 backdrop-blur-md border border-slate-200 dark:border-blue-700/60 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-400">AI Automation</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Claude API & n8n</div>
                </div>
              </div>

              {/* Floating Tech Badge 3: ETL & Data Engineering */}
              <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 px-3 py-2 rounded-xl bg-white/95 dark:bg-[#0F284E]/95 backdrop-blur-md border border-slate-200 dark:border-blue-700/60 shadow-xl items-center gap-2">
                <Database className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-white">
                  ETL Pipelines
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 dark:border-blue-900/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                id={`stat-card-${i}`}
                className="p-5 rounded-2xl bg-white/70 dark:bg-[#0B1E3D]/50 border border-slate-200/80 dark:border-blue-900/40 backdrop-blur-sm hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl sm:text-2xl font-bold text-blue-500">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
