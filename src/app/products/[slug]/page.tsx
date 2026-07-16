import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/src/components/ui";
import { getProduct, products } from "@/src/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? product.name : "Product" };
}

const categoryLabels = {
  pumps: "Pumps & Fluid Transfer",
  automation: "Automation & Control",
  instrumentation: "Instrumentation",
  fabrication: "Fabrication & Storage",
};

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-white">
      <section className="relative h-80 bg-ink">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold text-white">
              {categoryLabels[product.category]}
            </span>
            {product.brand && (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {product.brand}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-slate-300">
            {product.short}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-xl font-bold text-ink">Overview</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Key Features</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 shrink-0 text-brand">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Technical Specifications</h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec}
                    className={`flex items-center justify-between px-5 py-3 text-sm ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <span className="font-medium text-slate-700">
                      {spec.split(":")[0]}
                    </span>
                    <span className="text-slate-500">
                      {spec.includes(":") ? spec.split(":").slice(1).join(":").trim() : spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-ink">
                Request This Product
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Get pricing, availability and technical consultation from our
                engineering team.
              </p>
              <Button href="/get-query" variant="primary" className="mt-5 w-full">
                Get Quote
              </Button>
              <Button href="/contact" variant="outline" className="mt-3 w-full">
                Contact Us
              </Button>
            </div>

            {product.brand && (
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Authorized Partner
                </p>
                <p className="mt-2 text-2xl font-bold text-ink">
                  {product.brand}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Genuine products with full warranty and support.
                </p>
              </div>
            )}
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <Container>
            <h2 className="text-2xl font-bold text-ink">Related Products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                    src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-ink group-hover:text-brand">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                      {p.short}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
