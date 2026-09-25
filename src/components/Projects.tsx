"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { Sparkles, Filter } from "lucide-react";

type ProjectCategory = "All" | "Data Science & ML" | "AI Automation" | "Web & IoT";

export function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "Data Science & ML",
    "AI Automation",
    "Web & IoT",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const flagshipProjects = projects.filter((p) => p.isFlagship);

  const handleNextCaseStudy = () => {
    if (!activeCaseStudy) return;
    const currentIndex = flagshipProjects.findIndex((p) => p.id === activeCaseStudy.id);
    const nextIndex = (currentIndex + 1) % flagshipProjects.length;
    setActiveCaseStudy(flagshipProjects[nextIndex]);
  };

  const handlePrevCaseStudy = () => {
    if (!activeCaseStudy) return;
    const currentIndex = flagshipProjects.findIndex((p) => p.id === activeCaseStudy.id);
    const prevIndex = (currentIndex - 1 + flagshipProjects.length) % flagshipProjects.length;
    setActiveCaseStudy(flagshipProjects[prevIndex]);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Works"
          title="Flagship Projects & Case Studies"
          subtitle="Real-world machine learning models, autonomous multi-agent pipelines, and assistive hardware built and deployed for industry and academia."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-white dark:bg-[#0B1E3D] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40 hover:bg-slate-100 dark:hover:bg-blue-900/30"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-[#071326] text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
          onNext={handleNextCaseStudy}
          onPrev={handlePrevCaseStudy}
        />
      </div>
    </section>
  );
}
