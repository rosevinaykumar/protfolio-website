import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
//import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import TechStack from "@/components/techStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Projects /> */}
      <Experience />
      <TechStack />
      <Skills />

      <Contact />
    </main>
  );
}
