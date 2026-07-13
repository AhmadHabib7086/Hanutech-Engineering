import Link from "next/link";
import { siteConfig, navLinks } from "@/src/lib/data";

const serviceLinks = [
  { label: "Pump Installation", href: "/services/pump-installation" },
  { label: "Pipeline Engineering", href: "/services/pipeline-engineering" },
  { label: "Plant Automation", href: "/services/plant-automation" },
  { label: "Instrumentation", href: "/services/instrumentation" },
  { label: "Industrial Fabrication", href: "/services/industrial-fabrication" },
];

export default function Footer() {
  return (
    <footer className="bg-ink dark:bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-extrabold text-white">
              {siteConfig.brand}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Career", href: "/career" },
                { label: "Get Query", href: "/get-query" },
                ...navLinks.filter((l) => ["/services", "/products", "/projects", "/contact"].includes(l.href)),
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 transition-colors hover:text-brand-light">
                    ▹ {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 transition-colors hover:text-brand-light">
                    ▹ {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>{siteConfig.address}</li>
              <li>
                {siteConfig.phones.map((p) => (
                  <span key={p} className="block">
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-light">
                      {p}
                    </a>
                  </span>
                ))}
              </li>
              <li>
                {siteConfig.emails.map((e) => (
                  <span key={e} className="block">
                    <a href={`mailto:${e}`} className="hover:text-brand-light">
                      {e}
                    </a>
                  </span>
                ))}
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, "")}`}
                  className="hover:text-brand-light"
                >
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-light">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
