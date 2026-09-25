"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClinicsContent() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const t = setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in")), 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return (
    <>
      <Header />
{/* HERO */}
<section className="ind-hero">
  <div className="dotbg"></div><div className="glow g1"></div><div className="glow g2"></div>
  <div className="wrap ind-hero-in">
    <div>
      <span className="chip"><span className="pulse"></span>WhatsApp AI for UAE Clinics</span>
      <h1>WhatsApp Appointment Booking for Clinics in <span className="grad-text">Dubai &amp; the UAE</span></h1>
      <p className="sub">NextReply is a bilingual Arabic and English WhatsApp assistant for UAE clinics. It books patient appointments, handles reception questions about hours, location and insurance, and keeps your front desk clear — 24/7, on your own WhatsApp Business number.</p>
      <div className="hero-cta"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a><a href="/connect-whatsapp" className="btn btn-light btn-lg">See How It Works</a></div>
      <div className="trust-badges">
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Arabic &amp; English</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Official WhatsApp Business API</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No Setup Fees</span>
      </div>
    </div>
    <div className="mock">
      <div className="mock-top"><div className="mock-av">N</div><div><div className="nm">City Care Clinic · Dubai</div><div className="st">online</div></div></div>
      <div className="mock-body">
        <div className="bub them">مرحبا، أبغى موعد مع الطبيب بكرة</div>
        <div className="bub me">أهلاً بك! متوفر ١٠:٣٠ صباحاً أو ٤:٠٠ عصراً غداً. أي وقت يناسبك؟</div>
        <div className="bub them">10:30 please, and do you accept my insurance?</div>
        <div className="bub me">Booked for 10:30 AM tomorrow. Yes, please bring your insurance card and Emirates ID. See you then.</div>
        <div className="ref"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Booked · APT-2043</div>
      </div>
    </div>
  </div>
</section>

{/* STATS */}
<section className="stats">
  <div className="dotbg"></div><div className="glow g1"></div>
  <div className="wrap">
    <div className="stats-grid">
      <div className="stat reveal"><b>2B+</b><span>WhatsApp Users Worldwide</span></div>
      <div className="stat reveal"><b>AR + EN</b><span>Replies In Both Languages</span></div>
      <div className="stat reveal"><b>~5 sec</b><span>Average Reply Time</span></div>
      <div className="stat reveal"><b>24/7</b><span>Answers Day &amp; Night</span></div>
    </div>
  </div>
</section>

{/* PROBLEM */}
<section>
  <div className="wrap split reveal">
    <div className="col-text">
      <span className="eyebrow">The Problem</span>
      <h2>Why Dubai Clinics Lose Patients On WhatsApp</h2>
      <p>In the UAE, patients book and reschedule over WhatsApp. They message to ask for an appointment, whether you take their insurance, your clinic timings, or where to park — often in Arabic, English, or a mix of both.</p>
      <p>When your reception is on calls and managing the waiting room, those messages sit unread. A patient who does not get a reply books another clinic nearby, and you lose the visit and the follow-ups.</p>
      <ul className="mini">
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Appointment requests missed at busy reception</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Arabic-speaking patients left waiting for a reply</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>No-shows with no reminder or confirmation</li>
      </ul>
    </div>
    <div className="illus">
      <div className="glow"></div>
      <div className="frame">
        <div style={{background:"#faf9ff",borderRadius:"16px",padding:"16px 14px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",padding:"0 4px"}}>
            <span style={{fontWeight:"700",fontSize:"14px",color:"var(--text)"}}>Missed while you worked</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"12px",fontWeight:"700",color:"#ef4444",background:"#fee2e2",padding:"4px 10px",borderRadius:"100px"}}><span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#ef4444"}}></span>3 unread</span>
          </div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#8b5cf6,#6d3aed)"}}>A</div><div className="mm-body"><div className="mm-top"><b>Ahmed</b><span>8:48 PM</span></div><p>Can I get an appointment with the GP tomorrow?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#a78bfa,#8b5cf6)"}}>س</div><div className="mm-body"><div className="mm-top"><b>سارة</b><span>9:15 PM</span></div><p>هل تقبلون تأميني؟ ووقت العيادة؟</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#93b4fd,#6d3aed)"}}>J</div><div className="mm-body"><div className="mm-top"><b>John</b><span>7:02 AM</span></div><p>🎤 Voice message · asking to reschedule</p></div><span className="mm-dot"></span></div>
          <div style={{marginTop:"12px",padding:"11px 13px",background:"#fff5f5",border:"1px solid #fee2e2",borderRadius:"11px",fontSize:"12.5px",color:"#b91c1c",textAlign:"center",fontWeight:"600"}}>Booked another clinic instead</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHAT IT HANDLES */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Features</span><h2>What NextReply Does For Your UAE Clinic</h2><p>It runs reception and booking in Arabic and English. It handles admin only — it never gives medical advice or diagnosis.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Books &amp; Reschedules Appointments</h3><p>Patients ask for a slot; NextReply checks availability, confirms the time and books it into your calendar — no reception staff has to stop what they are doing.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6 6-6M5 15h14"/></svg></div><h3>Answers In Arabic &amp; English</h3><p>Whether a patient writes in Arabic, English or both, NextReply replies naturally in the same language — no separate number and no extra setup.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>Handles Insurance &amp; Timing Questions</h3><p>Do you accept my insurance? What are your hours? Where do I park? NextReply answers your everyday reception questions from the details you provide.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="9"/></svg></div><h3>Collects Patient Details Safely</h3><p>It gathers the name, contact and reason for visit your team needs to prepare, then passes it to reception — without giving any clinical advice.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><h3>Cuts No-Shows With Reminders</h3><p>NextReply confirms and reminds patients before their appointment, reducing missed slots and gaps in the doctor&apos;s day.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div><h3>Escalates To Your Team</h3><p>Urgent cases or anything clinical are handed straight to your staff with full context, so a person always handles what matters.</p></div>
    </div>
  </div>
