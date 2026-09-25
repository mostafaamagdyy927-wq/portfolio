"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      id="theme-toggle-btn"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-center
        ${theme === "dark" 
          ? "bg-slate-900/80 border-blue-900/50 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
          : "bg-white border-slate-200 text-blue-600 hover:bg-slate-100 hover:border-blue-400 hover:shadow-md"}
        ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
