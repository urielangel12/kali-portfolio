export default function SectionTitle({ children, extra }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-ink sm:text-base">
        <span className="text-cyan">&gt;_</span> {children}
      </h2>
      {extra}
    </div>
  );
}
