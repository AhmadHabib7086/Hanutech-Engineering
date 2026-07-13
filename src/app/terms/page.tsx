import { Container } from "@/src/components/ui";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-slate-900 py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-ink dark:text-white">Terms of Service</h1>
        <p className="mt-4 text-sm text-ink-soft dark:text-slate-300">Last updated: 2026</p>
        <div className="mt-8 space-y-6 text-ink-soft dark:text-slate-300">
          <p>
            By accessing the Hanutech Engineering Solutions website, you agree
            to the following terms and conditions.
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">Use of Site</h2>
          <p>
            The content on this site is provided for informational purposes.
            You may not reproduce or redistribute material without written
            permission.
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">Quotations</h2>
          <p>
            Queries submitted through the site are indicative only. Final
            scope, pricing and timelines are confirmed via formal agreement.
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">Limitation of Liability</h2>
          <p>
            We are not liable for any indirect or consequential loss arising
            from use of this website.
          </p>
        </div>
      </Container>
    </div>
  );
}
