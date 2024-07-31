"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { techStackData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function TechStack() {
  const { ref } = useSectionInView("Tech Stack");

  return (
    <section
      id="techStack"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Tech Stack</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {techStackData.map((stack, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {stack}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
