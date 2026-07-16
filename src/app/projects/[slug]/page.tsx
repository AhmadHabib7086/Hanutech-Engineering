import { notFound } from "next/navigation";
import Image from "next/image";
import { Container, Button } from "@/src/components/ui";
import { getProject, projects } from "@/src/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? project.title : "Project" };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="relative h-80 bg-ink dark:bg-slate-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            {project.title}
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg font-medium text-ink dark:text-white">{project.summary}</p>
            <p className="leading-relaxed text-ink-soft dark:text-slate-300">
              {project.description}
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-ink dark:text-white">Project Highlights</h3>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink-soft dark:text-slate-300">
                  <span className="mt-1 text-brand">✓</span>
                  {h}
                </li>
              ))}
            </ul>
            <Button href="/get-query" variant="primary" className="mt-6 w-full">
              Similar Query?
            </Button>
          </aside>
        </Container>
      </section>
    </div>
  );
}
