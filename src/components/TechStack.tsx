import React from "react";
import { techStack } from "../data/techStackLogos";

export const TechStack = () => {
  return (
    <section className="mx-auto container max-w-3xl px-4 md:px-0 z-50 animate-fade-up animate-once animate-delay-[300ms]">
      <h1 className="font-semibold text-3xl text-gray-800 dark:text-slate-200">
        Tech Stack
      </h1>

      <div className="pt-6 flex flex-wrap gap-2 items-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center p-2 border shadow-md rounded-xl"
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
