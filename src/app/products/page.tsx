import ScrollReveal from "@/src/components/ScrollReveal";
import { Container, SectionHeading, Button } from "@/src/components/ui";
import { products } from "@/src/lib/data";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <div className="bg-white ">
      <section className="relative bg-ink py-24 text-white overflow-hidden"
       style={{
    backgroundImage:
      "url('https://gesrepair.com/wp-content/uploads/bigstock-140745698.jpg')",
       backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>

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
            Products
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl max-w-4xl leading-tightl">
            Engineered Products
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Reliable, industrial-grade products that power modern plants and
            process lines.
          </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Products We Deliver"
            subtitle="From pumps to control panels and fabricated tanks."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="lift rounded-xl border border-slate-200 dark:border-slate-800 p-6"
              >
                <h3 className="text-lg font-semibold text-ink dark:text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-slate-300">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/get-query" variant="primary">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
