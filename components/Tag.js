export default function Tag({ children }) {
  return (
    <span className="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-xs text-slate-600 dark:border-slate-700 dark:text-slate-400">
      {children}
    </span>
  );
}
