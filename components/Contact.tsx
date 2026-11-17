"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowUpRight } from "lucide-react";
import { useReveal } from "./useReveal";
import { socialLinks } from "./SocialIcons";

const EMAIL = "info@sarastralabs.com";

const topics = [
  "Software",
  "Custom Business Software",
  "Website",
  "Digital Marketing",
  "AI Agents",
  "Student Project",
  "Something else",
];

const contactRows = [
  { icon: Mail, label: "Email us", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Call us", value: "+91 93536 22801", href: "tel:+919353622801" },
  { icon: Phone, label: "Or call", value: "+91 97414 47767", href: "tel:+919741447767" },
  { icon: MapPin, label: "Visit us", value: "Mangalore, India" },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLElement>(0.05);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const toggleTopic = (t: string) => setTopic((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  // No backend yet: open the visitor's email app with the enquiry filled in.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry${topic.length ? ` — ${topic.join(", ")}` : ""}${name ? ` from ${name}` : ""}`;
    const details = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      phone ? `Phone: ${phone}` : "",
      topic.length ? `Interested in: ${topic.join(", ")}` : "",
    ].filter(Boolean);
    const body = [...details, "", message].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full rounded-2xl border border-line bg-cream/50 px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/60 transition-all duration-200 focus:border-orange focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange/10";

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`max-w-3xl reveal ${visible ? "is-visible" : ""}`}>
          <p className="eyebrow">Get Started</p>
          <p className="mt-5 font-display text-lg font-medium text-muted sm:text-xl">Build the future with us</p>
          <h2 className="section-title mt-2">
            We don&apos;t just build software.
            <br />
            <span className="text-orange">We build momentum.</span>
          </h2>
          <p className="mt-3 font-display text-lg font-medium text-muted sm:text-xl">Your vision, our execution</p>
        </div>

        <div
          className={`mt-12 grid overflow-hidden rounded-[2rem] border border-line/80 bg-white shadow-lift lg:grid-cols-[0.85fr_1.15fr] reveal ${
            visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          {/* Contact details */}
          <div className="relative flex flex-col overflow-hidden bg-ink p-7 text-white sm:p-10">
            <div aria-hidden="true" className="orb absolute -bottom-20 -right-16 hidden h-56 w-56 opacity-90 lg:block" />
            <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.3),transparent)] blur-2xl" />

            <div className="relative">
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Quick Contact</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/65">
                Tell us about your project, or reach us directly. Prefer a direct approach? Email or call us.
              </p>
            </div>

            <ul className="relative mt-8 space-y-2">
              {contactRows.map((row) => {
                const Icon = row.icon;
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-light transition-colors group-hover:bg-orange group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-white/50">{row.label}</span>
                      <span className="block truncate text-[15px] font-medium">{row.value}</span>
                    </span>
                    {row.href && (
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition-colors group-hover:text-orange-light" strokeWidth={2} />
                    )}
                  </>
                );
                return (
                  <li key={row.value}>
                    {row.href ? (
                      <a href={row.href} className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/5">
                        {inner}
                      </a>
                    ) : (
                      <div className="group -mx-3 flex items-center gap-4 px-3 py-2.5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="relative mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-light" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-white/75">
                <span className="font-semibold text-white">Fast Response.</span> We typically respond within{" "}
                <span className="font-semibold text-orange-light">24 hours</span> on business days.
              </p>
            </div>

            <div className="relative mt-auto pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Follow Us</p>
              <div className="mt-4 flex gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:-translate-y-0.5 hover:border-orange hover:bg-orange hover:text-white"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-5 p-7 sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Start Your Project</h3>
              <p className="mt-2 text-[15px] text-muted">Share a few details and we&apos;ll get back to you.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink-soft">Your Name</label>
                <input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={inputClass} suppressHydrationWarning />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-ink-soft">
                  Phone <span className="font-normal text-muted">(optional)</span>
                </label>
                <input id="contact-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" className={inputClass} suppressHydrationWarning />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink-soft">Your Email</label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className={inputClass}
                suppressHydrationWarning
              />
            </div>

            <fieldset>
              <legend className="mb-2.5 text-sm font-medium text-ink-soft">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => {
                  const on = topic.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleTopic(t)}
                      aria-pressed={on}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        on ? "border-orange bg-orange text-white shadow-glow" : "border-line bg-white text-ink-soft hover:border-orange/40 hover:text-orange"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex flex-1 flex-col">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink-soft">Project Details</label>
              <textarea
                id="contact-message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                rows={5}
                className={`${inputClass} min-h-[140px] flex-1 resize-none`}
                suppressHydrationWarning
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">Sending opens your email app with your message ready to send.</p>
              <button type="submit" className="btn-primary shrink-0 px-7 py-3.5" suppressHydrationWarning>
                Send Message
                <Send className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
