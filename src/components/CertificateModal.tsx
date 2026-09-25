"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Certification } from "@/data/portfolioData";
import { X, CheckCircle, ExternalLink, Calendar, Building } from "lucide-react";

interface CertificateModalProps {
  certificate: Certification | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-blue-900/60 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-white/90 dark:bg-[#071326]/90 border-b border-slate-200 dark:border-blue-900/40">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400">
              {certificate.category}
            </span>
            <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
              {certificate.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close certificate preview"
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#0B1E3D] text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center">
          {certificate.image ? (
            <div className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200 dark:border-blue-900/50 bg-[#0B1E3D]/50 shadow-inner">
              <Image
                src={certificate.image}
                alt={certificate.altText}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-400 rounded-2xl">
              Certificate Image Preview
            </div>
          )}

          {/* Meta details */}
          <div className="w-full mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-[#0B1E3D]/50 border border-slate-200 dark:border-blue-900/30 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Building className="w-4 h-4 text-blue-500" />
              <span>Issuer: <b>{certificate.issuer}</b></span>
            </div>

            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>Date: <b>{certificate.date}</b></span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Credential</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
