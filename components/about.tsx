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
      <p className="mb-3 font-medium">
        I'm full-stack developer with 5 years of experience in developing and
        maintaining web-based applications. I have good communication skills, am
        self-motivated, and work well independently or on a team. My greatest
        motivator is achieving a high level of customer satisfaction by
        delivering superior performance under pressure and having the ability to
        understand complex problems and find optimum solutions. Strong
        engineering professional graduated from Politecnico di Milano
        University, Italy.
      </p>
    </motion.section>
  );
}
