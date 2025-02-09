"use client";
import React, { useEffect, useState } from "react";
import SunIcon from "./icons/sunicon.svg";
import DarkModeIcon from "./icons/darkmodeicon.svg";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Get theme from localStorage or detect system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="fixed top-0 right-0 py-4 px-8">
      <button
        onClick={toggleTheme}
        title={theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
        aria-label={
          theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"
        }
        className="cursor-pointer"
      >
        {theme === "light" ? (
          <DarkModeIcon className="w-6 h-6 text-gray-800" />
        ) : (
          <SunIcon className="w-6 h-6 text-slate-200" />
        )}
      </button>
    </div>
  );
};
