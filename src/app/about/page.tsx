import { Container, SectionHeading, Button } from "@/src/components/ui";
import { stats, siteConfig } from "@/src/lib/data";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  const workflowValues = [
    {
      title: "ASME Standards",
      desc: "All piping and fabrication comply with ASME and ISO quality parameters, ensuring certified leak-proof jointing.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Zero-Incident Safety",
      desc: "Our project execution team follows strict site safety guidelines with zero incidents reported across all sites.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: "PLC Automation",
      desc: "Integrating state-of-the-art telemetry, SCADA systems, and IoT protocols to modernize plant operations.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Reliable Support",
      desc: "Full AMC support, system diagnostics, performance auditing, and round-the-clock backup services.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

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
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl max-w-4xl leading-tight">
              Engineering excellence since day one
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              {siteConfig.name} is a total engineering solutions provider
              specializing in pumps, pipelines, industrial automation and plant
              engineering. We partner with industries worldwide to deliver
              reliable, efficient and future-ready infrastructure.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Stats and Story Section */}
      <section className="py-24 bg-grid-dots overflow-hidden relative">
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Story column */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-up" duration={700}>
                <SectionHeading
                  eyebrow="Who We Are"
                  title="Precision. Innovation. Reliability."
                  subtitle=""
                />
                <div className="mt-6 space-y-5 text-slate-600 text-lg leading-relaxed">
                  <p>
                    From pump rooms to fully automated plants, we combine deep
                    domain expertise with modern engineering practices to solve
                    complex industrial challenges.
                  </p>
                  <p>
                    Our teams handle design, fabrication, installation,
                    automation and maintenance — delivering end-to-end ownership of
                    your engineering goals.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Staggered stats column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-5">
              {stats.map((s, idx) => (
                <ScrollReveal
                  key={s.label}
                  variant="scale-up"
                  delay={idx * 150}
                  className="h-full"
                >
                  <div
                    className="lift group rounded-xl border border-slate-200 p-6 text-center bg-white glow-orange-hover h-full flex flex-col justify-center"
                  >
                    <p className="text-4xl font-extrabold text-brand group-hover:scale-105 transition-transform duration-300">{s.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      {s.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* Custom Core Values and Quality Standards Grid */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none"></div>
        <Container className="relative z-10">
          <ScrollReveal variant="fade-up" duration={700}>
            <SectionHeading
              eyebrow="Our Workflow Principles"
              title="Built to Engineering Standards"
              subtitle="Every pipe laid, pump installed, and PLC control system integrated is benchmarked against elite parameters."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workflowValues.map((val, idx) => (
              <ScrollReveal
                key={val.title}
                variant="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div className="group lift rounded-xl border border-slate-200 bg-white p-6 h-full flex flex-col justify-between glow-orange-hover">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-brand group-hover:scale-110 transition-transform duration-300">
                      {val.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand transition-colors duration-300">{val.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action & Mission Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
        {/* Repeating Blueprint background */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-10"></div>
        
        {/* Spin Gear backdrop decoration */}
        <div className="absolute -left-12 -bottom-12 hidden opacity-10 lg:block pointer-events-none text-brand">
          <svg className="animate-spin-reverse-slow h-80 w-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
            <path d="M46 10h8v12h-8zM46 78h8v12h-8zM10 46h12v8H10zM78 46h12v8H78z" />
          </svg>
        </div>

        <Container className="relative z-10 text-center">
          <ScrollReveal variant="scale-up" duration={800}>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-brand">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Mission</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300 text-lg leading-relaxed">
              To elevate industrial standards through innovation and precision,
              building engineering systems that perform flawlessly for decades.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" className="glow-orange">
                Work With Us
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
