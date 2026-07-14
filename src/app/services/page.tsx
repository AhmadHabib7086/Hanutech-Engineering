import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/src/components/ui";
import { services } from "@/src/lib/data";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
  <div className="bg-white">
      {/* Sleek Engineering Hero */}
      <section 
        className="relative bg-ink py-24 text-white overflow-hidden" 
        style={{
          backgroundImage: "url('https://gesrepair.com/wp-content/uploads/bigstock-140745698.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
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
            Engineering Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl max-w-4xl leading-tight">
            What We Engineer
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Comprehensive engineering services across the full industrial
            lifecycle — from concept to commissioning and beyond.
          </p>
          </ScrollReveal>
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
