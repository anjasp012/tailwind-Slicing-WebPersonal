import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import OverviewSection from "../components/OverviewSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
