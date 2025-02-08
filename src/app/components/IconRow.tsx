import React from "react";
import GithubIcon from "./icons/githublogo.svg";
import LinkedInIcon from "./icons/linkedinicon.svg";
import MailIcon from "./icons/mailicon.svg";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface IconRowProps {
  isButtonEnabled: boolean;
}

export const IconRow: React.FC<IconRowProps> = ({ isButtonEnabled }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center">
      <ul className="flex flex-row items-center gap-4">
        {isButtonEnabled && (
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
        )}
        <a
          className="w-8 h-8 cursor-pointer hover:rotate-12 transition-transform duration-300"
          onClick={() => window.open("https://github.com/johnsward", "_blank")}
          title="Github"
          aria-label="Github"
        >
          <GithubIcon className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-slate-200" />
        </a>
        <a
          className="w-8 h-8 cursor-pointer hover:rotate-12 transition-all ease-in duration-200"
          onClick={() => window.open("https://github.com/johnsward", "_blank")}
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
  );
};
