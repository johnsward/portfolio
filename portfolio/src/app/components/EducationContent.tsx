import React from "react";
import { education } from "../data/education";

export const EducationContent = () => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <ul className="ml-10 border-dotted border-l border-gray-600">
        {education.map((edu) => (
          <li key={edu.id} className="relative ml-10 py-4">
            <a
              href={edu.link}
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white cursor-pointer"
            >
              <span className="relative flex items-center justify-center shrink-0 overflow-hidden rounded-full size-12 border border-gray-600 dark:border-slate-200">
                <img
                  key={edu.id}
                  src={edu.logo}
                  alt={edu.school}
                  className="aspect-square bg-white w-8 h-8 bg-background object-contain"
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="flex text-xs text-muted-foreground gap-0.5">
                <span>{edu.date}</span>
              </time>
              <h1 className="font-semibold text-base text-gray-900 dark:text-slate-200">
                {edu.school}
              </h1>
              <h2 className="font-normal text-sm text-[#737373] dark:text-[#a3a3a3]">
                {edu.title}
              </h2>
              <ul className="flex flex-col px-4 py-2 gap-2">
                {edu.description.map((resp) => (
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
