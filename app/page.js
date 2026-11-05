import Section from "../components/Section";
import Tag from "../components/Tag";
import ProjectCard from "../components/ProjectCard";
import { profile, projects, experience, skills, education, certs } from "../data/content";

const nav = ["about", "projects", "experience", "skills", "education", "contact"];
const btn = "rounded-lg px-5 py-2.5 text-sm font-medium transition";
const primary = `${btn} bg-accent text-white hover:opacity-90 dark:bg-accent-dark dark:text-slate-950`;
const ghost = `${btn} border border-slate-300 hover:border-accent dark:border-slate-700 dark:hover:border-accent-dark`;

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#top" className="font-mono text-sm font-semibold">{profile.name}</a>
          <ul className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => (
              <li key={n}><a href={`#${n}`} className="capitalize text-slate-600 transition hover:text-accent dark:text-slate-400 dark:hover:text-accent-dark">{n}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <div id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-8 pt-20 md:grid-cols-[1.4fr_1fr]">
        <div className="rise">
          <p className="mb-4 font-mono text-sm text-accent dark:text-accent-dark">{profile.tagline}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-2 text-2xl text-slate-500 dark:text-slate-400">{profile.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={primary}>View projects</a>
            <a href={`mailto:${profile.email}`} className={ghost}>Get in touch</a>
          </div>
        </div>
        <aside className="rise rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm dark:border-slate-800 dark:bg-slate-900" style={{ animationDelay: ".15s" }}>
          <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">profile.json</p>
          {profile.facts.map(([k, v]) => (
            <p key={k} className="py-1"><span className="text-accent dark:text-accent-dark">{k}:</span> {v}</p>
          ))}
        </aside>
      </div>

      <Section id="about" label="about">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>

      <Section id="projects" label="featured projects">
        <div className="grid gap-6">
          {projects.map((p, i) => <ProjectCard key={p.name} p={p} index={i} />)}
        </div>
      </Section>

      <Section id="experience" label="experience">
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.role + e.org} className="grid gap-4 md:grid-cols-[200px_1fr]">
              <p className="font-mono text-sm text-slate-500">{e.period}</p>
              <div>
                <h3 className="text-lg font-semibold">{e.role} <span className="font-normal text-slate-500">· {e.org}</span></h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-accent">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" label="skills">
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-3 font-semibold">{group}</h3>
              <div className="flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" label="education & certifications">
        <div className="grid gap-6 md:grid-cols-2">
          {[...certs, ...education].map((x) => (
            <div key={x.title} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
              <h3 className="font-semibold">{x.title}</h3>
              <p className="text-sm text-slate-500">{x.org}{x.period && ` · ${x.period}`}</p>
              {x.note && <p className="mt-2 text-sm leading-relaxed">{x.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" label="contact">
        <p className="max-w-xl text-lg">Open to AI/ML Engineer, Machine Learning Engineer and GenAI Engineer roles. {profile.location}.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={primary}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={ghost}>LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={ghost}>GitHub ↗</a>
        </div>
      </Section>

      <footer className="border-t border-slate-200 py-8 text-center font-mono text-xs text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
