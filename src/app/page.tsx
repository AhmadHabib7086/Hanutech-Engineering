import Image from "next/image";
import Link from "next/link";
import { Button, Container, SectionHeading } from "@/src/components/ui";
import {
  services,
  industries,
  projects,
  clients,
  partners,
  stats,
  siteConfig,
} from "@/src/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink dark:bg-slate-950 text-white">
         <video
          autoPlay
          muted
          loop
          playsInline
          // poster="https://hanutech-website.vercel.app/images/birla-white-plant.jpeg"
          src="./videos/hero-bg.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        > 
          {/* <source src="../../public/videos/hero-bg.mp4" type="video/mp4" />
          <source
            src="../../public/videos/hero-bg.mp4"
            type="video/mp4"
          /> */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-ink/75 via-ink/45 to-orange-950/30" />
        <div className="absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.25),transparent_70%)]" />
        <Container className="relative flex flex-col items-center py-24 text-center sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
            {siteConfig.brand}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-2xl font-light text-orange-300">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {siteConfig.description} Elevating industrial standards through
            innovation and precision.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              }
            >
              Explore Projects
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              }
            >
              Our Services
            </Button>
          </div>
        </Container>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <Container className="grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="lift rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-3xl font-extrabold text-brand sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-ink-soft dark:text-slate-300">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Core Competencies */}
      <section className="bg-slate-50 dark:bg-slate-950 py-20">
        <Container>
          <SectionHeading
            eyebrow="Engineering Solutions Overview"
            title="Our Core Competencies"
            subtitle="Delivering total engineering solutions across pumps, pipelines, automation and fabrication."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group lift rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950/40 text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v6m0 8v6M2 12h6m8 0h6" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-ink dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                  {s.short}
                </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <Container>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Engineered for Every Sector"
            subtitle="Delivering precision engineering and high-performance fluid handling solutions across diverse industrial sectors."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={`https://hanutech-website.vercel.app${ind.image}`}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <h3 className="absolute inset-x-0 bottom-0 p-3 text-center text-sm font-semibold text-white">
                  {ind.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 dark:bg-slate-950 py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Real-world Implementations"
              subtitle="High-end engineering solutions across global industrial sectors."
              dark={false}
            />
            <Button href="/projects" variant="ghost">
              View All Projects
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group lift overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`https://hanutech-website.vercel.app${p.image}`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
        </Container>
      </section>

      {/* Partners marquee */}
      {/* <section className="bg-ink dark:bg-slate-950 py-12">
        <Container>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Trusted Global Partners
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-16">
              {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
                <span key={i} className="text-xl font-bold text-white/80">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section> */}

      <section className="bg-gray-300 py-12">
  <Container>
    <p className="mb-6 text-center text-2xl font-semibold uppercase tracking-widest text-slate-400">
      Trusted Global Partners
    </p>

    <div className="relative overflow-hidden">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#081426] to-transparent"></div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#081426] to-transparent"></div>

      <div className="flex w-max animate-marquee gap-20">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <span
            key={i}
            className="
        cursor-pointer
        text-3xl
        md:text-4xl
        font-black
        uppercase
        tracking-[0.25em]
        bg-gradient-to-r
        from-slate-500
        via-slate-300
        to-slate-500
        bg-clip-text
        text-transparent
        transition-all
        duration-300
        hover:from-orange-400
        hover:via-orange-300
        hover:to-orange-400
        hover:scale-110
      "
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  </Container>
</section>


      {/* Clients */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
  <Container>
    <div className="mb-14 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
        Our Clients
      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
        Trusted By Industry Leaders
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        We proudly collaborate with leading industrial brands and organizations,
        delivering reliable engineering solutions with quality and innovation.
      </p>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500"></div>
    </div>

    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {clients.map((client) => (
        <div
          key={client}
          className="group flex h-28 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
        >
          <span className="text-lg font-bold text-slate-500 transition-colors duration-300 group-hover:text-orange-500 dark:text-slate-300">
            {client}
          </span>
        </div>
      ))}
    </div>
  </Container>
</section>

      {/* CTA */}
      <section
  className="relative bg-cover bg-center bg-no-repeat py-16"
  style={{
    backgroundImage:
      "url('https://media.istockphoto.com/id/155909002/photo/industrial-sewing-machines.jpg?s=612x612&w=0&k=20&c=YPqziO8qdDmQUFvQbhZkzBXE3wJ8DfBgnBttwc0i9wI=')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <Container className="relative z-10 text-center">
    <h2 className="text-3xl font-bold text-white">
      Ready to engineer your next project?
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-orange-50">
      Get in touch with our engineering team for a tailored solution.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <Link
        href="/get-query"
        className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
      >
        Get Query
      </Link>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-orange-600"
      >
        Contact Us
      </Link>
    </div>
  </Container>
</section>
    </>
  );
}
