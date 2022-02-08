export default function NavItem({ href, className, children }) {
  return (
    <li>
      <a
        href={href}
        className={`text-white/60 hover:text-white duration-150 ${className}`}
      >
        {children}
      </a>
    </li>
  );
}
