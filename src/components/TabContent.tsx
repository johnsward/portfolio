import React, { useState } from "react";
import { NavigationTab } from "./NavigationTab";
import { ExperienceContent } from "./ExperienceContent";
import { EducationContent } from "./EducationContent";

export const TabContent = () => {
  const [selectedTab, setSelectedTab] = useState<"experience" | "education">(
    "experience"
  );

  return (
    <div className="flex flex-col gap-4">
      <NavigationTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div>
        {selectedTab === "experience" ? (
          <ExperienceContent />
        ) : (
          <EducationContent />
        )}
      </div>
    </div>
  );
};
