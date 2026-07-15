"use client";


import Image from "next/image";
import Link from "next/link";
import { Button, Container, SectionHeading } from "@/src/components/ui";
import ScrollReveal from "@/src/components/ScrollReveal";
// SwiperSlide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
          src="./videos/hero-bg.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        > 
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-ink/75 via-ink/45 to-orange-950/30" />
        <div className="absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.25),transparent_70%)]" />
        
        {/* Slow spinning blueprint gear SVG overlays */}
        <div className="absolute -right-16 -bottom-16 hidden opacity-20 lg:block pointer-events-none z-10 text-brand">
          <svg className="animate-spin-slow h-80 w-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
            <path d="M46 10h8v12h-8zM46 78h8v12h-8zM10 46h12v8H10zM78 46h12v8H78z" />
            <path d="M22 22l8 8 6-6-8-8zM64 64l8 8 6-6-8-8zM22 78l8-8-6-6-8 8zM78 22l-8 8-6-6 8-8z" />
          </svg>
        </div>
        <div className="absolute -left-20 -top-20 hidden opacity-15 lg:block pointer-events-none z-10 text-brand">
          <svg className="animate-spin-reverse-slow h-72 w-72" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="28" />
            <circle cx="50" cy="50" r="8" />
            <path d="M46 12h8v10h-8zM46 78h8v10h-8zM12 46h10v8H12zM78 46h10v8H78z" />
            <path d="M24 24l7 7 6-6-7-7zM63 63l7 7 6-6-7-7zM24 76l7-7-6-6-7 7zM76 24l-7 7-6-6 7-7z" />
          </svg>
        </div>

        <Container className="relative flex flex-col items-center py-24 text-center sm:py-32 z-20">
          <ScrollReveal variant="fade-up" duration={900}>
            <p className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-brand-light ">
              {siteConfig.brand}
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-2xl font-light text-orange-300 font-semibold ">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-250">
              {siteConfig.description} Elevating industrial standards through
              innovation and precision.
            </p>
          </ScrollReveal>
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
      {/* <section className="relative border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 bg-grid-dots overflow-hidden">
        <Container className="grid grid-cols-2 gap-6 py-12 lg:grid-cols-4 relative z-10">
          {stats.map((s, idx) => (
            <ScrollReveal
              key={s.label}
              variant="scale-up"
              delay={idx * 150}
              className="lift rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-3xl font-extrabold text-brand sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-ink-soft dark:text-slate-300">
                {s.label}
              </p>
            </ScrollReveal>
          ))}
        </Container>
      </section> */}

      <section className="relative border-b border-slate-100 bg-white overflow-hidden">
  <Container className="relative z-10 grid grid-cols-2 gap-6 py-16 lg:grid-cols-4">
    {stats.map((s, idx) => (
      <ScrollReveal
        key={s.label}
        variant="scale-up"
        delay={idx * 150}
        className="
          rounded-2xl
          border border-slate-100
          bg-white
          p-8
          text-center
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-orange-300
        "
      >
        <p className="text-4xl font-extrabold text-orange-600">
          {s.value}
        </p>

        <p className="mt-3 text-base font-medium text-slate-600">
          {s.label}
        </p>
      </ScrollReveal>
    ))}
  </Container>
