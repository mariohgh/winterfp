export default function Hero() {
  return (
    <section
      style={{ backgroundColor: "#1a2332" }}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="hero-glow absolute pointer-events-none"
        style={{
          top: "-20%", left: "30%", width: "60%", height: "60%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Gold left bar */}
      <div style={{ backgroundColor: "#c9a84c" }} className="absolute left-0 top-0 bottom-0 w-1" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div
            data-r
            style={{ color: "#c9a84c", borderColor: "#c9a84c44" }}
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            ERP &amp; Accounting Consultancy
          </div>

          <h1 data-r data-d="1" className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Finance Systems
            <br />
            <span style={{ color: "#c9a84c" }}>That Work</span>
            <br />
            For Your Business
          </h1>

          <p data-r data-d="2" className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            We help growing businesses implement and optimise{" "}
            <strong className="text-white">Xero</strong>,{" "}
            <strong className="text-white">Microsoft Dynamics 365</strong>, and{" "}
            <strong className="text-white">NetSuite</strong> — so your finance function scales with you.
          </p>

          <div data-r data-d="3" className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="gold-btn px-8 py-3.5 rounded font-semibold text-sm text-center"
              style={{ color: "#1a2332" }}
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              style={{ borderColor: "#c9a84c55", color: "#c9a84c" }}
              className="px-8 py-3.5 rounded font-semibold text-sm border hover:bg-white/5 transition-colors text-center"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right — floating cards */}
        <div data-r data-d="2" className="grid grid-cols-2 gap-4 float">
          {[
            { value: "Xero", label: "Certified Partner", sub: "Full stack — L1 to Migration" },
            { value: "D365", label: "Microsoft Dynamics", sub: "Finance, Ops & CRM" },
            { value: "NetSuite", label: "Oracle Certified", sub: "Admin & Financial User" },
            { value: "FCCA", label: "Qualified Accountant", sub: "PRINCE2 · FMVA" },
          ].map((card) => (
            <div
              key={card.value}
              style={{ backgroundColor: "#243044", borderColor: "#c9a84c18" }}
              className="border rounded-xl p-6 card-hover"
            >
              <div style={{ color: "#c9a84c" }} className="text-2xl font-bold mb-1">
                {card.value}
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{card.label}</div>
              <div className="text-gray-500 text-xs">{card.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-yellow-500" />
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
