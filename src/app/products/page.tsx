import ScrollReveal from "@/src/components/ScrollReveal";
import ProductCatalog from "@/src/components/ProductCatalog";
import { Container, SectionHeading, Button } from "@/src/components/ui";
import { products, partners } from "@/src/lib/data";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <section
        className="relative overflow-hidden bg-ink py-24 text-white"
        style={{
          backgroundImage:
            "url('https://gesrepair.com/wp-content/uploads/bigstock-140745698.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 z-10 bg-black/75" />
        <div className="absolute inset-0 z-10 bg-grid-blueprint opacity-40" />

        <div className="pointer-events-none absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 text-brand opacity-20 lg:block">
          <svg
            className="h-80 w-80 animate-spin-slow"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
            <path d="M46 10h8v12h-8zM46 78h8v12h-8zM10 46h12v8H10zM78 46h12v8H78z" />
          </svg>
        </div>

        <Container className="relative z-20">
          <ScrollReveal variant="fade-up" duration={800}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
              Products
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Engineered Products
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              {products.length} industrial-grade products across pumps,
              automation, instrumentation and fabrication — built for demanding
              process environments.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* <section className="border-b border-slate-100 bg-slate-50 py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { value: `${products.length}+`, label: "Products" },
              { value: "4", label: "Categories" },
              { value: `${partners.length}`, label: "Global Brands" },
              { value: "100%", label: "Quality Tested" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-brand">
                  {stat.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      <section className="bg-grid-dots py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Products We Deliver"
            subtitle="Browse our complete range of pumps, control systems, instruments and fabricated equipment."
          />
          <div className="mt-12">
            <ProductCatalog />
          </div>
        </Container>
      </section>

      {/* <section className="border-t border-slate-200 bg-white py-16">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Authorized Partners
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {partners.map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-6 py-3 text-lg font-bold uppercase tracking-wider text-slate-600 transition-all hover:border-brand hover:text-brand"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section> */}

      {/* <section className="bg-ink py-16 text-white">
        <Container className="text-center">
          <ScrollReveal variant="scale-up" duration={700}>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Need a custom solution?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Our engineering team can configure, integrate and deliver
              turnkey product packages tailored to your process requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/get-query" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section> */}
      <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <Container className="relative z-10 text-center">
    <ScrollReveal variant="scale-up" duration={700}>
      <h2 className="text-3xl font-bold sm:text-5xl">
        Need a Custom Engineering Solution?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
        Our engineering team can configure, integrate and deliver turnkey
        product packages tailored to your process requirements with maximum
        efficiency, reliability and long-term performance.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <Button href="/get-query" variant="primary" size="lg">
          Request a Quote
        </Button>

        <Button href="/contact" variant="outline" size="lg">
          Contact Us
        </Button>
      </div>
    </ScrollReveal>
  </Container>
</section>
    </div>
  );
}
