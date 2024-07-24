import React from "react";
import { LuLandmark } from "react-icons/lu";
import { LuPiggyBank } from "react-icons/lu";
import { LuCoins } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Knowledge",
    hash: "#knowledge",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Expert - Java",
    location: "Luxembourg",
    description:
      "I worked as Full-stack developer for the client European Parliament of Luxembourg and Beligium.",
    icon: React.createElement(LuLandmark),
    date: "2019 - 2021",
  },
  {
    title: "Senior software Developer",
    location: "Milan, Italy",
    description:
      "I worked as a Senior Software developer for the client Nexi Banca.",
    icon: React.createElement(LuPiggyBank),
    date: "2017 - 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "Monza, Italy",
    description:
      "I worked as a Software developer for the Client Generali Italia - Insurance.",
    icon: React.createElement(LuCoins),
    date: "2014 - 2016",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  "Java",
  "Spring",
  "Spring Boot",
  "Spring MVC",
  "JPA",
  "Hibernate",
  "Rest API",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Jenkins",
  "Maven",
  "Aglie",
] as const;

export const knowledgeData = [
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Docker",
  "Microservices",
  "MongoDB",
  "PostgreSQL",
] as const;
