import { BarChart3, Cloud, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Xero Implementation",
    description:
      "Get set up right from day one. We handle migration, chart of accounts, bank feeds, payroll integrations, and staff training so your team hits the ground running.",
    tags: ["Migration", "Training", "Integrations"],
  },
  {
    icon: BarChart3,
    title: "Microsoft Dynamics 365",
    description:
      "Full-suite ERP and CRM implementation for growing businesses. Finance, operations, sales — all connected in one platform with real-time reporting.",
    tags: ["Finance", "Operations", "CRM"],
  },
  {
    icon: Settings,
    title: "NetSuite",
    description:
      "Enterprise-grade ERP for scaling businesses. We implement, customise, and support NetSuite deployments across finance, inventory, and multi-entity reporting.",
    tags: ["ERP", "Multi-entity", "Reporting"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#f8f7f4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            style={{ color: "#c9a84c" }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
          >
            What We Do
          </div>
          <h2
            style={{ color: "#1a2332" }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            The Right System,
            <br />
            Implemented Properly
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We specialise in three platforms — and we go deep on each one. No
            generalists, no guesswork.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              style={{ backgroundColor: "#ffffff", borderColor: "#e8e4dc" }}
              className="border rounded-xl p-8 flex flex-col hover:shadow-lg transition-shadow group"
            >
              <div
                style={{ backgroundColor: "#1a2332" }}
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
              >
                <s.icon size={22} style={{ color: "#c9a84c" }} />
              </div>

              <h3
                style={{ color: "#1a2332" }}
                className="text-xl font-bold mb-3"
              >
                {s.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{ backgroundColor: "#f0ece4", color: "#4a5568" }}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                style={{ color: "#c9a84c" }}
                className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
