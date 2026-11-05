import Tag from "./Tag";

const Row = ({ k, v }) => (
  <div className="grid gap-1 sm:grid-cols-[110px_1fr]">
    <dt className="font-mono text-xs uppercase text-slate-500">{k}</dt>
    <dd className="text-sm leading-relaxed">{v}</dd>
  </div>
);

export default function ProjectCard({ p, index }) {
  return (
    <article className="rounded-xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-accent dark:border-slate-800 dark:hover:border-accent-dark">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">
          <span className="mr-2 font-mono text-sm text-slate-400">0{index + 1}</span>
          {p.name}
        </h3>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-mono text-sm text-accent hover:underline dark:text-accent-dark"
          >
            GitHub ↗
          </a>
        )}
      </div>
      <dl className="space-y-3">
        <Row k="Problem" v={p.problem} />
        <Row k="Solution" v={p.solution} />
        <Row k="My role" v={p.contribution} />
        <Row k="Outcome" v={<strong>{p.outcome}</strong>} />
      </dl>
      <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
    </article>
  );
}
