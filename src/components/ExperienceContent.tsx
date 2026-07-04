import React from "react";
import { experience } from "../data/experience";

const parseMonthYear = (value: string) => {
  const [month, year] = value.split(" ");
  return new Date(`${month} 1, ${year}`);
};

const isCurrent = (startDate: string, endDate: string) => {
  const now = new Date();
  const start = parseMonthYear(startDate);
  const end = parseMonthYear(endDate);
  end.setMonth(end.getMonth() + 1);
  return now >= start && now < end;
};

export const ExperienceContent = () => {

    return (
    <div className="rounded-lg border bg-card text-card-foreground shadow border-slate-400">
      <ul className="ml-10 border-l border-dotted border-gray-800 dark:border-slate-400">
        {experience.map((exp) => {
          const current = isCurrent(exp.startDate, exp.endDate);
          return (
          <li
            key={exp.company}
            className="relative ml-10 py-4 pr-4 rounded-md transition-colors duration-200 hover:bg-accent/50"
          >
            <a
              href={exp.link}
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white cursor-pointer"
            >
              <span
                className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-full size-12 border ${
                  current
                    ? "border-blue-500 ring-2 ring-blue-400/40"
                    : "border-gray-600 dark:border-slate-200"
                }`}
              >
                <img
                  key={exp.id}
                  src={exp.logo}
                  alt={exp.company}
                  className="aspect-square h-full w-full bg-background object-contain"
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{exp.date}</span>
                {current && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-500 dark:text-blue-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                    </span>
                    Current
                  </span>
                )}
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
          );
        })}
      </ul>
    </div>
  );
};
