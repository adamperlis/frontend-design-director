import { archetypes, type ArchetypeId, type PageSection } from "./archetypes";

const layoutClasses: Record<PageSection["layout"], string> = {
  split: "lg:grid-cols-2 lg:items-center",
  stage: "lg:grid-cols-[0.65fr_1.35fr] lg:items-center",
  chapters: "lg:grid-cols-[0.75fr_1.25fr] lg:items-start",
  grid: "lg:grid-cols-3",
  editorial: "lg:grid-cols-[0.65fr_1.35fr] lg:items-start",
  index: "lg:grid-cols-[18rem_1fr] lg:items-start",
};

export function ArchetypePage({ type }: { type: ArchetypeId }) {
  const blueprint = archetypes[type];
  return (
    <main className="bg-stone-100 text-neutral-950">
      <header className="mx-auto flex min-h-16 w-[min(94vw,90rem)] items-center justify-between border-b border-black/15">
        <a href="#top" className="font-semibold">Original brand</a>
        <a href="#action" className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white">{blueprint.primaryAction}</a>
      </header>
      <p id="top" className="mx-auto w-[min(94vw,90rem)] pt-20 text-sm text-neutral-600">Concept prompt: {blueprint.conceptPrompt}</p>
      {blueprint.sections.map((section, index) => (
        <section id={section.id === "close" || section.id === "contact" ? "action" : section.id} key={section.id} className={`mx-auto grid min-h-[70svh] w-[min(94vw,90rem)] gap-10 border-b border-black/15 py-[clamp(4rem,9vw,9rem)] ${layoutClasses[section.layout]}`}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">{String(index + 1).padStart(2, "0")} / {section.eyebrow}</p>
            <h2 className="mt-5 max-w-[15ch] text-balance text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.055em]">{section.heading}</h2>
            <p className="mt-6 max-w-xl text-lg leading-7 text-neutral-600">{section.purpose}</p>
          </div>
          <div className="min-h-80 rounded-3xl border border-black/15 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Suggested proof</p>
            <strong className="mt-3 block text-2xl">{section.proof}</strong>
            <p className="mt-4 max-w-md text-neutral-600">Replace this placeholder with real content and a composition specific to the project. The blueprint describes intent, not a mandatory component.</p>
          </div>
        </section>
      ))}
    </main>
  );
}
