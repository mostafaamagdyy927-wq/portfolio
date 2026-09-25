"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import {
  ExternalLink,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div
      id={`project-card-${project.id}`}
      className="group rounded-3xl bg-white dark:bg-[#0B1E3D]/70 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Project Image Preview */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#0A192F]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-transparent to-transparent opacity-50" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/80 text-cyan-400 backdrop-blur-md border border-cyan-500/30">
            {project.category}
          </span>
          {project.isFlagship && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white backdrop-blur-md flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3 text-cyan-300" />
              <span>Flagship</span>
            </span>
          )}
        </div>

        {/* Bottom Metric Pill */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.resultMetric}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-blue-600/90 dark:text-cyan-400/90">
            {project.subtitle}
          </p>

          <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Problem & Solution Snippet */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-[#071326]/60 border border-slate-200/80 dark:border-blue-900/30 text-xs space-y-1.5">
            <div>
              <span className="font-bold text-red-500 dark:text-red-400">Problem: </span>
              <span className="text-slate-600 dark:text-slate-400 line-clamp-2">{project.problem}</span>
            </div>
            <div>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">Solution: </span>
              <span className="text-slate-600 dark:text-slate-400 line-clamp-2">{project.solution}</span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-[#071326] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 rounded-md text-[11px] font-medium text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-blue-900/30 flex items-center justify-between gap-2">
          {project.caseStudy ? (
            <button
              onClick={() => onOpenCaseStudy(project)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white dark:text-cyan-400 dark:hover:text-white border border-blue-600/20 dark:border-blue-400/30 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Case Study</span>
            </button>
          ) : (
            <span className="text-xs text-slate-400 font-mono">Delivered Project</span>
          )}

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-2 rounded-xl bg-slate-100 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/40 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 transition-all"
                title="View Code on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-2 rounded-xl bg-slate-100 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/40 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 transition-all"
                title="View Live Demo"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
