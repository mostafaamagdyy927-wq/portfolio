"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Certification } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { CertificateModal } from "./CertificateModal";
import {
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  Eye,
  Sparkles,
} from "lucide-react";

export function Certifications() {
  const { certifications } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);

  const categories = [
    "All",
    "AWS & Cloud",
    "Government & ITIDA",
    "Data & Databases",
    "Programming",
  ];

  const filteredCerts =
    selectedFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === selectedFilter);

  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Credentials"
          title="Certifications & Honors"
          subtitle="Accredited credentials earned from AWS, Udacity, ITIDA, Mahara-Tech, IT Sharks, and DataCamp."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            const count =
              cat === "All"
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                type="button"
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-white dark:bg-[#0B1E3D] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40 hover:bg-slate-100 dark:hover:bg-blue-900/30"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
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

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="group rounded-3xl bg-white dark:bg-[#0B1E3D]/70 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Thumbnail Container */}
              {cert.image && (
                <div
                  onClick={() => setPreviewCert(cert)}
                  className="relative w-full h-48 sm:h-52 bg-[#071326] cursor-pointer overflow-hidden border-b border-slate-100 dark:border-blue-900/30 group-hover:opacity-95"
                >
                  <Image
                    src={cert.image}
                    alt={cert.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/0 transition-colors" />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/50 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-cyan-400 backdrop-blur-md border border-cyan-500/30">
                      {cert.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-2.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 pt-1">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-blue-900/30 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>

                  <button
                    onClick={() => setPreviewCert(cert)}
                    type="button"
                    className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        <CertificateModal
          certificate={previewCert}
          onClose={() => setPreviewCert(null)}
        />
      </div>
    </section>
  );
}
