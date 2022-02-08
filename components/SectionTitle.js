export default function SectionTitle({ className, children }) {
  return (
    <h1
      className={`-ml-96 mt-5 text-white text-[40px] font-bold tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
}
