const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your current systems, and where the pain points are. No sales pitch — just an honest conversation.",
  },
  {
    number: "02",
    title: "System Recommendation",
    description:
      "We recommend the right platform for your size, industry, and budget. If you already know what you need, we get straight to scoping.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Hands-on setup, data migration, integrations, and configuration. We work to a clear timeline with regular check-ins.",
  },
  {
    number: "04",
    title: "Training & Go-Live",
    description:
      "Your team gets trained properly before go-live. We stay on hand for the first weeks to make sure everything runs smoothly.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ backgroundColor: "#f8f7f4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div
            style={{ color: "#c9a84c" }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
          >
            How It Works
          </div>
          <h2
            style={{ color: "#1a2332" }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            A Process That
            <br />
            Delivers Results
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From first call to go-live, we keep things clear, structured, and
            on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{ backgroundColor: "#c9a84c22" }}
                  className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                />
              )}

              <div
                style={{ backgroundColor: "#ffffff", borderColor: "#e8e4dc" }}
                className="relative border rounded-xl p-6 h-full"
              >
                <div
                  style={{ color: "#c9a84c" }}
                  className="text-4xl font-bold mb-4 opacity-40"
                >
                  {s.number}
                </div>
                <h3
                  style={{ color: "#1a2332" }}
                  className="text-lg font-bold mb-3"
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
