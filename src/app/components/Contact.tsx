import React from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import MailIcon from "./icons/mailicon.svg";
import LinkedInIcon from "./icons/linkedinicon.svg";
import { useRouter } from "next/navigation";
import { IconRow } from "./IconRow";

export const Contact = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-end items-center gap-6">
      <p className="text-[12px] font-semibold text-gray-800 dark:text-slate-200">{"Don't forget to reach out!"}</p>
      <IconRow isButtonEnabled={false} />
    </div>
  );
};
