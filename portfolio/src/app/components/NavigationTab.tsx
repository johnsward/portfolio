"use client";
import React from "react";
import { styles } from "../styles";

interface ExperienceTabProps {
  selectedTab: "experience" | "education";
  setSelectedTab: (tab: "experience" | "education") => void;
}

export const NavigationTab: React.FC<ExperienceTabProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center align-middle border h-10 border-slate-400 rounded-md">
        <div
          className="flex items-center justify-center cursor-pointer w-[50%]"
          style={selectedTab === "experience" ? styles.activeTab : undefined}
          onClick={() => setSelectedTab("experience")}
        >
          <h1 style={selectedTab == "experience" ? styles.activeText : styles.inactiveText}>
            Experience
          </h1>
        </div>
        <div
          className="flex items-center justify-center cursor-pointer w-[50%]"
          style={selectedTab === "education" ? styles.activeTab : undefined}
          onClick={() => setSelectedTab("education")}
        >
          <h1 style={selectedTab === "education" ? styles.activeText : styles.inactiveText}>
            Education
          </h1>
        </div>
      </div>
    </div>
  );
};
