import React from "react";
import { education } from "../data/education";

export const EducationContent = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow border-slate-400">
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
              <time className="text-xs text-muted-foreground">
                <span>{edu.date}</span>
              </time>
              <h1 className="font-semibold leading-none">{edu.school}</h1>
              <h2 className="text-sm text-muted-foreground">{edu.title}</h2>
              <ul className="flex flex-col px-4 py-2 gap-2">
                {edu.description.map((resp) => (
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
