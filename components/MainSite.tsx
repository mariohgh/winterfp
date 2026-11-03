"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll("[data-r]").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const platforms = ["Xero","Microsoft Dynamics 365","FCCA Qualified","PRINCE2","UK Based","ERP Specialists","Xero","Microsoft Dynamics 365","FCCA Qualified","PRINCE2","UK Based","ERP Specialists"];

const xeroServices = [
  { id:"setup", label:"Xero Basic Setup", desc:"We configure Xero from scratch — chart of accounts tailored to your business, bank feeds connected, invoice templates, tax rates and user permissions all set up correctly from day one. You get a clean, working system ready to use immediately.", bullets:["Chart of accounts setup","Bank feed connections","Invoice & quote templates","Tax rate configuration","User roles & permissions"] },
  { id:"migration", label:"Xero Migration Service", desc:"Moving from Sage, QuickBooks, FreeAgent or spreadsheets? We handle the full migration — mapping your existing data, importing opening balances, historical transactions and contacts so nothing is lost in the move.", bullets:["Data mapping & cleansing","Opening balance import","Historical transaction transfer","Contacts & supplier migration","Post-migration reconciliation"] },
  { id:"correction", label:"Xero Migration Correction", desc:"Inherited a Xero file that's a mess? We audit your existing setup, identify errors and fix them — reconciliation issues, duplicate contacts, incorrect tax codes, misposted transactions and chart of accounts problems.", bullets:["Full file audit","Reconciliation fixes","Duplicate contact cleanup","Tax code corrections","Chart of accounts restructure"] },
  { id:"payroll", label:"Xero Payroll Setup", desc:"We set up Xero Payroll end-to-end — employee records, pay calendars, pension auto-enrolment, HMRC RTI submissions and leave policies. Fully compliant with UK payroll legislation.", bullets:["Employee records & pay rates","Pay calendar configuration","Auto-enrolment pension setup","HMRC RTI connection","Leave & holiday policies"] },
  { id:"healthcheck", label:"Xero Health Check", desc:"A thorough review of your existing Xero file. We check reconciliation status, VAT setup, payroll accuracy, integrations and reporting — and give you a written report with prioritised recommendations.", bullets:["Bank reconciliation review","VAT return accuracy check","Payroll compliance audit","Integration health check","Written recommendations report"] },
];

