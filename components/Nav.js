import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className="flex space-x-12">
      <NavItem href="#OverviewSection">Overview</NavItem>
      <NavItem href="#SkillsSection">Skills</NavItem>
      <NavItem href="#ProjectSection">Project</NavItem>
      <NavItem href="#ContactSection">Contact</NavItem>
    </ul>
  );
}
