"use client";

import dynamic from "next/dynamic";

const Experience = dynamic(() => import("./Experience"), {
  ssr: false,
});

export function ExperienceLoader() {
  return <Experience />;
}
