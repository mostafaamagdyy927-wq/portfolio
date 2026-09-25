import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import {
  GraduationCap,
  ShieldCheck,
  Cpu,
  Rocket,
  MapPin,
  Mail,
  Languages,
  Briefcase,
  CheckCircle,
  FileText,
} from "lucide-react";

export function About() {
  const { about, personal } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-500" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-500" />,
    Rocket: <Rocket className="w-5 h-5 text-purple-500" />,
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Mostafa"
          title="Bridging Data Science, Engineering & Autonomous AI"
          subtitle="A fourth-year academic standout at Helwan University and DEPI government trainee delivering production systems for real clients."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Key Strengths */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "text-lg font-medium text-slate-900 dark:text-white" : ""}>
                {p}
              </p>
            ))}

            {/* Quick Facts / Info Grid */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-blue-900/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#0B1E3D]/50 border border-slate-200/80 dark:border-blue-900/30">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400">Location</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#0B1E3D]/50 border border-slate-200/80 dark:border-blue-900/30">
                <Mail className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400">Email</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#0B1E3D]/50 border border-slate-200/80 dark:border-blue-900/30">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400">Experience</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{personal.experienceLevel}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#0B1E3D]/50 border border-slate-200/80 dark:border-blue-900/30">
                <Languages className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400">Languages</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Arabic (Native), English (B1)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={personal.cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-md transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {about.highlights.map((h, i) => (
              <div
                key={h.title}
                id={`about-highlight-${i}`}
                className="p-5 rounded-2xl bg-white dark:bg-[#0B1E3D]/60 border border-slate-200/90 dark:border-blue-900/40 shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#071326] border border-slate-200 dark:border-blue-900/40 shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[h.icon] || <CheckCircle className="w-5 h-5 text-blue-500" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {h.desc}
                    </p>
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
