import React from "react";
import { projects } from "../data/projects";
import GithubLogo from "./icons/githublogo.svg";
import { Button } from "./ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Projects = () => {
  return (
    <section className="mx-auto container max-w-3xl px-4 md:px-0 z-50 animate-fade-up animate-once animate-delay-[300ms]">
      <h1 className="font-semibold text-3xl text-gray-800 dark:text-slate-200">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 pt-6 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.title} className="rounded-xl border bg-card text-card-foreground shadow">
            <div
              key={proj.title}
              className="flex flex-col justify-start gap-2 p-4"
            >
              <span>
                <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />
              </span>
              <h1 className="font-semibold text-[14px] text-gray-900 dark:text-slate-200">
                {proj.title}
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {proj.description}
              </p>
              <div className="flex flex-row gap-2 justify-between mt-3">
                <Button
                  variant="outline"
                  size="sm"
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
                  >
                    {"Visit"}
                    <ArrowForwardIcon />
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
