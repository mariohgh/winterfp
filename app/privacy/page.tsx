import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Winter Finance Partners",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: "#f8f7f4" }} className="min-h-screen">
      {/* Header bar */}
      <div style={{ backgroundColor: "#1a2332" }} className="py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={140} height={40} className="h-9 w-auto object-contain" />
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 style={{ color: "#1a2332" }} className="text-4xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 2025</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">1. Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Winter Finance Partners (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an ERP and accounting software consultancy based in the United Kingdom. We provide implementation and support services for Xero, Microsoft Dynamics 365, and NetSuite.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, we are the data controller of your personal information.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Contact: <a href="mailto:hello@winterfinancepartners.co.uk" style={{ color: "#c9a84c" }}>hello@winterfinancepartners.co.uk</a>
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">2. What Data We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We may collect the following personal data:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
              <li>Name and job title</li>
              <li>Email address and phone number</li>
              <li>Company name and business information</li>
              <li>Information you provide in enquiry forms or emails</li>
              <li>Technical data such as IP address, browser type, and pages visited (via analytics)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">3. How We Use Your Data</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use your personal data to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
              <li>Respond to enquiries and provide consultancy services</li>
              <li>Send you information relevant to your enquiry</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Our lawful basis for processing is <strong>legitimate interests</strong> (responding to business enquiries) and <strong>contract performance</strong> (where we are engaged to provide services).
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">4. How Long We Keep Your Data</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain enquiry data for up to 2 years. Client data is retained for 6 years following the end of an engagement in line with UK tax and accounting requirements. We will delete your data sooner if you request it and there is no legal obligation to retain it.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">5. Sharing Your Data</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal data. We may share it with trusted third-party service providers (such as email and CRM tools) who process data on our behalf under data processing agreements. We will never share your data with third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              This website may use essential cookies to ensure it functions correctly. If we use analytics cookies, we will ask for your consent. You can control cookies through your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@winterfinancepartners.co.uk" style={{ color: "#c9a84c" }}>
                hello@winterfinancepartners.co.uk
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">8. Complaints</h2>
            <p className="text-gray-600 leading-relaxed">
              If you are unhappy with how we handle your data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }}>
                ico.org.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#1a2332" }} className="text-xl font-bold mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy from time to time. The latest version will always be available on this page.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
