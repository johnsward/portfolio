"use client";

import React from "react";
import { About } from "./components/About";
import { TabContent } from "./components/TabContent";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";

export default function Home() {
  return (
    <div className="flex flex-col p-12 gap-12 items-center">
      <div data-magic="interactive-grid-pattern" className="interactive-grid-pattern">
        <About />
      </div>
      <div className="w-full">
        <TabContent />
      </div>
      <div>
        <TechStack />
      </div>
        <Projects />
    </div>
  );
}
