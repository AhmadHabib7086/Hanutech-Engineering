import { Container, SectionHeading, Button } from "@/src/components/ui";
import { products } from "@/src/lib/data";

export const metadata = { title: "Products" };

export default function ProductsPage() {
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
            Products
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Engineered Products
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Reliable, industrial-grade products that power modern plants and
            process lines.
          </p>
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
