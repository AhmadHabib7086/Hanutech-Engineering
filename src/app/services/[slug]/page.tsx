import { notFound } from "next/navigation";
import Image from "next/image";
import { Container, Button } from "@/src/components/ui";
import { getService, services } from "@/src/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service ? service.title : "Service" };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="relative h-72 bg-ink dark:bg-slate-950">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
            Service
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            {service.title}
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink-soft dark:text-slate-300">
              {service.description}
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-ink dark:text-white">Key Capabilities</h3>
            <ul className="mt-4 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-soft dark:text-slate-300">
                  <span className="mt-1 text-brand">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button href="/get-query" variant="primary" className="mt-6 w-full">
              Get Query
            </Button>
          </aside>
        </Container>
      </section>
    </div>
  );
}
