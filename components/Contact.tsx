"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { useReveal } from "./useReveal";
import { socialLinks } from "./SocialIcons";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref, visible } = useReveal<HTMLElement>(0.05);

  const inputClass =
    "w-full rounded-2xl border border-line bg-cream/60 px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/60 transition-all duration-200 focus:border-orange focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange/10 sm:px-5";

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

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Contact form */}
          <div
            className={`card relative flex flex-col overflow-hidden p-6 sm:p-9 reveal ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-orange" />
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">Start Your Project</h3>

            <form className="mt-7 flex flex-1 flex-col gap-5">
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink-soft">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className={inputClass}
                  suppressHydrationWarning
                />
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink-soft">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className={`${inputClass} min-h-[140px] flex-1 resize-none`}
                  suppressHydrationWarning
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base" suppressHydrationWarning>
                Send Message
                <Send className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div
              className={`card p-6 sm:p-8 reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "180ms" }}
            >
              <h4 className="font-display text-lg font-semibold tracking-tight text-ink">Quick Contact</h4>
              <ul className="mt-5 space-y-4 text-[15px]">
                {[
                  { icon: Mail, label: "info@sarastralabs.com", href: "mailto:info@sarastralabs.com" },
                  { icon: Phone, label: "9353622801", href: "tel:+919353622801" },
                  { icon: Phone, label: "9741447767", href: "tel:+919741447767" },
                  { icon: MapPin, label: "Mangalore, India" },
                ].map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-pale text-orange">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      {item.label}
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="flex items-center gap-3 text-ink-soft transition-colors hover:text-orange">
                          {inner}
                        </a>
                      ) : (
                        <span className="flex items-center gap-3 text-ink-soft">{inner}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              className={`card p-6 sm:p-8 reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "240ms" }}
            >
              <h4 className="font-display text-lg font-semibold tracking-tight text-ink">Follow Us</h4>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-xl border border-line px-3.5 py-3 text-sm font-medium text-ink-soft transition-all hover:border-orange/40 hover:text-orange"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              className={`flex items-start gap-4 rounded-3xl bg-orange-pale p-6 sm:p-7 reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "300ms" }}
            >
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
              <div>
                <h4 className="font-semibold text-ink">Fast Response</h4>
                <p className="mt-1 text-[15px] text-ink-soft">
                  We typically respond within <span className="font-semibold text-orange-dark">24 hours</span> on business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct contact */}
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-muted sm:text-lg">Prefer a direct approach?</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="mailto:info@sarastralabs.com" className="btn-primary">
              Email Us Directly
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <Link href="/services" className="btn-ghost">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
