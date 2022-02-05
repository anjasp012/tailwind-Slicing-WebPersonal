import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className="flex space-x-12">
      <NavItem href="#overview">Overview</NavItem>
      <NavItem>Skill</NavItem>
      <NavItem>Project</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}
