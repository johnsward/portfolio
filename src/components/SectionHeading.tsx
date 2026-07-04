import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">
        {eyebrow}
      </span>
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-3xl text-gray-800 dark:text-slate-200">
          {title}
        </h1>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </div>
  );
};
