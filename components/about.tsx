"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
        I&apos;m a full-stack developer with experience in developing and
        maintaining web-based applications. I possess strong communication
        skills, am self-motivated, and excel in both independent and team
        environments. My greatest motivator is achieving a high level of
        customer satisfaction by delivering superior performance under pressure.
        I have a proven ability to understand complex problems and find optimal
        solutions. I am a strong engineering professional, graduated from
        Politecnico di Milano University, Italy.
      </p>
    </motion.section>
  );
}
