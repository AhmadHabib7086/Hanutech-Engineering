"use client";

import { FormEvent, useState } from "react";
import { Container, SectionHeading } from "@/src/components/ui";
import { siteConfig } from "@/src/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Let&apos;s Talk Engineering
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Reach Our Team"
              subtitle=""
            />
            <div className="mt-8 space-y-6 text-ink-soft dark:text-slate-300">
              <div>
                <h3 className="text-sm font-semibold uppercase text-ink dark:text-white">
                  Address
                </h3>
                <p className="mt-1">{siteConfig.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase text-ink dark:text-white">
                  Phone
                </h3>
                {siteConfig.phones.map((p) => (
                  <p key={p} className="mt-1">
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand">
                      {p}
                    </a>
                  </p>
                ))}
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase text-ink dark:text-white">
                  Email
                </h3>
                {siteConfig.emails.map((e) => (
                  <p key={e} className="mt-1">
                    <a href={`mailto:${e}`} className="hover:text-brand">
                      {e}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            {submitted ? (
              <p className="text-center text-brand">
                Thank you! We&apos;ll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Your Name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                />
                <input
                  placeholder="Phone"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
