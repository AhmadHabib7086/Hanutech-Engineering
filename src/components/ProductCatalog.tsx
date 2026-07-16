"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, productCategories, type Product } from "@/src/lib/data";
import ScrollReveal from "@/src/components/ScrollReveal";

const categoryLabels: Record<Product["category"], string> = {
  pumps: "Pumps",
  automation: "Automation",
  instrumentation: "Instrumentation",
  fabrication: "Fabrication",
};

export default function ProductCatalog() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active === cat.id
                ? "bg-brand text-white shadow-md shadow-brand/30"
                : "border border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
            }`}
          >
            {cat.label}
            {cat.id !== "all" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({products.filter((p) => p.category === cat.id).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, idx) => (
          <ScrollReveal
            key={product.slug}
            variant="fade-up"
            delay={idx * 60}
            className="h-full"
          >
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-brand/90 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
            {categoryLabels[product.category]}
          </span>
          {product.brand && (
            <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-ink backdrop-blur-sm">
              {product.brand}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {product.short}
        </p>

        <ul className="mt-4 space-y-1.5">
          {product.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-slate-500"
            >
              <span className="mt-0.5 shrink-0 text-brand">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            View Details →
          </Link>
          <Link
            href="/get-query"
            className="ml-auto rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:border-brand hover:text-brand"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
