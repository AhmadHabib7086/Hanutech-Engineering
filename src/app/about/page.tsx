import { Container, SectionHeading, Button } from "@/src/components/ui";
import { stats, siteConfig } from "@/src/lib/data";

export const metadata = { title: "About Us" };

export default function AboutPage() {
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
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Engineering excellence since day one
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            {siteConfig.name} is a total engineering solutions provider
            specializing in pumps, pipelines, industrial automation and plant
            engineering. We partner with industries worldwide to deliver
            reliable, efficient and future-ready infrastructure.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Precision. Innovation. Reliability."
                subtitle=""
              />
              <div className="mt-6 space-y-4 text-ink-soft dark:text-slate-300">
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
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="lift rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-brand">{s.value}</p>
                  <p className="mt-1 text-sm font-medium text-ink-soft dark:text-slate-300">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-ink">Our Mission</h2>
          <p className="mx-auto mt-3 max-w-3xl text-ink-soft dark:text-slate-300">
            To elevate industrial standards through innovation and precision,
            building engineering systems that perform flawlessly for decades.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Work With Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
