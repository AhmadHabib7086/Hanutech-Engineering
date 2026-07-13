import { Container, SectionHeading, Button } from "@/src/components/ui";

export const metadata = { title: "Career" };

const openings = [
  { role: "Automation Engineer", location: "Greater Noida", type: "Full-time" },
  { role: "Piping Designer", location: "Greater Noida", type: "Full-time" },
  { role: "Site Supervisor", location: "On-site (Pan India)", type: "Full-time" },
  { role: "Sales Engineer", location: "Remote / Field", type: "Full-time" },
];

export default function CareerPage() {
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
            Career
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Build Your Career With Us
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Join a team of engineers passionate about solving real-world
            industrial challenges with precision and innovation.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Openings"
            subtitle="Explore opportunities to grow with Hanutech Engineering."
          />
          <div className="mt-12 space-y-4">
            {openings.map((o) => (
              <div
                key={o.role}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-ink dark:text-white">{o.role}</h3>
                  <p className="mt-1 text-sm text-ink-soft dark:text-slate-300">
                    {o.location} · {o.type}
                  </p>
                </div>
                <Button href="/contact" variant="outline">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
