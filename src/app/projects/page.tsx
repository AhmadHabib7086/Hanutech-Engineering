import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/src/components/ui";
import { projects } from "@/src/lib/data";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="bg-white ">
      <section className="relative bg-ink py-24 text-white overflow-hidden"
       style={{
    backgroundImage:
      "url('https://gesrepair.com/wp-content/uploads/bigstock-140745698.jpg')",
       backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>

    <div className="absolute inset-0 bg-black/75 z-10"></div>
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 z-10"></div>

        {/* Rotating technical gear */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden opacity-20 lg:block pointer-events-none z-10 text-brand">
          <svg className="animate-spin-slow h-80 w-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
            <path d="M46 10h8v12h-8zM46 78h8v12h-8zM10 46h12v8H10zM78 46h12v8H78z" />
          </svg>
        </div>
        <Container className="relative z-20">
          <ScrollReveal variant="fade-up" duration={800}>
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
          </ScrollReveal>
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
