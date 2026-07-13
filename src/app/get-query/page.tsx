"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/src/components/ui";

export default function GetQueryPage() {
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
            Get Query
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Tell us about your requirement and our engineering team will get
            back with a tailored solution.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-2xl">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-8">
            {submitted ? (
              <p className="text-center text-lg font-medium text-brand">
                Query submitted! We&apos;ll contact you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full Name"
                    className="rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <input
                  placeholder="Company"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                />
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Pump Installation & Maintenance</option>
                  <option>Pipeline Engineering</option>
                  <option>Plant Automation</option>
                  <option>Instrumentation</option>
                  <option>Industrial Fabrication</option>
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your requirement"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Submit Query
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
