"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = portfolioData.navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#071326]/90 backdrop-blur-md shadow-lg shadow-blue-950/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-blue-900/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            id="nav-logo"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Mostafa Magdy - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B1E3D] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm text-cyan-400 group-hover:scale-110 transition-transform">
                  MM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Mostafa Magdy
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 dark:text-cyan-400/80">
                Data Science & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-slate-100/80 dark:bg-[#0B1E3D]/80 border border-slate-200/60 dark:border-blue-900/40 backdrop-blur-md">
            {portfolioData.navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-200/50 dark:hover:bg-blue-900/30"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              id="nav-cta-desktop"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger & Mobile Theme Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-btn"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-blue-900/50 bg-white dark:bg-[#0B1E3D] text-slate-700 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-white dark:bg-[#071326] border-b border-slate-200 dark:border-blue-900/50 p-6 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {portfolioData.navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-600/10 text-blue-600 dark:text-cyan-400 font-bold border-l-4 border-blue-600 dark:border-cyan-400"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-950/40"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-blue-900/40 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/25"
              >
                Let's Work Together
              </a>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-2">
                <span>Cairo, Egypt (GMT+2)</span>
                <span className="text-emerald-500 font-medium">● Available for Hire</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
