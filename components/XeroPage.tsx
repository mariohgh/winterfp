"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label:"Xero Basic Setup", desc:"We configure Xero from scratch — chart of accounts tailored to your business, bank feeds connected, invoice templates, tax rates and user permissions all set up correctly from day one. You get a clean, working system ready to use immediately.", bullets:["Chart of accounts setup","Bank feed connections","Invoice & quote templates","Tax rate configuration","User roles & permissions"] },
  { label:"Xero Migration Service", desc:"Moving from Sage, QuickBooks, FreeAgent or spreadsheets? We handle the full migration — mapping your existing data, importing opening balances, historical transactions and contacts so nothing is lost in the move.", bullets:["Data mapping & cleansing","Opening balance import","Historical transaction transfer","Contacts & supplier migration","Post-migration reconciliation"] },
  { label:"Xero Migration Correction", desc:"Inherited a messy Xero file? We audit your existing setup, identify errors and fix them — reconciliation issues, duplicate contacts, incorrect tax codes, misposted transactions and chart of accounts problems.", bullets:["Full file audit","Reconciliation fixes","Duplicate contact cleanup","Tax code corrections","Chart of accounts restructure"] },
  { label:"Xero Payroll Setup", desc:"We set up Xero Payroll end-to-end — employee records, pay calendars, pension auto-enrolment, HMRC RTI submissions and leave policies. Fully compliant with UK payroll legislation.", bullets:["Employee records & pay rates","Pay calendar configuration","Auto-enrolment pension setup","HMRC RTI connection","Leave & holiday policies"] },
  { label:"Xero Health Check", desc:"A thorough review of your existing Xero file. We check reconciliation status, VAT setup, payroll accuracy, integrations and reporting — and give you a written report with prioritised recommendations.", bullets:["Bank reconciliation review","VAT return accuracy check","Payroll compliance audit","Integration health check","Written recommendations report"] },
];

const certs = [
  {t:"L1 Xero Certified Associate", d:"Foundation-level certification covering core Xero features and workflows."},
  {t:"L2 Xero Certified Professional", d:"Advanced certification covering reporting, multi-currency and integrations."},
  {t:"L3 Xero Certified Specialist", d:"Expert-level certification for complex implementations and advisory."},
  {t:"Xero Payroll Specialist", d:"Certified in UK payroll, auto-enrolment, RTI and leave management."},
  {t:"Xero Migration Specialist", d:"Certified to migrate data from any platform into Xero accurately."},
];

