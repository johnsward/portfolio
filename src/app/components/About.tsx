"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconRow } from "./IconRow";

export const About = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="gap-2 sm:gap-2  flex flex-col">
        <div className="flex flex-row gap-1">
          <LocationOnIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400 font-semibold">
            {"Sweden"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-3 sm:gap-4 text-5xl">
            <h1 className="flex flex-wrap font-semibold dark:text-slate-200 text-gray-800 ">
              {"Hi, I'm"}
            </h1>
            <span className="text-blue-400">John!</span>
          </div>
          <h2 className="font-regular text-pretty text-gray-800 dark:text-gray-200 text-xl">
            {"Software Developer & Student"}
          </h2>
          <p className="font-light text-pretty text-muted-foreground leading-none">
            {
              "Currently studying a BSc in Information Systems. In the meantime, I enjoy building cool things."
            }
          </p>
        </div>
        <span className="mt-2">
          <IconRow isButtonEnabled={true} />
        </span>
      </div>
    </div>
  );
};
