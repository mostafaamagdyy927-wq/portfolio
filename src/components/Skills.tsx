"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import {
  Code,
  Brain,
  Database,
  Bot,
  Cloud,
  Layout,
  Radio,
  Check,
  Sparkles,
} from "lucide-react";

export function Skills() {
  const { skillsCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-blue-500" />,
    Brain: <Brain className="w-5 h-5 text-indigo-500" />,
    Database: <Database className="w-5 h-5 text-cyan-500" />,
    Bot: <Bot className="w-5 h-5 text-emerald-500" />,
    Cloud: <Cloud className="w-5 h-5 text-sky-500" />,
    Layout: <Layout className="w-5 h-5 text-amber-500" />,
    Radio: <Radio className="w-5 h-5 text-purple-500" />,
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillsCategories
      : skillsCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-[#071326]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills, Tools & Technologies"
          subtitle="A comprehensive toolkit spanning data engineering pipelines, predictive machine learning, autonomous multi-agent workflows, and cloud deployments."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                : "bg-white dark:bg-[#0B1E3D] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40 hover:bg-slate-100 dark:hover:bg-blue-900/30"
            }`}
          >
            All Categories ({skillsCategories.length})
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-semibold"
                  : "bg-white dark:bg-[#0B1E3D] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40 hover:bg-slate-100 dark:hover:bg-blue-900/30"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={`skill-card-${category.id}`}
              className="p-6 rounded-2xl bg-white dark:bg-[#0B1E3D]/70 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/50">
                    {iconMap[category.icon]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Badges/Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        skill.highlight
                          ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-700/60 shadow-xs"
                          : "bg-slate-100 dark:bg-[#071326] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/30"
                      }`}
                    >
                      {skill.highlight && (
                        <Sparkles className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-blue-900/30 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{category.skills.length} core tools</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Production Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
