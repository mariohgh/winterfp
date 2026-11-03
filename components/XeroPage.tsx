"use client";
import { useState } from "react";
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
];


export default function XeroPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-white" style={{ color: "#0f1923" }}>
      <style>{`
        .gbtn { background: #c9a84c; color: #0f1923; transition: opacity 0.2s, transform 0.15s; }
        .gbtn:hover { opacity: 0.88; }
        .gbtn:active { transform: scale(0.97); }
        .svc-btn { transition: background 0.15s, border-color 0.15s, color 0.15s; }
        .svc-btn:hover { background: #fdf9f0; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: "#e8e4dc" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/"><Image src="/logo123.jpeg" alt="Winter Finance Partners" width={220} height={60} className="h-14 w-auto object-contain" /></Link>
          <div className="flex items-center gap-6">
            <Link href="/#services" className="text-sm text-gray-400 hover:text-gray-800 transition-colors">← Back</Link>
            <a href="#get-started" className="gbtn px-5 py-2 rounded-lg text-sm font-bold">Get in Touch</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div style={{ background: "#f8f7f4", borderBottom: "1px solid #e8e4dc" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/xero.svg" alt="Xero" width={80} height={32} className="h-8 w-auto object-contain" />
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "rgba(19,181,234,0.1)", color: "#0a8ab5" }}>Full Stack Certified</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5" style={{ color: "#0f1923" }}>
                Xero Implementation<br />&amp; Migration Services
              </h1>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
                From a clean first-time setup to complex migrations and payroll — handled by a qualified accountant certified at every level of Xero. Not a reseller. Not a generalist.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#services-detail" className="gbtn px-6 py-3 rounded-xl font-bold text-sm">View Services</a>
                <a href="#get-started" className="px-6 py-3 rounded-xl font-bold text-sm border hover:bg-white transition-colors" style={{ borderColor: "#d1ccc0", color: "#0f1923" }}>Book a Free Call</a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: "Xero", l: "Certified" },
                { n: "Multi", l: "Sector Experience" },
                { n: "5+", l: "Certifications Held" },
              ].map(c => (
                <div key={c.n} className="rounded-2xl p-5 border text-center" style={{ background: "#0f1923", borderColor: "rgba(201,168,76,0.2)" }}>
                  <div className="text-xl font-black mb-1" style={{ color: "#c9a84c" }}>{c.n}</div>
                  <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{c.l}</div>
                </div>
              ))}
            </div>
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
            It is the number one cloud accounting platform for SMEs in the UK — and the difference between a system that works and one that just exists comes down entirely to how it is set up.
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
            {/* Left sidebar */}
            <div className="flex flex-col gap-2">
              {services.map((s, i) => (
                <button key={s.label} onClick={() => setActive(i)}
                  className="svc-btn text-left rounded-xl px-4 py-4 border"
                  style={{
                    borderColor: active === i ? "#c9a84c" : "#e8e4dc",
                    background: active === i ? "#fdf9f0" : "white",
                  }}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: active === i ? "#c9a84c" : "#9ca3af" }}>{s.tag}</div>
                  <div className="font-bold text-sm" style={{ color: active === i ? "#92742a" : "#374151" }}>{s.label}</div>
                </button>
              ))}
            </div>

            {/* Right detail panel */}
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

      {/* QUALIFICATIONS */}
      <div style={{ background: "#0f1923" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>Credentials</p>
          <h2 className="text-3xl lg:text-4xl font-black mb-3 text-white">Certified at Every Level</h2>
          <p className="text-sm mb-16 max-w-2xl" style={{ color: "rgba(255,255,255,0.45)" }}>Our consultants hold the full stack of Xero certifications — from entry-level associate through to Migration, Payroll and Tax Specialist. Every certification is current, verified by Xero, and renewed annually.</p>

          {/* L1 / L2 / L3 — dark cards with large level number */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { level: "01", name: "Xero Certified Associate", d: "Core Xero features, workflows and best practices for client setup." },
              { level: "02", name: "Xero Certified Professional", d: "Reporting, multi-currency, integrations and complex client scenarios." },
              { level: "03", name: "Xero Certified Specialist", d: "Complex implementations, advisory work and specialist engagements." },
            ].map(c => (
              <div key={c.level} className="rounded-2xl p-7 border relative overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(201,168,76,0.15)" }}>
                <div className="absolute top-4 right-5 text-6xl font-black leading-none select-none" style={{ color: "rgba(201,168,76,0.07)" }}>{c.level}</div>
                <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>Level {c.level}</div>
                <div className="font-black text-base mb-2 text-white">{c.name}</div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{c.d}</p>
              </div>
            ))}
          </div>

          {/* Specialist badge cards — white badge on dark */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { src: "/badges/migration-specialist.png", alt: "Xero Migration Specialist", label: "Migration Specialist", d: "Certified to migrate data from any platform into Xero accurately and completely." },
              { src: "/badges/payroll-specialist.png", alt: "Xero Payroll Specialist", label: "Payroll Specialist", d: "UK payroll, auto-enrolment, HMRC RTI and leave management within Xero." },
              { src: "/badges/tax-specialist.png", alt: "Xero Tax Specialist", label: "Tax Specialist", d: "Xero tax workflows, VAT returns and compliance for UK businesses." },
            ].map(b => (
              <div key={b.label} className="rounded-2xl border flex flex-col overflow-hidden" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
                <div className="flex items-center justify-center py-8" style={{ background: "#fff" }}>
                  <Image src={b.src} alt={b.alt} width={130} height={68} className="h-16 w-auto object-contain" />
                </div>
                <div className="p-6" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="font-black text-sm mb-1 text-white">{b.label}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{b.d}</p>
                </div>
              </div>
            ))}
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
