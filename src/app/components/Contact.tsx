import React from "react";
import { IconRow } from "./IconRow";

export const Contact = () => {
  return (
    <div className="flex flex-row justify-end items-center gap-6">
      <p className="text-[12px] font-semibold text-gray-800 dark:text-slate-200">{"Don't forget to reach out!"}</p>
      <IconRow isButtonEnabled={false} />
    </div>
  );
};
