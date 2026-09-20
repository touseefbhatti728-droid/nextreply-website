"use client";
import { useState } from "react";
import Link from "next/link";

const INDUSTRIES = [
  { name: "Salons & Spas", slug: "salons-spas" },
  { name: "Clinics & Doctors", slug: "clinics" },
  { name: "Dentists", slug: "dentists" },
  { name: "Restaurants", slug: "restaurants" },
  { name: "Gyms & Fitness", slug: "gyms" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Aesthetic Clinics", slug: "aesthetic-clinics" },
  { name: "Veterinary Clinics", slug: "veterinary" },
  { name: "Home Services", slug: "home-services" },
  { name: "Auto Repair", slug: "auto-repair" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap">
        <nav className="nav">
          <Link href="/" className="logo">
            <span className="lnx">Next</span>
            <span className="grad-text">Reply</span>
          </Link>
          <div className="nav-links">
            <Link href="/#features">Features</Link>
            <Link href="/#how">How It Works</Link>
            <div className="nav-dd">
              <button type="button">
                Industries
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="dd-menu">
                {INDUSTRIES.map((i) => (
                  <Link key={i.slug} href={`/industries/${i.slug}`}>{i.name}</Link>
                ))}
                <Link href="/industries" className="all">View All Industries →</Link>
              </div>
            </div>
            <Link href="/pricing">Pricing</Link>
            <Link href="/connect-whatsapp">Connect WhatsApp</Link>
          </div>
          <div className="nav-cta">
            <a href="https://whatsapp-agent-dashboard-wine.vercel.app/login" className="signin">Sign In</a>
            <a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-primary">Start Free</a>
            <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </nav>
      </div>
      <div className={`mobile-menu${open ? " show" : ""}`}>
        <Link href="/#features" onClick={() => setOpen(false)}>Features</Link>
        <Link href="/#how" onClick={() => setOpen(false)}>How It Works</Link>
        <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
        <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <Link href="/connect-whatsapp" onClick={() => setOpen(false)}>Connect WhatsApp</Link>
        <a href="https://whatsapp-agent-dashboard-wine.vercel.app/login" onClick={() => setOpen(false)}>Sign In</a>
      </div>
    </header>
  );
}