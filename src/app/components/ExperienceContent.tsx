import React from "react";
import { experience } from "../data/experience";

export const ExperienceContent = () => {

    return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <ul className="ml-10 border-l border-dotted border-gray-600">
        {experience.map((exp) => (
          <li key={exp.company} className="relative ml-10 py-4">
            <a
              href={exp.link}
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white cursor-pointer"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                <img
                  key={exp.id}
                  src={exp.logo}
                  alt={exp.company}
                  className="aspect-square h-full w-full bg-background object-contain"
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="flex text-xs text-muted-foreground gap-0.5">
                <span>{exp.date}</span>
              </time>
              <h1 className="font-semibold text-base text-gray-900 dark:text-slate-200">
                {exp.company}
              </h1>
              <h2 className="font-normal text-sm text-[#737373] dark:text-[#a3a3a3]">
                {exp.title}
              </h2>

              <ul className="flex flex-col px-4 py-2 gap-2">
                {exp.description.map((resp) => (
                  <li
                    className="text-sm list-disc text-[#737373] dark:text-[#a3a3a3]"
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
