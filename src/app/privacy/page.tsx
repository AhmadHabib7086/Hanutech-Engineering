import { Container } from "@/src/components/ui";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-slate-900 py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-ink dark:text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-soft dark:text-slate-300">Last updated: 2026</p>
        <div className="mt-8 space-y-6 text-ink-soft dark:text-slate-300">
          <p>
            Hanutech Engineering Solutions (&quot;we&quot;, &quot;us&quot;) is
            committed to protecting your privacy. This policy explains how we
            collect, use and safeguard information you provide through our
            website.
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">Information We Collect</h2>
          <p>
            We collect information you submit via contact and query forms,
            including your name, email, phone and message content.
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">How We Use It</h2>
          <p>
            Information is used solely to respond to your inquiries, provide
            quotations and improve our services. We do not sell your data to
            third parties.
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">Contact</h2>
          <p>
            For privacy-related questions, email us at info@hanutechengg.com.
          </p>
        </div>
      </Container>
    </div>
  );
}
