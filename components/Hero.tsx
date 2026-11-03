export default function Hero() {
  return (
    <section
      style={{ backgroundColor: "#1a2332" }}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent bar */}
      <div
        style={{ backgroundColor: "#c9a84c" }}
        className="absolute left-0 top-0 bottom-0 w-1"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div
            style={{ color: "#c9a84c", borderColor: "#c9a84c" }}
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            ERP &amp; Accounting Consultancy
          </div>

          <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Finance Systems
            <br />
            <span style={{ color: "#c9a84c" }}>That Work</span>
            <br />
            For Your Business
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            We help growing businesses implement and optimise{" "}
            <strong className="text-white">Xero</strong>,{" "}
            <strong className="text-white">Microsoft Dynamics 365</strong>, and{" "}
            <strong className="text-white">NetSuite</strong> — so your finance
            function scales with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              style={{ backgroundColor: "#c9a84c", color: "#1a2332" }}
              className="px-8 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity text-center"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
              className="px-8 py-3.5 rounded font-semibold text-sm border hover:bg-white/5 transition-colors text-center"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "Xero", label: "Certified Partner", sub: "Cloud accounting" },
            { value: "D365", label: "Microsoft Dynamics", sub: "ERP & CRM" },
            { value: "NetSuite", label: "Oracle Partner", sub: "Enterprise ERP" },
            { value: "100%", label: "UK-Based Team", sub: "No offshore handoffs" },
          ].map((card) => (
            <div
              key={card.value}
              style={{ backgroundColor: "#243044", borderColor: "#c9a84c22" }}
              className="border rounded-xl p-6"
            >
              <div
                style={{ color: "#c9a84c" }}
                className="text-2xl font-bold mb-1"
              >
                {card.value}
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">
                {card.label}
              </div>
              <div className="text-gray-500 text-xs">{card.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
