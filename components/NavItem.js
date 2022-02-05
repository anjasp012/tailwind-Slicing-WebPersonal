export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-white/60">
        {children}
      </a>
    </li>
  );
}
