import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/src/components/ui";
import { services } from "@/src/lib/data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
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
            Engineering Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            What We Engineer
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Comprehensive engineering services across the full industrial
            lifecycle — from concept to commissioning and beyond.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-12">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-64 w-full overflow-hidden rounded-xl lift">
                    <Image
                      src={`https://hanutech-website.vercel.app${s.image}`}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-ink dark:text-white">{s.title}</h2>
                  <p className="mt-3 text-ink-soft dark:text-slate-300">{s.description}</p>
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-soft dark:text-slate-300">
                        <span className="mt-1 text-brand">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/get-query"
                    className="mt-5 inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    Request a quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/projects" variant="primary">
              See Our Projects
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
