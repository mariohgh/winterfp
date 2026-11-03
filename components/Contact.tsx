"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    system: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" style={{ backgroundColor: "#1a2332" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <div
            style={{ color: "#c9a84c" }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Get In Touch
          </div>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Talk About
            <br />
            <span style={{ color: "#c9a84c" }}>Your Systems</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Whether you&apos;re starting from scratch, switching platforms, or
            need support on an existing system — we&apos;re happy to have an
            honest conversation about what&apos;s right for you.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={16} style={{ color: "#c9a84c" }} />
              <span>hello@winterfinancepartners.co.uk</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone size={16} style={{ color: "#c9a84c" }} />
              <span>Available on request</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <MapPin size={16} style={{ color: "#c9a84c" }} />
              <span>United Kingdom</span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{ backgroundColor: "#243044", borderColor: "#c9a84c22" }}
          className="border rounded-2xl p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div
                style={{ backgroundColor: "#c9a84c22" }}
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              >
                <Send size={24} style={{ color: "#c9a84c" }} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Message Sent</h3>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out. We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{ backgroundColor: "#1a2332", borderColor: "#c9a84c33", color: "#fff" }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    style={{ backgroundColor: "#1a2332", borderColor: "#c9a84c33", color: "#fff" }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">
                  Company
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  style={{ backgroundColor: "#1a2332", borderColor: "#c9a84c33", color: "#fff" }}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">
                  System of Interest
                </label>
                <select
                  name="system"
                  value={form.system}
                  onChange={handleChange}
                  style={{ backgroundColor: "#1a2332", borderColor: "#c9a84c33", color: form.system ? "#fff" : "#4b5563" }}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500"
                >
                  <option value="">Select a platform...</option>
                  <option value="xero">Xero</option>
                  <option value="d365">Microsoft Dynamics 365</option>
                  <option value="netsuite">NetSuite</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your business and what you're looking for..."
                  style={{ backgroundColor: "#1a2332", borderColor: "#c9a84c33", color: "#fff" }}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-yellow-500 resize-none"
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: "#c9a84c", color: "#1a2332" }}
                className="w-full py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
