"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    label: "Xero Basic Setup",
    tag: "New to Xero",
    desc: "We configure Xero from scratch around your business — chart of accounts, bank feeds, invoice templates, tax rates and user permissions. You get a clean, working system from day one with no guesswork.",
    bullets: ["Chart of accounts tailored to your business","Bank feed connections","Invoice & quote templates","Tax rate & VAT configuration","User roles & permissions","Opening balances"],
  },
  {
    label: "Xero Migration Service",
    tag: "Switching platforms",
    desc: "Moving from Sage, QuickBooks, FreeAgent or spreadsheets? We map your existing data, import opening balances, historical transactions and contacts — so nothing is lost and your records stay intact.",
    bullets: ["Full data mapping & cleansing","Opening balance import","Historical transaction transfer","Contacts & supplier migration","Bank feed reconnection","Post-migration reconciliation"],
  },
  {
    label: "Xero Migration Correction",
    tag: "Fix existing file",
    desc: "Inherited a messy Xero file? We audit your setup, find the errors and fix them — reconciliation issues, duplicate contacts, incorrect tax codes, misposted transactions and chart of accounts problems.",
    bullets: ["Full file audit report","Bank reconciliation fixes","Duplicate contact cleanup","Tax code corrections","Chart of accounts restructure","VAT return review"],
  },
  {
    label: "Xero Payroll Setup",
    tag: "UK payroll",
    desc: "We set up Xero Payroll end-to-end — employee records, pay calendars, pension auto-enrolment, HMRC RTI submissions and leave policies. Fully compliant with UK payroll legislation.",
    bullets: ["Employee records & pay rates","Pay calendar configuration","Auto-enrolment pension setup","HMRC RTI connection","Leave & holiday policies","Payslip templates"],
  },
  {
    label: "Xero Health Check",
    tag: "Existing users",
    desc: "A thorough review of your existing Xero file. We check reconciliation, VAT setup, payroll accuracy and integrations — and give you a written report with prioritised recommendations.",
    bullets: ["Bank reconciliation review","VAT return accuracy check","Payroll compliance audit","Integration health check","User access review","Written recommendations report"],
  },
  {
    label: "E-Commerce Setup",
    tag: "Online stores",
    desc: "We connect your online store to Xero so every sale, refund and fee posts automatically — no manual entry. Works with Shopify, WooCommerce, Stripe and more, with correct VAT treatment throughout.",
    bullets: ["Shopify / WooCommerce integration","Stripe & payment gateway sync","Automated sales & refund posting","Correct VAT treatment per channel","Multi-currency reconciliation","Real-time revenue reporting"],
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatBlock({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const n = useCountUp(value, 1600, started);
  return (
    <div className="flex flex-col">
      <span className="text-5xl lg:text-6xl font-black tracking-tight leading-none" style={{ color: "#0f1923" }}>
        {n}{suffix}
      </span>
      <span className="text-sm text-gray-400 mt-2 font-medium">{label}</span>
    </div>
  );
}

export default function XeroPage() {
  const [active, setActive] = useState(0);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ color: "#0f1923" }}>
      <style>{`
        .gbtn { background: #c9a84c; color: #0f1923; transition: opacity 0.2s, transform 0.15s; }
        .gbtn:hover { opacity: 0.88; }
        .gbtn:active { transform: scale(0.97); }
        .svc-btn { transition: background 0.15s, border-color 0.15s, color 0.15s; }
        .svc-btn:hover { background: #fdf9f0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }
        @keyframes shimmer { 0%,100%{opacity:0.4} 50%{opacity:1} }
        .shimmer-line { animation: shimmer 3s ease-in-out infinite; }
        .cert-row { transition: color 0.2s; }
        .cert-row:hover .cert-num { color: #c9a84c !important; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: "#e8e4dc" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/"><Image src="/logo123.jpeg" alt="Winter Finance Partners" width={220} height={60} className="h-14 w-auto object-contain" /></Link>
          <div className="flex items-center gap-6">
            <Link href="/#services" className="text-sm text-gray-400 hover:text-gray-800 transition-colors">← Back</Link>
            <a href="#get-started" className="gbtn px-5 py-2 rounded-full text-sm font-bold">Get in Touch</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div style={{ background: "#f8f7f4", borderBottom: "1px solid #e8e4dc" }}>
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">

          {/* Top label row */}
          <div className="fade-up flex items-center gap-3 mb-10">
            <Image src="/xero.svg" alt="Xero" width={72} height={28} className="h-7 w-auto object-contain" />
            <span className="text-gray-300 select-none">|</span>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0a8ab5" }}>Full Stack Certified Partner</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
            <div>
              <h1 className="fade-up fade-up-1 text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6" style={{ color: "#0f1923" }}>
                Xero Implementation<br /><span style={{ color: "#13B5EA" }}>&amp; Migration</span><br />Services
              </h1>
              <p className="fade-up fade-up-2 text-gray-500 leading-relaxed mb-10 max-w-lg text-base">
                From a clean first-time setup to complex migrations and payroll — handled by a qualified accountant certified at every level of Xero. Not a reseller. Not a generalist.
              </p>

              {/* Credential pills */}
              <div className="fade-up fade-up-3 flex flex-wrap gap-2 mb-10">
                {["Xero Certified","FCCA Qualified","UK Based","Multi-Sector","HMRC Compliant","10+ Years Experience"].map(t => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: "#e8e4dc", color: "#374151", background: "#fff" }}>{t}</span>
                ))}
              </div>

              <div className="fade-up fade-up-4 flex flex-wrap gap-3">
                <a href="#services-detail" className="gbtn px-6 py-3 rounded-xl font-bold text-sm">View Services</a>
                <a href="#get-started" className="px-6 py-3 rounded-xl font-bold text-sm border hover:bg-white transition-colors" style={{ borderColor: "#d1ccc0", color: "#0f1923" }}>Book a Free Call</a>
              </div>
            </div>

            {/* Stats — animated count-up */}
            <div ref={statsRef} className="fade-up fade-up-2 flex flex-col gap-8 lg:items-end pb-1">
              <StatBlock value={5} suffix="+" label="Xero Certifications" started={statsStarted} />
              <div className="shimmer-line w-12 h-px" style={{ background: "#c9a84c" }} />
              <StatBlock value={10} suffix="+" label="Years Experience" started={statsStarted} />
              <div className="shimmer-line w-12 h-px" style={{ background: "#c9a84c" }} />
              <StatBlock value={100} suffix="%" label="UK HMRC Compliant" started={statsStarted} />
            </div>
          </div>
        </div>

        {/* Badges strip */}
        <div className="border-t" style={{ borderColor: "#e8e4dc" }}>
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Specialist Badges</span>
            <div className="h-4 w-px bg-gray-200" />
            <Image src="/badges/migration-specialist.png" alt="Xero Migration Specialist" width={110} height={56} className="h-10 w-auto object-contain" />
            <Image src="/badges/payroll-specialist.png" alt="Xero Payroll Specialist" width={110} height={56} className="h-10 w-auto object-contain" />
            <Image src="/badges/tax-specialist.png" alt="Xero Tax Specialist" width={110} height={56} className="h-10 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* WHAT IS XERO */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>About the Platform</p>
          <h2 className="text-3xl font-black mb-5" style={{ color: "#0f1923" }}>What is Xero?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Xero is the leading cloud accounting platform for small and medium-sized businesses in the UK. It automates bookkeeping, bank reconciliation, invoicing, payroll and VAT — giving you real-time visibility of your finances from any device, without installing anything.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Your accountant, bookkeeper and team all work from the same live data. No emailing spreadsheets. No version conflicts. No end-of-month scramble.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            The difference between a system that works and one that just exists comes down entirely to how it is set up.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { t: "Cloud-based", d: "No installation. Access from any device, anywhere." },
            { t: "Bank Feeds", d: "Automatic daily reconciliation from your bank." },
            { t: "Real-time Reports", d: "Live P&L, balance sheet and cashflow." },
            { t: "VAT & Payroll", d: "Submit directly to HMRC from within Xero." },
            { t: "1,000+ Integrations", d: "Connect CRM, inventory, payments and more." },
            { t: "Multi-user Access", d: "Add staff with controlled permission levels." },
          ].map(f => (
            <div key={f.t} className="rounded-2xl p-5 border" style={{ borderColor: "#e8e4dc", background: "#fafaf9" }}>
              <div className="w-1.5 h-1.5 rounded-full mb-3" style={{ background: "#c9a84c" }} />
              <div className="font-bold text-sm mb-1" style={{ color: "#0f1923" }}>{f.t}</div>
              <div className="text-gray-500 text-xs leading-snug">{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div id="services-detail" style={{ background: "#f8f7f4", borderTop: "1px solid #e8e4dc", borderBottom: "1px solid #e8e4dc" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>What We Offer</p>
          <h2 className="text-3xl font-black mb-12" style={{ color: "#0f1923" }}>Our Xero Services</h2>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <div className="flex flex-col gap-2">
              {services.map((s, i) => (
                <button key={s.label} onClick={() => setActive(i)}
                  className="svc-btn text-left rounded-xl px-4 py-4 border"
                  style={{ borderColor: active === i ? "#c9a84c" : "#e8e4dc", background: active === i ? "#fdf9f0" : "white" }}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: active === i ? "#c9a84c" : "#9ca3af" }}>{s.tag}</div>
                  <div className="font-bold text-sm" style={{ color: active === i ? "#92742a" : "#374151" }}>{s.label}</div>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl border p-8 lg:p-10" style={{ borderColor: "#e8e4dc" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9a84c" }}>{services[active].tag}</div>
              <h3 className="text-2xl font-black mb-4" style={{ color: "#0f1923" }}>{services[active].label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{services[active].desc}</p>
              <div className="border-t pt-6 mb-8" style={{ borderColor: "#f0ece4" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">What&apos;s Included</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services[active].bullets.map(b => (
                    <div key={b} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-black" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>✓</span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#get-started" className="gbtn inline-block px-6 py-3 rounded-xl font-bold text-sm">Enquire About This Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* QUALIFICATIONS — editorial layout on dark */}
      <div style={{ background: "#0f1923" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left — text + certification timeline */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>Credentials</p>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-white">Certified<br />at Every<br />Level.</h2>
              <p className="text-sm leading-relaxed mb-14" style={{ color: "rgba(255,255,255,0.45)" }}>
                Every certification is current, verified by Xero, and renewed annually. Backed by FCCA qualification — real accounting knowledge behind every engagement.
              </p>

              {/* Vertical cert list — timeline style */}
              <div className="relative">
                <div className="absolute left-[18px] top-0 bottom-0 w-px" style={{ background: "rgba(201,168,76,0.15)" }} />
                {[
                  { num: "L1", name: "Xero Certified Associate", sub: "Core features, workflows & client setup" },
                  { num: "L2", name: "Xero Certified Professional", sub: "Reporting, multi-currency & integrations" },
                  { num: "L3", name: "Xero Certified Specialist", sub: "Complex implementations & advisory" },
                  { num: "★", name: "Migration Specialist", sub: "Full data migration from any platform" },
                  { num: "★", name: "Payroll Specialist", sub: "UK payroll, RTI & auto-enrolment" },
                  { num: "★", name: "Tax Specialist", sub: "VAT returns & UK tax compliance" },
                ].map((c, i) => (
                  <div key={c.name} className="cert-row relative flex items-start gap-5 mb-7 last:mb-0">
                    <div className="cert-num shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black z-10 transition-colors"
                      style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>
                      {c.num}
                    </div>
                    <div className="pt-1.5">
                      <div className="font-bold text-sm text-white">{c.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — badge cards, clean white on dark */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>Xero Specialist Badges</p>
              <div className="flex flex-col gap-4">
                {[
                  { src: "/badges/migration-specialist.png", alt: "Xero Migration Specialist", label: "Migration Specialist", d: "Certified to migrate data from any platform into Xero accurately and completely." },
                  { src: "/badges/payroll-specialist.png", alt: "Xero Payroll Specialist", label: "Payroll Specialist", d: "UK payroll, auto-enrolment, HMRC RTI and leave management within Xero." },
                  { src: "/badges/tax-specialist.png", alt: "Xero Tax Specialist", label: "Tax Specialist", d: "Xero tax workflows, VAT returns and compliance for UK businesses." },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-6 rounded-2xl border p-5" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                    <div className="shrink-0 rounded-xl flex items-center justify-center p-3" style={{ background: "#fff", minWidth: 80 }}>
                      <Image src={b.src} alt={b.alt} width={110} height={56} className="h-12 w-auto object-contain" />
                    </div>
                    <div>
                      <div className="font-black text-sm text-white mb-1">{b.label}</div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FCCA note */}
              <div className="mt-6 rounded-2xl border p-5 flex items-start gap-4" style={{ borderColor: "rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)" }}>
                <div className="shrink-0 text-lg" style={{ color: "#c9a84c" }}>★</div>
                <div>
                  <div className="font-black text-sm text-white mb-1">FCCA — Qualified Accountant</div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>Fellow of the Association of Chartered Certified Accountants. Real accounting knowledge behind every implementation — not just software training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="get-started" style={{ background: "#0f1923", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>Ready to Start?</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Book a Free Xero Consultation</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">Whether you need a fresh setup, a migration or a health check — we&apos;ll have an honest conversation about what&apos;s right for your business. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact" className="gbtn px-8 py-3.5 rounded-xl font-bold text-sm text-center">Get in Touch</Link>
            <Link href="/" className="px-8 py-3.5 rounded-xl font-bold text-sm border text-center hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(201,168,76,0.3)", color: "#c9a84c" }}>Back to Home</Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{ background: "#080e14", borderColor: "rgba(201,168,76,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={180} height={50} className="h-12 w-auto object-contain" />
          <p className="text-gray-600 text-xs">© 2025 Winter Finance Partners</p>
        </div>
      </footer>
    </div>
  );
}
