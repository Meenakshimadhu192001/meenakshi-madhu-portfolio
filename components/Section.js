export default function Section({ id, label, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 scroll-mt-16">
      <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-accent dark:text-accent-dark">
        <span className="opacity-60">// </span>{label}
      </h2>
      {children}
    </section>
  );
}
