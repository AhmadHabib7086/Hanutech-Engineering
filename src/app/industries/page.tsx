import Image from "next/image";
import { Container, SectionHeading, Button } from "@/src/components/ui";
import { industries } from "@/src/lib/data";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="bg-ink dark:bg-slate-950 py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
            Industries We Serve
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Built for Every Sector
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Precision engineering and high-performance fluid handling solutions
            across diverse industrial sectors.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Sectors"
            title="Industries We Serve"
            subtitle="Delivering tailored engineering where it matters most."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`https://hanutech-website.vercel.app${ind.image}`}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink dark:text-white">{ind.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft dark:text-slate-300">{ind.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              Discuss Your Industry
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
