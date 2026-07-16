import { notFound } from "next/navigation";
import Image from "next/image";
import { Container, Button } from "@/src/components/ui";
import { getIndustry, industries } from "@/src/lib/data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return { title: industry ? industry.title : "Industry" };
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="relative h-72 bg-ink dark:bg-slate-950">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
            Industry
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            {industry.title}
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-soft dark:text-slate-300">
            {industry.description}
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft dark:text-slate-300">
            Our team delivers sector-specific engineering — from pumps and
            pipelines to automation and fabrication — engineered to the unique
            demands of the {industry.title.toLowerCase()} segment.
          </p>
          <div className="mt-8">
            <Button href="/get-query" variant="primary">
              Get Query
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
