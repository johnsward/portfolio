"use client";
import React from "react";
import { motion } from "motion/react";

interface ExperienceTabProps {
  selectedTab: "experience" | "education";
  setSelectedTab: (tab: "experience" | "education") => void;
}

const tabs: { key: "experience" | "education"; label: string }[] = [
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
];

export const NavigationTab: React.FC<ExperienceTabProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="flex flex-row items-center justify-center h-10 border border-slate-400 dark:border-slate-600 rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setSelectedTab(tab.key)}
          className="relative flex-1 h-full cursor-pointer"
        >
          {selectedTab === tab.key && (
            <motion.div
              layoutId="active-tab-pill"
              className="absolute inset-0 rounded-md bg-blue-600"
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            />
          )}
          <span
            className={`relative z-10 text-sm font-semibold transition-colors duration-200 ${
              selectedTab === tab.key
                ? "text-white"
                : "text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};
