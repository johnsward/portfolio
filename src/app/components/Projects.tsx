import React from "react";
import { projects } from "../data/projects";
import GithubLogo from "./icons/githublogo.svg";
import { Button } from "./ui/button";
import LanguageIcon from '@mui/icons-material/Language';

export const Projects = () => {
  return (
    <section className="mx-auto container max-w-3xl px-4 md:px-0 z-50 animate-fade-up animate-once animate-delay-[300ms]">
      <h1 className="font-semibold text-3xl text-gray-800 dark:text-slate-200">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 pt-6 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="rounded-xl border bg-card text-card-foreground shadow"
          >
            <div
              key={proj.title}
              className="flex flex-col justify-start gap-2 p-4"
            >
              <span>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover"
                />
              </span>
              <div className="pt-0 flex flex-col gap-2">
              <h1 className="font-semibold text-[14px] text-gray-900 dark:text-slate-200">
                {proj.title}
              </h1>
              <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {proj.description}
              </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <ul className="flex flex-row gap-2">
                  {proj.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row gap-2 justify-between mt-6">
                <Button
                  variant="outline"
                  size={"sm"}
                  className="text-[10px]"
                  onClick={() => window.open(proj.sourceLink)}
                >
                  <GithubLogo />
                  {"Source"}
                </Button>
                {proj.link && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(proj.link)}
                    className="text-[10px]"
                  >
                    {"Website"}
                    <LanguageIcon />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
