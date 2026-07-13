import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/src/components/ui";
import { projects } from "@/src/lib/data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="bg-ink dark:bg-slate-950 py-20 text-white"
       style={{
    backgroundImage:
      "url('https://gesrepair.com/wp-content/uploads/bigstock-140745698.jpg')",
       backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Our Work in Action
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Real-world implementations of our high-end engineering solutions
            across global industrial sectors.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={`https://hanutech-website.vercel.app${p.image}`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-ink dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft dark:text-slate-300">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/get-query" variant="primary">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
