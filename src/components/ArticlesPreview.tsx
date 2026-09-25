import React from "react";
import { SectionHeader } from "./SectionHeader";
import { BookOpen, Sparkles, Clock, ArrowRight } from "lucide-react";

export function ArticlesPreview() {
  const upcomingArticles = [
    {
      title: "Reverse Engineering Hidden Search APIs for Python Scraping",
      category: "Data Engineering",
      readTime: "Coming Soon",
      description: "How inspecting browser network telemetry uncovered an internal Elasticsearch endpoint on hatla2ee, boosting ingestion speed by 10x.",
    },
    {
      title: "Building Multi-Agent Executive Workflows with Claude API & Supabase",
      category: "AI Automation",
      readTime: "Coming Soon",
      description: "Architectural patterns for domain sub-agents managing Google Workspace with deterministic OAuth safeguards and async routing.",
    },
    {
      title: "Handling Extreme Class Imbalance in Predictive Fleet Maintenance",
      category: "Machine Learning",
      readTime: "Coming Soon",
      description: "Lessons from the AI4I 2020 dataset: PR-AUC evaluation, SMOTE balancing, and deploying FastAPI inference models for automotive telematics.",
    },
  ];

  return (
    <section id="articles" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Writing & Research"
          title="Articles & Engineering Notes"
          subtitle="Documenting deep-dives into machine learning systems, reverse-engineered scrapers, and multi-agent workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingArticles.map((article, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-[#0B1E3D]/50 border border-slate-200 dark:border-blue-900/40 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-blue-900/30 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-slate-500 dark:text-cyan-400/80 font-medium">
                  <Sparkles className="w-3 h-3" /> Draft in Progress
                </span>
                <span className="text-slate-400">Publication Pending</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
