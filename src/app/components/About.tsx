"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconRow } from "./IconRow";

export const About = () => {
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
          {"Hi, I'm "}
          <p className="text-blue-400">{"John!"}</p>
        </h1>
        <h2 className="font-regular text-gray-800 dark:text-gray-200 text-xl">
          {"Software Developer & Student"}
        </h2>
        <p className="dark:text-slate-400 text-basic text-gray-600 mt-2 font-light">
          {
            "Currently studying a BSc in Information Systems. In the meantime, I enjoy building cool things."
          }
        </p>
      </div>
      <IconRow isButtonEnabled={true} />
    </div>
  );
};
