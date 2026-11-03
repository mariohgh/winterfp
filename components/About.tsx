import { CheckCircle } from "lucide-react";

const credentials = [
  { label: "FCCA", sub: "Fellow Chartered Certified Accountant" },
  { label: "PRINCE2", sub: "Foundation & Practitioner" },
  { label: "FMVA", sub: "Financial Modeling & Valuation Analyst" },
  { label: "NetSuite Certified", sub: "Administrator, SuiteFoundation & Financial User" },
];

const xero = [
  "L1 Xero Certified Associate",
  "L2 Xero Certified Professional",
  "L3 Xero Certified Specialist",
  "Xero Payroll Specialist",
  "Xero Migration Specialist",
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#1a2332" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div
          style={{ color: "#c9a84c" }}
          className="text-xs font-semibold tracking-widest uppercase mb-4"
        >
          About
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
              Meet Your
              <br />
              <span style={{ color: "#c9a84c" }}>Consultant</span>
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div
                style={{ backgroundColor: "#243044", borderColor: "#c9a84c44" }}
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center shrink-0"
              >
                <span style={{ color: "#c9a84c" }} className="text-xl font-bold">
                  EW
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Erik Winter</div>
                <div style={{ color: "#c9a84c" }} className="text-sm font-medium">
                  FCCA · PRINCE2 · FMVA · NetSuite
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  Aldershot, England, United Kingdom
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">
              Erik is an all-round accountant — Management &amp; Financial — with a
              passion for systems implementation. With nearly a decade of
              experience across luxury retail, travel, and finance, he brings
              both the technical depth and commercial understanding that most
              ERP consultants lack.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              He has held senior finance roles at{" "}
              <span className="text-white font-medium">Richard Mille</span>,{" "}
              <span className="text-white font-medium">Dover Street Market</span>, and{" "}
              <span className="text-white font-medium">Tomorrow London</span>, before
              moving into full-time ERP consultancy at{" "}
              <span className="text-white font-medium">ERP Accountants Ltd</span> where
              he specialises in NetSuite implementations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Winter Finance Partners is his independent practice — built to give
              growing businesses access to the same quality of implementation
              expertise that larger enterprises take for granted.
            </p>

            <a
              href="https://www.linkedin.com/in/erik-w-9173ab4a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
              className="inline-flex items-center gap-2 border rounded px-5 py-2.5 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View LinkedIn Profile
            </a>
          </div>

          {/* Right — credentials */}
          <div className="space-y-4">
            {/* Qualifications */}
            <div
              style={{ backgroundColor: "#243044", borderColor: "#c9a84c22" }}
              className="border rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Qualifications &amp; Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    style={{ backgroundColor: "#1a2332" }}
                    className="rounded-lg p-3"
                  >
                    <div style={{ color: "#c9a84c" }} className="font-bold text-sm mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-gray-400 text-xs leading-snug">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Xero certs */}
            <div
              style={{ backgroundColor: "#243044", borderColor: "#c9a84c22" }}
              className="border rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Xero Certifications
              </h3>
              <ul className="space-y-2.5">
                {xero.map((x) => (
                  <li key={x} className="flex items-center gap-2.5">
                    <CheckCircle size={14} style={{ color: "#c9a84c" }} className="shrink-0" />
                    <span className="text-gray-300 text-sm">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations snippet */}
            <div
              style={{ backgroundColor: "#243044", borderColor: "#c9a84c22" }}
              className="border rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                What People Say
              </h3>
              <blockquote className="text-gray-400 text-sm leading-relaxed italic border-l-2 pl-4" style={{ borderColor: "#c9a84c" }}>
                &ldquo;Erik is a very dedicated and professional Senior Accountant. He has introduced new processes and improved reporting visibility. His knowledge of system accounting and expertise in Excel was a huge advantage.&rdquo;
              </blockquote>
              <p className="text-gray-500 text-xs mt-3">— Ariane Mahon, De Beers Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