</section>

      {/* Core Competencies */}
      <section className="relative bg-slate-50 dark:bg-slate-950 py-20 bg-grid-blueprint overflow-hidden">
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Engineering Solutions Overview"
            title="Our Core Competencies"
            subtitle="Delivering total engineering solutions across pumps, pipelines, automation and fabrication."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => (
              <ScrollReveal
                key={s.slug}
                variant="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group lift h-full flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 glow-orange-hover"
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950/40 text-brand">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform duration-500 group-hover:rotate-180"
                      >
                        <path d="M12 2v6m0 8v6M2 12h6m8 0h6" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-ink dark:text-white transition-colors duration-300 group-hover:text-brand">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                      {s.short}
                    </p>
                  </div>
                  <div>
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
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      {/* <section className="relative bg-white dark:bg-slate-900 py-20 bg-grid-dots overflow-hidden">
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Engineered for Every Sector"
            subtitle="Delivering precision engineering and high-performance fluid handling solutions across diverse industrial sectors."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, idx) => (
              <ScrollReveal
                key={ind.slug}
                variant="scale-up"
                delay={idx * 80}
                className="h-full"
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group relative block overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 lift glow-orange-hover h-full"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={`https://hanutech-website.vercel.app${ind.image}`}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-brand/40" />
                  </div>
                  <h3 className="absolute inset-x-0 bottom-0 p-3 text-center text-sm font-semibold text-white transition-all duration-300 group-hover:bottom-1">
                    {ind.title}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
        </section> */}
        <section className="relative bg-white dark:bg-slate-900 py-24 overflow-hidden">
  <Container>
    <SectionHeading
      eyebrow="Industries We Serve"
      title="Engineered for Every Sector"
      subtitle="Delivering precision engineering and high-performance fluid handling solutions across diverse industrial sectors."
    />

    <div className="mt-14">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {industries.map((ind) => (
          <SwiperSlide key={ind.slug}>
            <Link
              href={`/industries/${ind.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:bg-slate-800"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={`https://hanutech-website.vercel.app${ind.image}`}
                  alt={ind.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <h3 className="absolute bottom-6 left-0 right-0 text-center text-2xl font-bold text-white">
                  {ind.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </Container>
</section>

          {/* Featured Projects */}
      <section className="relative bg-slate-50 dark:bg-slate-950 py-20 bg-grid-blueprint overflow-hidden">
        <Container className="relative z-10">
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
            {projects.map((p, idx) => (
              <ScrollReveal
                key={p.slug}
                variant="fade-up"
                delay={idx * 150}
                className="h-full"
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group lift overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full flex flex-col justify-between glow-orange-hover"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={`https://hanutech-website.vercel.app${p.image}`}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-brand/10" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                        {p.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-ink dark:text-white transition-colors duration-300 group-hover:text-brand">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft dark:text-slate-300">{p.summary}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      

      <section className="relative bg-slate-700 py-12 overflow-hidden border-t border-b border-slate-800">
        <Container>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Trusted Global Partners
          </p>

          <div className="relative overflow-hidden">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-900 to-transparent"></div>

            {/* Right Fade */}
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-900 to-transparent"></div>

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
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 bg-grid-dots overflow-hidden">
        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Our Clients
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Trusted By Industry Leaders
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We proudly collaborate with leading industrial brands and organizations,
              delivering reliable engineering solutions with quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {clients.map((client, idx) => (
              <ScrollReveal
                key={client}
                variant="scale-up"
                delay={idx * 40}
                className="h-full"
              >
                <div
                  className="group flex h-28 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
                >
                  <span className="text-lg font-bold text-slate-400 transition-colors duration-300 group-hover:text-orange-500">
                    {client}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/155909002/photo/industrial-sewing-machines.jpg?s=612x612&w=0&k=20&c=YPqziO8qdDmQUFvQbhZkzBXE3wJ8DfBgnBttwc0i9wI=')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Decorative CTA Gear */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden opacity-10 lg:block pointer-events-none text-brand">
          <svg className="animate-spin-slow h-64 w-64" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
            <path d="M46 10h8v12h-8zM46 78h8v12h-8zM10 46h12v8H10zM78 46h12v8H78z" />
          </svg>
        </div>

        <Container className="relative z-10 text-center">
          <ScrollReveal variant="scale-up" duration={800}>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to engineer your next project?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-orange-200 text-lg">
              Get in touch with our engineering team for a tailored solution.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/get-query"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 hover:scale-105 shadow-lg shadow-orange-600/30"
              >
                Get Query
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange-600 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
