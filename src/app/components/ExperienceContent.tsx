import React from "react";
import { experience } from "../data/experience";

export const ExperienceContent = () => {

    return (
    <div className="rounded-lg border bg-card text-card-foreground shadow border-slate-400">
      <ul className="ml-10 border-l border-dotted border-gray-800 dark:border-slate-400">
        {experience.map((exp) => (
          <li key={exp.company} className="relative ml-10 py-4">
            <a
              href={exp.link}
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white cursor-pointer"
            >
              <span className="relative flex items-center justify-center shrink-0 overflow-hidden rounded-full size-12 border border-gray-600 dark:border-slate-200">
                <img
                  key={exp.id}
                  src={exp.logo}
                  alt={exp.company}
                  className="aspect-square h-full w-full bg-background object-contain"
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground">
                <span>{exp.date}</span>
              </time>
              <h1 className="font-semibold leading-none">
                {exp.company}
              </h1>
              <h2 className="text-sm text-muted-foreground">
                {exp.title}
              </h2>

              <ul className="flex flex-col px-4 py-2 gap-2">
                {exp.description.map((resp) => (
                  <li
                    className="prose pr-8 text-sm dark:prose-invert list-disc"
                    key={resp}
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
