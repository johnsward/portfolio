import React from "react";
import { techStack } from "../data/techStackLogos";
import { SectionHeading } from "./SectionHeading";

export const TechStack = () => {
  return (
    <section className="mx-auto container max-w-3xl px-4 md:px-0 z-50 animate-fade-up animate-once animate-delay-[300ms]">
      <SectionHeading eyebrow="Toolbox" title="Tech Stack" />

      <div className="pt-6 flex flex-wrap gap-2 items-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center p-2 border shadow-md rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400/50 dark:hover:border-blue-500/40"
            >
              <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
              <p className="ml-2 mr-1 text-xs text-gray-800 dark:text-slate-200">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
};
