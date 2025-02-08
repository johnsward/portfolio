"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import DownloadIcon from "@mui/icons-material/Download";
import GithubIcon from "./icons/githublogo.svg";
import LinkedInIcon from "./icons/linkedinicon.svg";
import MailIcon from "./icons/mailicon.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const About = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="gap-2 flex flex-col justify-center items-center">
        <div className="flex flex-row align-center justify-center gap-1">
          <LocationOnIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400 font-semibold">
            {"Sweden"}
          </p>
        </div>
        <h1 className="flex flex-row gap-4 font-semibold dark:text-slate-200 text-gray-800 text-5xl">
          Hi, I'm <p className="text-blue-400">John!</p>
        </h1>
        <h2 className="font-regular text-gray-800 dark:text-gray-200 text-xl">
          {"Software Developer & Student"}
        </h2>
        <p className="dark:text-slate-400 text-basic text-gray-600 mt-2 font-light">
        {"Currently studying a BSc in Information Systems. In the meantime, I enjoy building cool things."}
        </p>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row items-center gap-4">
          <Button
            variant="outline"
            onClick={() => window.open("/cv.pdf", "_blank")}
            title="CV"
            aria-label="CV"
            className="dark:text-slate-300 text-gray-800 border-gray-400 dark:border-slate-400"
          >
            {"CV"}
            <DownloadIcon />
          </Button>
          <a
            className="w-8 h-8 cursor-pointer hover:rotate-12 transition-transform duration-300"
            onClick={() =>
              window.open("https://github.com/johnsward", "_blank")
            }
            title="Github"
            aria-label="Github"
          >
            <GithubIcon className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-slate-200" />
          </a>
          <a
            className="w-8 h-8 cursor-pointer hover:rotate-12 transition-all ease-in duration-200"
            onClick={() =>
              window.open("https://github.com/johnsward", "_blank")
            }
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-slate-200" />
          </a>
          <a
            className="w-8 h-8 cursor-pointer hover:rotate-12 transition-transform duration-300"
            onClick={() => router.push("mailto: johnsvard@outlook.com")}
            title="Email"
            aria-label="Email"
          >
            <MailIcon className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-slate-200" />
          </a>
        </ul>
      </div>
      <div className="flex flex-row p-4 gap-2"></div>
    </div>
  );
};