export default function XeroPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen" style={{background:"#f8f7f4",color:"#0f1923"}}>
      <style>{`
        .gbtn{background:#c9a84c;color:#0f1923;transition:opacity 0.2s,transform 0.15s;}
        .gbtn:hover{opacity:0.88;}
        .gbtn:active{transform:scale(0.97);}
        .svc-card{transition:border-color 0.2s,box-shadow 0.2s,background 0.2s;}
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b bg-white" style={{borderColor:"#e8e4dc"}}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={220} height={60} className="h-14 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#services" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">← All Services</Link>
            <a href="#contact-xero" className="gbtn px-5 py-2 rounded-lg text-sm font-semibold">Get in Touch</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="border-b bg-white" style={{borderColor:"#e8e4dc"}}>
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/xero.svg" alt="Xero" width={90} height={36} className="h-9 w-auto object-contain" />
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{background:"rgba(19,181,234,0.1)",color:"#0a8ab5"}}>Certified Partner</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4" style={{color:"#0f1923"}}>Xero Implementation<br />&amp; Migration Services</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">From a clean first-time setup to complex migrations and payroll — we handle the full Xero stack. Certified at every level, with real accounting knowledge behind every engagement.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#services-xero" className="gbtn px-6 py-3 rounded-xl font-bold text-sm">View Our Services</a>
              <a href="#contact-xero" className="px-6 py-3 rounded-xl font-semibold text-sm border hover:bg-gray-50 transition-colors" style={{borderColor:"#e8e4dc",color:"#0f1923"}}>Book a Free Call</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {n:"5",l:"Xero Certifications",s:"From Associate to Migration Specialist"},
              {n:"L1–L3",l:"Full Certification Stack",s:"Associate, Professional & Specialist"},
              {n:"FCCA",l:"Qualified Accountant",s:"Not just a software reseller"},
              {n:"UK",l:"Based in the UK",s:"HMRC compliant, UK payroll expertise"},
            ].map(c => (
              <div key={c.n} className="rounded-2xl p-5 border bg-white" style={{borderColor:"#e8e4dc"}}>
                <div className="text-2xl font-black mb-1" style={{color:"#c9a84c"}}>{c.n}</div>
                <div className="font-bold text-sm mb-0.5" style={{color:"#0f1923"}}>{c.l}</div>
                <div className="text-gray-500 text-xs leading-snug">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT IS XERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:"#c9a84c"}}>About the Platform</div>
          <h2 className="text-3xl font-black mb-4" style={{color:"#0f1923"}}>What is Xero?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">Xero is the leading cloud accounting platform for small and medium-sized businesses in the UK. It automates bookkeeping, bank reconciliation, invoicing, payroll and VAT — giving you real-time visibility of your finances from any device.</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">Unlike desktop software, Xero lives in the cloud — no installation, no backups, no version updates. Your accountant, bookkeeper and team all work from the same live data.</p>
          <p className="text-gray-500 text-sm leading-relaxed">It is the number one cloud accounting platform for SMEs in the UK, Australia and New Zealand — and increasingly adopted by larger businesses moving away from legacy ERP systems.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            {i:"☁️", t:"Cloud-based", d:"No installation. Access from any device, anywhere."},
            {i:"🔄", t:"Bank Feeds", d:"Automatic daily bank reconciliation."},
            {i:"📊", t:"Real-time Reports", d:"Live P&L, balance sheet and cashflow."},
            {i:"💰", t:"VAT & Payroll", d:"Submit directly to HMRC from Xero."},
            {i:"🔗", t:"1,000+ Integrations", d:"Connect your CRM, inventory, payments and more."},
            {i:"👥", t:"Multi-user", d:"Add staff with controlled access levels."},
          ].map(f => (
            <div key={f.t} className="rounded-xl p-4 border bg-white" style={{borderColor:"#e8e4dc"}}>
              <div className="text-xl mb-2">{f.i}</div>
              <div className="font-bold text-sm mb-1" style={{color:"#0f1923"}}>{f.t}</div>
              <div className="text-gray-500 text-xs leading-snug">{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div id="services-xero" className="border-t" style={{borderColor:"#e8e4dc"}}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:"#c9a84c"}}>What We Offer</div>
          <h2 className="text-3xl font-black mb-2" style={{color:"#0f1923"}}>Our Xero Services</h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">Click a service to see what&apos;s included.</p>

          {/* Service selector */}
          <div className="grid md:grid-cols-5 gap-3 mb-8">
            {services.map((s,i) => (
              <button key={s.label} onClick={() => setActiveService(i)}
                className="svc-card rounded-xl p-4 border text-left"
                style={{
                  borderColor: activeService===i ? "#c9a84c" : "#e8e4dc",
                  background: activeService===i ? "#fdf9f0" : "white",
                  boxShadow: activeService===i ? "0 4px 20px -4px rgba(201,168,76,0.2)" : "none",
                }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mb-3" style={{background: activeService===i ? "#c9a84c" : "#f0ece4", color: activeService===i ? "#0f1923" : "#9ca3af"}}>{i+1}</div>
                <div className="font-bold text-xs leading-snug" style={{color: activeService===i ? "#92742a" : "#374151"}}>{s.label}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="rounded-2xl border bg-white p-8 grid md:grid-cols-2 gap-10" style={{borderColor:"#e8e4dc"}}>
            <div>
              <h3 className="text-2xl font-black mb-3" style={{color:"#0f1923"}}>{services[activeService].label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{services[activeService].desc}</p>
              <a href="#contact-xero" className="gbtn inline-block px-6 py-2.5 rounded-xl font-bold text-sm">Get in Touch</a>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">What&apos;s Included</div>
              <ul className="space-y-3">
                {services[activeService].bullets.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm" style={{color:"#374151"}}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{color:"#c9a84c"}}>✓</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* QUALIFICATIONS */}
      <div className="border-t" style={{borderColor:"#e8e4dc",background:"#0f1923"}}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:"#c9a84c"}}>Credentials</div>
          <h2 className="text-3xl font-black mb-2 text-white">Xero Qualifications</h2>
          <p className="text-gray-400 text-sm mb-10 max-w-xl">Every certification is current and verified by Xero. Not a reseller — a qualified accountant with the full stack.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map(c => (
              <div key={c.t} className="rounded-xl p-5 border" style={{background:"rgba(255,255,255,0.04)",borderColor:"rgba(201,168,76,0.15)"}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 font-black text-sm" style={{background:"rgba(19,181,234,0.15)",color:"#13B5EA"}}>✓</div>
                <div className="font-black text-sm mb-1 text-white">{c.t}</div>
                <div className="text-gray-400 text-xs leading-snug">{c.d}</div>
              </div>
            ))}
            <div className="rounded-xl p-5 border" style={{background:"rgba(201,168,76,0.06)",borderColor:"rgba(201,168,76,0.2)"}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 font-black text-sm" style={{background:"rgba(201,168,76,0.15)",color:"#c9a84c"}}>★</div>
              <div className="font-black text-sm mb-1" style={{color:"#c9a84c"}}>FCCA Qualified</div>
              <div className="text-gray-400 text-xs leading-snug">Fellow of the Association of Chartered Certified Accountants — the accounting knowledge behind every implementation.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT CTA */}
      <div id="contact-xero" className="border-t" style={{borderColor:"rgba(201,168,76,0.1)",background:"#080e14"}}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{color:"#c9a84c"}}>Ready to Start?</div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Book a Free Xero Consultation</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">Whether you need a fresh setup, a migration or a health check — we&apos;ll have an honest conversation about what&apos;s right for your business. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact" className="gbtn px-8 py-3.5 rounded-xl font-bold text-sm text-center">Get in Touch</Link>
            <Link href="/" className="px-8 py-3.5 rounded-xl font-semibold text-sm border text-center hover:bg-white/5 transition-colors" style={{borderColor:"rgba(201,168,76,0.3)",color:"#c9a84c"}}>Back to Home</Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{background:"#080e14",borderColor:"rgba(201,168,76,0.1)"}}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={180} height={50} className="h-12 w-auto object-contain" />
          <p className="text-gray-600 text-xs">© 2025 Winter Finance Partners</p>
        </div>
      </footer>
    </div>
  );
}
