"use client";
import { useState } from "react";
import Image from "next/image";
import MainSite from "@/components/MainSite";

export default function Home() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function attempt() {
    if (input === "ErikWinter72!") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) return <MainSite />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{background:"#0f1923"}}>
      <style>{`
        @keyframes glow{0%,100%{opacity:0.4}50%{opacity:0.8}}
        .glow{animation:glow 4s ease-in-out infinite;}
        .gbtn{background:#c9a84c;color:#0f1923;transition:opacity 0.2s;}
        .gbtn:hover{opacity:0.88;}
      `}</style>

      <div className="glow absolute pointer-events-none" style={{top:"10%",left:"20%",width:"60%",height:"50%",background:"radial-gradient(ellipse,rgba(201,168,76,0.08) 0%,transparent 70%)"}} />

      <div className="relative flex flex-col items-center text-center max-w-md w-full">
        <Image src="/logo123.jpeg" alt="Winter Finance Partners" width={160} height={46} className="h-12 w-auto object-contain mb-10" />

        <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6" style={{color:"#c9a84c",borderColor:"rgba(201,168,76,0.3)"}}>
          Under Construction
        </div>

        <h1 className="text-white text-3xl font-black tracking-tight mb-3">
          Something great is coming
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          Winter Finance Partners is launching soon. Enter the password to preview the site.
        </p>

        <div className="w-full space-y-3">
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            onKeyDown={e => e.key === "Enter" && attempt()}
            placeholder="Enter password"
            className="w-full border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none text-center tracking-widest"
            style={{background:"rgba(255,255,255,0.05)",borderColor:error ? "#ef4444" : "rgba(201,168,76,0.2)"}}
          />
          {error && <p className="text-red-400 text-xs">Incorrect password</p>}
          <button onClick={attempt} className="gbtn w-full py-3 rounded-xl font-bold text-sm">
            Preview Site
          </button>
        </div>
      </div>
    </div>
  );
}