export default function MainSite() {
  const ref = useReveal();
  const [xeroTab, setXeroTab] = useState("setup");
  const active = xeroServices.find(s => s.id === xeroTab)!;

  return (
    <div ref={ref} className="min-h-screen overflow-x-hidden" style={{background:"#0f1923",color:"#fff"}}>
      <style>{`
        [data-r]{opacity:0;transform:translateY(30px);transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1),transform 0.75s cubic-bezier(0.16,1,0.3,1);}
        [data-r].in{opacity:1;transform:translateY(0);}
        [data-r][data-d="1"]{transition-delay:0.1s;}
        [data-r][data-d="2"]{transition-delay:0.2s;}
        [data-r][data-d="3"]{transition-delay:0.3s;}
        [data-r][data-d="4"]{transition-delay:0.4s;}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .mq{animation:marquee 32s linear infinite;}
        @keyframes glow{0%,100%{opacity:0.5}50%{opacity:1}}
        .glow{animation:glow 4s ease-in-out infinite;}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .float{animation:float 5s ease-in-out infinite;}
        .gbtn{background:#c9a84c;color:#0f1923;transition:opacity 0.2s,transform 0.15s;}
        .gbtn:hover{opacity:0.88;}
        .gbtn:active{transform:scale(0.97);}
        .card{transition:transform 0.3s cubic-bezier(0.16,1,0.3,1),box-shadow 0.3s;}
        .card:hover{transform:translateY(-5px);box-shadow:0 24px 60px -12px rgba(201,168,76,0.18);}
        .stab{transition:background 0.2s,color 0.2s,border-color 0.2s;}
      `}</style>

      <header className="fixed top-0 inset-x-0 z-50 border-b" style={{background:"rgba(15,25,35,0.85)",backdropFilter:"blur(16px)",borderColor:"rgba(201,168,76,0.1)"}}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={220} height={60} className="h-14 w-auto object-contain" />
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            {["#services","#about","#process","#contact"].map((h,i) => (
              <a key={h} href={h} className="hover:text-white transition-colors">{["Services","About","Process","Contact"][i]}</a>
            ))}
          </nav>
          <a href="#contact" className="gbtn px-5 py-2 rounded-lg text-sm font-semibold">Get in Touch</a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)",backgroundSize:"64px 64px"}} />
        <div className="glow absolute pointer-events-none" style={{top:"-10%",left:"20%",width:"70%",height:"70%",background:"radial-gradient(ellipse,rgba(201,168,76,0.1) 0%,transparent 65%)"}} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{background:"linear-gradient(to bottom,transparent,#c9a84c,transparent)"}} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div data-r className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-8" style={{color:"#c9a84c",borderColor:"rgba(201,168,76,0.3)"}}>ERP &amp; Accounting Consultancy</div>
            <h1 data-r data-d="1" className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">Finance Systems<br /><span style={{color:"#c9a84c"}}>That Actually</span><br />Work For You</h1>
            <p data-r data-d="2" className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">Expert implementation of <strong className="text-white">Xero</strong> and <strong className="text-white">Microsoft Dynamics 365</strong> — by a qualified accountant who has used these systems, not just sold them.</p>
            <div data-r data-d="3" className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="gbtn px-8 py-3.5 rounded-xl font-bold text-sm text-center">Book a Free Consultation</a>
              <a href="#services" className="px-8 py-3.5 rounded-xl font-semibold text-sm border text-center hover:bg-white/5 transition-colors" style={{borderColor:"rgba(201,168,76,0.3)",color:"#c9a84c"}}>Our Services</a>
            </div>
          </div>
          <div data-r data-d="2" className="grid grid-cols-2 gap-4 float">
            {[
              {v:"Xero",l:"Full Stack Certified",s:"L1 Associate → Migration Specialist"},
              {v:"D365",l:"Microsoft Dynamics",s:"Finance, Operations & CRM"},
              {v:"FCCA",l:"Qualified Accountant",s:"PRINCE2 · FMVA · 10yrs experience"},
              {v:"UK",l:"Based in the UK",s:"Serving clients across Great Britain"},
            ].map((c) => (
              <div key={c.v} className="card rounded-2xl p-6 border" style={{background:"rgba(255,255,255,0.04)",borderColor:"rgba(201,168,76,0.12)"}}>
                <div className="text-2xl font-black mb-1" style={{color:"#c9a84c"}}>{c.v}</div>
                <div className="text-white text-sm font-semibold mb-1">{c.l}</div>
                <div className="text-gray-500 text-xs leading-snug">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10" style={{background:"linear-gradient(to bottom,transparent,#c9a84c)"}} />
          <span className="text-gray-500 text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      <div className="py-4 border-y overflow-hidden" style={{background:"#111827",borderColor:"rgba(201,168,76,0.1)"}}>
        <div className="flex">
          <div className="mq flex items-center gap-14 whitespace-nowrap">
            {platforms.map((p,i) => <span key={i} className="text-xs font-bold tracking-widest uppercase" style={{color:"rgba(201,168,76,0.4)"}}>{p}</span>)}
          </div>
        </div>
      </div>

      <section id="services" className="py-28" style={{background:"#f8f7f4"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div data-r className="text-xs font-bold tracking-widest uppercase mb-4" style={{color:"#c9a84c"}}>What We Do</div>
          <h2 data-r data-d="1" className="text-4xl lg:text-5xl font-black tracking-tight mb-4" style={{color:"#0f1923"}}>The Right System,<br />Implemented Properly</h2>
          <p data-r data-d="2" className="text-gray-500 text-lg mb-20 max-w-xl">Two platforms. Deep expertise on each. No generalists, no guesswork.</p>

          {/* XERO */}
          <div data-r className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/xero.svg" alt="Xero" width={90} height={36} className="h-9 w-auto object-contain" />
            </div>
            <p className="text-gray-500 text-sm mb-1 max-w-2xl">Cloud accounting software for small and medium-sized businesses. We are certified at every level — from basic setup through to complex migrations and payroll.</p>

            <div className="mt-6 rounded-2xl border overflow-hidden bg-white" style={{borderColor:"#e8e4dc"}}>
              <div className="flex flex-wrap border-b" style={{borderColor:"#e8e4dc"}}>
                {xeroServices.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setXeroTab(s.id)}
                    className="stab px-5 py-3.5 text-sm font-semibold border-b-2 -mb-px"
                    style={{
                      borderBottomColor: xeroTab === s.id ? "#c9a84c" : "transparent",
                      color: xeroTab === s.id ? "#c9a84c" : "#6b7280",
                      background: xeroTab === s.id ? "#fdf9f0" : "transparent",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-black mb-3" style={{color:"#0f1923"}}>{active.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{active.desc}</p>
                  <a href="#contact" className="gbtn inline-block px-6 py-2.5 rounded-xl font-bold text-sm">Get in Touch</a>
                </div>
                <ul className="space-y-3">
                  {active.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-0.5 text-base leading-none" style={{color:"#c9a84c"}}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border p-6 bg-white" style={{borderColor:"#e8e4dc"}}>
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{color:"#c9a84c"}}>Xero Certifications</div>
              <div className="flex flex-wrap gap-3">
                {["L1 Xero Certified Associate","L2 Xero Certified Professional","L3 Xero Certified Specialist","Xero Payroll Specialist","Xero Migration Specialist"].map(x => (
                  <span key={x} className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{background:"#fdf9f0",borderColor:"rgba(201,168,76,0.3)",color:"#92742a"}}>{x}</span>
                ))}
              </div>
            </div>
          </div>

          {/* D365 */}
          <div data-r data-d="1">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/d365.svg" alt="Microsoft Dynamics 365" width={130} height={36} className="h-9 w-auto object-contain" />
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-2xl">ERP and CRM for growing businesses. Finance, operations and sales connected in one platform with real-time reporting.</p>
            <div className="rounded-2xl border p-8 bg-white" style={{borderColor:"#e8e4dc"}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{background:"#c9a84c"}} />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Coming Soon</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">Our Microsoft Dynamics 365 service pages are being finalised. In the meantime, get in touch directly to discuss your D365 requirements — implementation, configuration, finance module setup and reporting.</p>
              <a href="#contact" className="gbtn inline-block mt-6 px-6 py-2.5 rounded-xl font-bold text-sm">Enquire About D365</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28" style={{background:"#0f1923"}}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div data-r className="text-xs font-bold tracking-widest uppercase mb-4" style={{color:"#c9a84c"}}>About</div>
            <h2 data-r data-d="1" className="text-4xl lg:text-5xl font-black tracking-tight mb-6">Meet Your<br /><span style={{color:"#c9a84c"}}>Consultant</span></h2>
            <div data-r data-d="2" className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg border-2" style={{background:"rgba(201,168,76,0.1)",borderColor:"rgba(201,168,76,0.3)",color:"#c9a84c"}}>EW</div>
              <div>
                <div className="text-white font-bold text-lg">Erik Winter</div>
                <div className="text-sm" style={{color:"#c9a84c"}}>FCCA · PRINCE2 · FMVA · Xero Certified</div>
              </div>
            </div>
            <p data-r data-d="3" className="text-gray-400 leading-relaxed mb-4">An all-round accountant — Management &amp; Financial — with a passion for systems implementation. Erik has held senior finance roles at <strong className="text-white">Richard Mille</strong>, <strong className="text-white">Dover Street Market</strong> and <strong className="text-white">Tomorrow London</strong> before moving into full-time ERP consultancy.</p>
            <p data-r data-d="4" className="text-gray-400 leading-relaxed mb-8">Winter Finance Partners is his independent practice — built to give growing businesses access to the same quality of implementation expertise that larger enterprises take for granted.</p>
            <div data-r data-d="4" className="flex gap-4">
              <a href="#contact" className="gbtn px-6 py-3 rounded-xl font-bold text-sm">Work With Erik</a>
              <a href="https://www.linkedin.com/in/erik-w-9173ab4a/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-semibold text-sm border hover:bg-white/5 transition-colors" style={{borderColor:"rgba(201,168,76,0.3)",color:"#c9a84c"}}>LinkedIn</a>
            </div>
          </div>
          <div data-r data-d="2" className="space-y-4">
            <div className="rounded-2xl p-6 border" style={{background:"rgba(255,255,255,0.03)",borderColor:"rgba(201,168,76,0.12)"}}>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-500">Qualifications</div>
              <div className="grid grid-cols-2 gap-3">
                {[{v:"FCCA",s:"Fellow Chartered Certified Accountant"},{v:"PRINCE2",s:"Foundation & Practitioner"},{v:"FMVA",s:"Financial Modeling & Valuation Analyst"},{v:"Xero",s:"Full Stack Certified — L1 to Migration"}].map(c => (
                  <div key={c.v} className="rounded-xl p-3" style={{background:"rgba(255,255,255,0.04)"}}>
                    <div className="font-black text-sm mb-0.5" style={{color:"#c9a84c"}}>{c.v}</div>
                    <div className="text-gray-400 text-xs leading-snug">{c.s}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6 border" style={{background:"rgba(255,255,255,0.03)",borderColor:"rgba(201,168,76,0.12)"}}>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-500">Xero Certifications</div>
              <ul className="space-y-2.5">
                {["L1 Xero Certified Associate","L2 Xero Certified Professional","L3 Xero Certified Specialist","Xero Payroll Specialist","Xero Migration Specialist"].map(x => (
                  <li key={x} className="flex items-center gap-2.5 text-sm text-gray-300"><span style={{color:"#c9a84c"}}>✓</span> {x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 border" style={{background:"rgba(255,255,255,0.03)",borderColor:"rgba(201,168,76,0.12)"}}>
              <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 pl-4" style={{borderColor:"#c9a84c"}}>&ldquo;Erik is a very dedicated and professional Senior Accountant. He introduced new processes and improved reporting visibility. His knowledge of system accounting was a huge advantage.&rdquo;</p>
              <p className="text-gray-600 text-xs mt-3">— Ariane Mahon, De Beers Group</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-28" style={{background:"#f8f7f4"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div data-r className="text-xs font-bold tracking-widest uppercase mb-4" style={{color:"#c9a84c"}}>How It Works</div>
          <h2 data-r data-d="1" className="text-4xl lg:text-5xl font-black tracking-tight mb-4" style={{color:"#0f1923"}}>A Process That<br />Delivers Results</h2>
          <p data-r data-d="2" className="text-gray-500 text-lg mb-16 max-w-xl">From first call to go-live, clear, structured and on time.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {n:"01",t:"Discovery Call",d:"We learn about your business, current systems and pain points. No sales pitch — just an honest conversation."},
              {n:"02",t:"Recommendation",d:"We recommend the right platform for your size, industry and budget. If you know what you need, we scope it straight away."},
              {n:"03",t:"Implementation",d:"Hands-on setup, data migration, integrations and configuration. Clear timeline with regular check-ins throughout."},
              {n:"04",t:"Training & Go-Live",d:"Your team gets trained properly before go-live. We stay on hand for the first weeks to make sure everything runs smoothly."},
            ].map((s,i) => (
              <div key={s.n} data-r data-d={String(i+1)} className="card rounded-2xl p-6 border bg-white" style={{borderColor:"#e8e4dc"}}>
                <div className="text-4xl font-black mb-4 opacity-30" style={{color:"#c9a84c"}}>{s.n}</div>
                <h3 className="text-lg font-black mb-3" style={{color:"#0f1923"}}>{s.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28" style={{background:"#0f1923"}}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <div data-r className="text-xs font-bold tracking-widest uppercase mb-4" style={{color:"#c9a84c"}}>Get In Touch</div>
            <h2 data-r data-d="1" className="text-4xl lg:text-5xl font-black tracking-tight mb-6">Let&apos;s Talk About<br /><span style={{color:"#c9a84c"}}>Your Systems</span></h2>
            <p data-r data-d="2" className="text-gray-400 text-lg leading-relaxed mb-10">Starting from scratch, switching platforms, or need support on an existing system — happy to have an honest conversation about what&apos;s right for you.</p>
            <div data-r data-d="3" className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3"><span style={{color:"#c9a84c"}}>✉</span> hello@winterfinancepartners.co.uk</div>
              <div className="flex items-center gap-3"><span style={{color:"#c9a84c"}}>📍</span> United Kingdom</div>
            </div>
          </div>
          <div data-r data-d="2" className="rounded-2xl p-8 border" style={{background:"rgba(255,255,255,0.03)",borderColor:"rgba(201,168,76,0.12)"}}>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">Full Name *</label>
                  <input required placeholder="Your name" className="w-full border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none" style={{background:"rgba(255,255,255,0.05)",borderColor:"rgba(201,168,76,0.2)"}} />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">Email *</label>
                  <input required type="email" placeholder="you@company.com" className="w-full border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none" style={{background:"rgba(255,255,255,0.05)",borderColor:"rgba(201,168,76,0.2)"}} />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">Company</label>
                <input placeholder="Your company" className="w-full border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none" style={{background:"rgba(255,255,255,0.05)",borderColor:"rgba(201,168,76,0.2)"}} />
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">System of Interest</label>
                <select className="w-full border rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none" style={{background:"rgba(255,255,255,0.05)",borderColor:"rgba(201,168,76,0.2)"}}>
                  <option value="">Select a platform...</option>
                  <option>Xero</option>
                  <option>Microsoft Dynamics 365</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your business..." className="w-full border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none resize-none" style={{background:"rgba(255,255,255,0.05)",borderColor:"rgba(201,168,76,0.2)"}} />
              </div>
              <button type="submit" className="gbtn w-full py-3.5 rounded-xl font-bold text-sm">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t" style={{background:"#080e14",borderColor:"rgba(201,168,76,0.1)"}}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={180} height={50} className="h-12 w-auto object-contain" />
          <nav className="flex flex-wrap gap-6 text-sm text-gray-500">
            {[["#services","Services"],["#about","About"],["#process","Process"],["#contact","Contact"],["/privacy","Privacy Policy"]].map(([h,l]) => (
              <Link key={h} href={h} className="hover:text-white transition-colors">{l}</Link>
            ))}
          </nav>
          <p className="text-gray-600 text-xs">© 2025 Winter Finance Partners</p>
        </div>
      </footer>
    </div>
  );
}
