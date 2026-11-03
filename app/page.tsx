"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll("[data-r]").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const platforms = [
  "Xero", "Microsoft Dynamics 365", "NetSuite", "Oracle",
  "FCCA Qualified", "PRINCE2", "UK Based", "ERP Specialists",
  "Xero", "Microsoft Dynamics 365", "NetSuite", "Oracle",
  "FCCA Qualified", "PRINCE2", "UK Based", "ERP Specialists",
];

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      <Navbar />
      <main>
        <Hero />

        {/* Marquee */}
        <div
          style={{ backgroundColor: "#111827", borderColor: "#c9a84c18" }}
          className="py-5 border-y overflow-hidden"
        >
          <div className="flex">
            <div className="marquee-track flex items-center gap-14 whitespace-nowrap">
              {platforms.map((p, i) => (
                <span
                  key={i}
                  style={{ color: "rgba(201,168,76,0.45)" }}
                  className="text-xs font-semibold tracking-widest uppercase"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
