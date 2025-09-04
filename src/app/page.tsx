"use client";

import React from "react";
import { About } from "./components/About";
import { TabContent } from "./components/TabContent";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { BlurFade } from "./components/ui/blur-fade";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex flex-col md:p-12 py-4 gap-8 items-center scroll-smooth">
        <BlurFade inView className="w-full">
          <About />
        </BlurFade>
        <BlurFade inView>
          <TabContent />
        </BlurFade>
        <BlurFade inView>
          <TechStack />
        </BlurFade>
        <BlurFade inView>
          <Projects />
        </BlurFade>
        <BlurFade inView className="w-full">
          <Contact />
        </BlurFade>
      </div>
    </div>
  );
}
