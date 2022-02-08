export default function SectionDescription({ className,children }) {
  return (
    <p className={`text-white/60 text-[18px] my-4 ${className}`}>{children}</p>
  );
}
