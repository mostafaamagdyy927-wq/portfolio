"use client";

import React from "react";
import { portfolioData, Service } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import {
  BarChart3,
  TrendingUp,
  MessageSquareCode,
  Workflow,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Services() {
  const { services } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    BarChart3: <BarChart3 className="w-6 h-6 text-blue-500" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-500" />,
    MessageSquareCode: <MessageSquareCode className="w-6 h-6 text-emerald-500" />,
    Workflow: <Workflow className="w-6 h-6 text-purple-500" />,
    Target: <Target className="w-6 h-6 text-orange-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-sky-500" />,
  };

  const handleSelectService = (serviceTitle: string) => {
    const contactSection = document.getElementById("contact");
    const serviceSelect = document.getElementById("contact-service") as HTMLSelectElement | null;
    if (serviceSelect) {
      serviceSelect.value = serviceTitle;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-[#071326]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Freelance & Consulting Services"
          title="How I Can Help Your Business"
          subtitle="Specialized engineering offerings across advanced data analysis, predictive forecasting, and custom multi-agent automations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-8 rounded-3xl bg-white dark:bg-[#0B1E3D]/70 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/40 group-hover:scale-110 transition-transform">
                    {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-blue-500" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-[#071326] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-blue-900/30">
                <button
                  onClick={() => handleSelectService(service.title)}
                  type="button"
                  id={`service-btn-${service.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white dark:bg-[#071326] dark:hover:bg-blue-600 dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-blue-900/50 transition-all duration-200"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