</section>

{/* BUILT FOR THE UAE */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>Built For The UAE</span><h2>Made For How Dubai Clinics Actually Run</h2><p>Localised for the way UAE patients message and book — not a generic bot.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><h3>Bilingual By Default</h3><p>Arabic and English out of the box, so residents and expat patients are answered in their own language, every time.</p></div>
      <div className="fc reveal"><h3>Official WhatsApp Business API</h3><p>Runs on the verified WhatsApp Business API with your own UAE number. We help you connect and get verified.</p></div>
      <div className="fc reveal"><h3>Admin Only, No Medical Advice</h3><p>NextReply handles booking and reception. It never diagnoses or advises — anything clinical goes straight to your team.</p></div>
      <div className="fc reveal"><h3>Simple AED Pricing</h3><p>Clear monthly plans in AED with no setup fee and no long contract. Cancel any time.</p></div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>How It Works</span><h2>Your Dubai Clinic Goes Live In Three Steps</h2><p>No technical skills needed. Set it up once and let it run.</p></div>
    <div className="steps">
      <div className="stp reveal"><div className="n">1</div><h3>Add Your Clinic</h3><p>Tell NextReply your services, doctors, hours, insurance list and common reception questions, in Arabic and English.</p></div>
      <div className="stp reveal"><div className="n">2</div><h3>Connect WhatsApp &amp; Calendar</h3><p>Link your existing UAE WhatsApp Business number and appointment calendar. Nothing changes for your patients.</p></div>
      <div className="stp reveal"><div className="n">3</div><h3>Watch Your Schedule Fill</h3><p>Patients chat as normal. NextReply answers, books appointments and shows everything in your dashboard.</p></div>
    </div>
    <div style={{textAlign:"center",marginTop:"44px"}} className="reveal"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal"><span className="eyebrow"><span className="pulse"></span>Loved By Clinic Managers</span><h2>Calmer Reception, Fuller Schedule</h2></div>
    <div className="tst-grid">
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Our reception was drowning in WhatsApp messages. NextReply now books appointments in Arabic and English so my staff can focus on patients in the clinic.</p><div className="who"><div className="av">FA</div><div><b>Dr. Fatima Al Habib</b><span>City Care Clinic, Dubai</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Insurance and timing questions never stop. NextReply answers them accurately and only escalates the clinical ones to us.</p><div className="who"><div className="av">OM</div><div><b>Omar Nasser</b><span>Manager, Wellness Medical Center, Sharjah</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Patients book after hours and they are ready for us in the morning. No-shows dropped once reminders went out automatically.</p><div className="who"><div className="av">LK</div><div><b>Layla Kamal</b><span>Front Desk Lead, Prime Health Clinic, Abu Dhabi</span></div></div></div>
    </div>
  </div>
</section>

{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing For Clinics</span><h2>Simple AED Plans For Your Clinic</h2><p>Every plan runs the same bilingual AI on your WhatsApp. Pick the appointment volume that fits — no setup fee.</p></div>
    <div className="price-grid">
      <div className="plan reveal"><div className="mesh"></div><div className="pi a"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><div className="pn">Starter</div><div className="pd">For single-doctor and small clinics.</div><div className="amt">AED 109<span>/mo</span></div><div className="dvd"></div><div className="incl">Services You Get</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Books &amp; reschedules appointments</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Replies in Arabic &amp; English</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Insurance &amp; timing questions</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 500 bookings / month</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      <div className="plan pop reveal"><div className="mesh"></div><span className="badge">Most Popular</span><div className="pi b"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/></svg></div><div className="pn">Pro</div><div className="pd">For busy multi-doctor clinics.</div><div className="amt">AED 219<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Starter, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 1500 bookings / month</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>No-show reminders</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Full patient chat history</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Priority support</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-light">Start Free</a></div>
      <div className="plan reveal"><div className="mesh"></div><div className="pi c"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div><div className="pn">Business</div><div className="pd">For clinic groups &amp; multiple branches.</div><div className="amt">AED 369<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Pro, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Unlimited bookings</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Send bookings to your CRM/EMR</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Connect Zapier, Make or Sheets</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Dedicated onboarding</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">Prices exclude 5% VAT. If you reach your monthly booking limit, your AI keeps replying and lets patients know your team will confirm shortly, so no booking is ever lost. Upgrade any time.</p>
  </div>
</section>

{/* FAQ */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">FAQ</span><h2>UAE Clinic Questions</h2></div>
    <div className="faq">
      <details className="fq reveal" open><summary>Does it reply to patients in Arabic and English?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. NextReply detects whether a patient writes in Arabic or English and replies in the same language automatically — no separate number or setup.</div></details>
      <details className="fq reveal"><summary>Does it give medical advice or diagnosis?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">No. NextReply handles reception and booking only. It never diagnoses or gives clinical advice — anything medical is passed straight to your team.</div></details>
      <details className="fq reveal"><summary>Do I need the WhatsApp Business API or a verified UAE number?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">NextReply runs on the official WhatsApp Business API using your own UAE number. During setup we guide you through connecting and verifying it.</div></details>
      <details className="fq reveal"><summary>Can it handle insurance and timing questions?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. You add your accepted insurers, hours and location during setup, and NextReply answers those reception questions accurately and instantly.</div></details>
      <details className="fq reveal"><summary>How quickly can my Dubai clinic go live?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Most clinics are live within minutes. Create your account, add your services and hours, connect WhatsApp and your calendar, and you are ready to take bookings in Arabic and English.</div></details>
    </div>
  </div>
</section>

{/* RELATED */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal" style={{marginBottom:"20px"}}><h2>Related Industries</h2></div>
    <div className="related reveal"><a href="/industries/dentists">Dentists</a><a href="/industries/aesthetic-clinics">Aesthetic Clinics</a><a href="/industries/veterinary">Veterinary Clinics</a><a href="/industries">All Industries</a></div>
  </div>
</section>

{/* CTA */}
<section style={{paddingTop:"0"}}>
  <div className="cta-wrap reveal">
    <div className="cta">
      <div className="dotbg"></div><div className="glow g1"></div>
      <h2>Fill Your Schedule In Dubai, Day And Night</h2>
      <p>Let NextReply answer every patient on WhatsApp in Arabic and English, and book appointments around the clock. Start free, no card needed.</p>
      <a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}