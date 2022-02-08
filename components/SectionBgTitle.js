export default function SectionBgTitle({ className, children }) {
  return (
    <span
      className={`text-white/5 text-[100px] font-bold tracking-tight select-none animate-pulse ${className}`}
    >
      {children}
    </span>
  );
}
