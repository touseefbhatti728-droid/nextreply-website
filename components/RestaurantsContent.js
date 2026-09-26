"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RestaurantsContent() {
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
      <span className="chip"><span className="pulse"></span>WhatsApp AI for UAE Restaurants</span>
      <h1>WhatsApp Booking Bot for Restaurants in <span className="grad-text">Dubai &amp; the UAE</span></h1>
      <p className="sub">NextReply is a bilingual Arabic and English WhatsApp assistant for UAE restaurants. It answers every guest, takes table reservations and pickup orders, and cuts no-shows — 24/7, on your own WhatsApp Business number, even during the dinner rush.</p>
      <div className="hero-cta"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a><a href="/connect-whatsapp" className="btn btn-light btn-lg">See How It Works</a></div>
      <div className="trust-badges">
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Arabic &amp; English</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Official WhatsApp Business API</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No Setup Fees</span>
      </div>
    </div>
    <div className="mock">
      <div className="mock-top"><div className="mock-av">N</div><div><div className="nm">The Olive Table · Dubai</div><div className="st">online</div></div></div>
      <div className="mock-body">
        <div className="bub them">مرحبا، عندكم طاولة لأربعة أشخاص الليلة؟ 🍽️</div>
        <div className="bub me">أهلاً وسهلاً! متوفر ٧:٠٠ مساءً أو ٨:٣٠ مساءً لأربعة أشخاص. أي وقت يناسبك؟</div>
        <div className="bub them">7 PM perfect, name is Sarah</div>
        <div className="bub me">All set, Sarah! Table for 4 tonight at 7:00 PM. See you soon 🍷</div>
        <div className="ref"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Booked · BK-1047</div>
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
      <h2>Why Dubai Restaurants Lose Guests On WhatsApp</h2>
      <p>In the UAE, WhatsApp is where diners reach out. Residents and tourists message to ask if you have a table tonight, whether a dish is halal or gluten-free, what time you close during Ramadan, or if they can order for pickup — often in Arabic, English, or a mix of both.</p>
      <p>When your team is running a full floor in Dubai Marina, JBR or Downtown, those messages sit unread. A guest who does not hear back in minutes simply books the restaurant next door, and you lose a full party — and a repeat customer.</p>
      <ul className="mini">
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Reservation requests missed during peak service</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Guests messaging in Arabic left waiting for a reply</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Late-night and no-show bookings with no follow-up</li>
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
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#8b5cf6,#6d3aed)"}}>S</div><div className="mm-body"><div className="mm-top"><b>Sarah</b><span>10:48 PM</span></div><p>Do you have a table for 6 on Friday night?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#a78bfa,#8b5cf6)"}}>ع</div><div className="mm-body"><div className="mm-top"><b>عائشة</b><span>11:15 PM</span></div><p>الأكل حلال؟ وعندكم خيارات نباتية؟</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#93b4fd,#6d3aed)"}}>M</div><div className="mm-body"><div className="mm-top"><b>Maria</b><span>7:02 AM</span></div><p>🎤 Voice message · asking about pickup time</p></div><span className="mm-dot"></span></div>
          <div style={{marginTop:"12px",padding:"11px 13px",background:"#fff5f5",border:"1px solid #fee2e2",borderRadius:"11px",fontSize:"12.5px",color:"#b91c1c",textAlign:"center",fontWeight:"600"}}>Booked another restaurant instead</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHAT IT HANDLES */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Features</span><h2>What NextReply Does For Your UAE Restaurant</h2><p>From the first message to a confirmed table, it runs front-of-house enquiries in Arabic and English, the way your best host would.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="9" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg></div><h3>Takes Table Reservations</h3><p>Guests ask for a table tonight or the weekend. NextReply checks availability, confirms party size and time, and books it straight into your calendar — no host has to stop mid-service.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM5 10v1a7 7 0 0 0 14 0v-1"/></svg></div><h3>Answers In Arabic &amp; English</h3><p>Whether a guest writes in Arabic, English or switches between them, NextReply replies naturally in the same language — no extra setup, no separate number.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 7h10c0-2 2-4 2-7a7 7 0 0 0-7-7z"/></svg></div><h3>Handles Menu, Halal &amp; Allergy Questions</h3><p>Is it halal? Gluten-free? Any vegan mains? NextReply answers from your menu details instantly, so guests get accurate answers without tying up your team.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Manages Orders, Pickup &amp; Ramadan Hours</h3><p>Collection times, delivery timing, iftar and suhoor hours during Ramadan — NextReply keeps guests informed and takes pickup orders while your floor stays busy.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div><h3>Escalates To Your Team</h3><p>Large parties, private events or special requests are handed to your team with the full chat, so nothing gets lost during a busy Dubai weekend.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6 6-6M5 15h14"/></svg></div><h3>Cuts No-Shows With Reminders</h3><p>NextReply confirms and gently reminds guests before their booking, reducing empty tables from no-shows on your busiest nights.</p></div>
    </div>
  </div>
</section>

{/* BUILT FOR THE UAE */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>Built For The UAE</span><h2>Made For How Dubai Restaurants Actually Run</h2><p>Localised for the way UAE diners message, order and book — not a generic bot.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><h3>Bilingual By Default</h3><p>Arabic and English out of the box, so both residents and tourists are answered in their own language, every time.</p></div>
      <div className="fc reveal"><h3>Official WhatsApp Business API</h3><p>Runs on the verified WhatsApp Business API with your own UAE number. We help you connect and get verified.</p></div>
      <div className="fc reveal"><h3>Gulf Timings &amp; Ramadan</h3><p>Answers late nights, Friday–Saturday weekends and adjusted iftar/suhoor hours, so no enquiry waits until morning.</p></div>
      <div className="fc reveal"><h3>Simple AED Pricing</h3><p>Clear monthly plans in AED with no setup fee and no long contract. Cancel any time.</p></div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>How It Works</span><h2>Your Dubai Restaurant Goes Live In Three Steps</h2><p>No technical skills needed. Set it up once and let it run.</p></div>
    <div className="steps">
      <div className="stp reveal"><div className="n">1</div><h3>Add Your Restaurant</h3><p>Tell NextReply your menu, halal and dietary details, hours and the questions guests ask most, in Arabic and English.</p></div>
      <div className="stp reveal"><div className="n">2</div><h3>Connect WhatsApp &amp; Calendar</h3><p>Link your existing UAE WhatsApp Business number and reservations calendar. Nothing changes for your guests.</p></div>
      <div className="stp reveal"><div className="n">3</div><h3>Watch Your Tables Fill</h3><p>Guests chat as normal. NextReply answers, books tables and shows every reservation in your dashboard.</p></div>
    </div>
    <div style={{textAlign:"center",marginTop:"44px"}} className="reveal"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal"><span className="eyebrow"><span className="pulse"></span>Loved By Restaurant Owners</span><h2>Fewer Missed Messages, Fuller Tables</h2></div>
    <div className="tst-grid">
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">During service nobody could get to the phone, so we lost bookings. Now NextReply takes reservations in Arabic and English while we run the floor, and our weekends are packed.</p><div className="who"><div className="av">MR</div><div><b>Marco Rossi</b><span>Owner, The Olive Table, Dubai</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Halal and allergy questions used to interrupt service constantly. NextReply answers them accurately in both languages so my team stays on the floor.</p><div className="who"><div className="av">SM</div><div><b>Sofia Marino</b><span>Manager, Trattoria Nova, JBR</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">It takes reservations at midnight when we are closed, and they are waiting for us in the morning. Genuinely more covers every week.</p><div className="who"><div className="av">JW</div><div><b>James Whitfield</b><span>Owner, Harbour Grill, Abu Dhabi</span></div></div></div>
    </div>
  </div>
</section>

{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing</span><h2>Simple AED Plans</h2><p>Every plan runs the same bilingual AI on your WhatsApp. Pick the volume that fits — no setup fee.</p></div>
    <div className="price-grid">

      <div className="plan reveal">
        <div className="mesh"></div>
        <div className="p-icon a"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        <div className="p-name">Starter</div>
        <div className="p-tag2">For smaller restaurants that want every message answered.</div>
        <div className="p-cost"><span className="amt">AED 109</span><span className="per">/mo</span></div>
        <div className="divide"></div><div className="incl">Services You Get</div>
        <ul className="feat"><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Takes table reservations</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>AI receptionist replying 24/7 on WhatsApp</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Replies in Arabic &amp; English</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Understands voice notes &amp; photos</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Books into Google Calendar with a reference</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Hands the chat to you when it is unsure</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 500 bookings / month</li></ul>
        <div className="p-btn"><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      </div>

      <div className="plan pop reveal">
        <div className="mesh"></div>
        <span className="badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21 8 14 2 9.4h7.6z"/></svg>Most Popular</span>
        <div className="p-icon b"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/><path d="M18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7z"/></svg></div>
        <div className="p-name">Pro</div>
        <div className="p-tag2">For busy restaurants that never want to miss a booking.</div>
        <div className="p-cost pop"><span className="amt">AED 219</span><span className="per">/mo</span></div>
        <div className="divide"></div><div className="incl">Everything In Starter, Plus</div>
        <ul className="feat"><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 1500 bookings / month</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>No-show reminders</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Full conversation history in your dashboard</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Read every past chat with any customer</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Priority support</li></ul>
        <div className="p-btn"><a href="https://app.nextreply.io/signup" className="btn btn-light">Start Free</a></div>
      </div>

      <div className="plan reveal">
        <div className="mesh"></div>
        <div className="p-icon c"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div>
        <div className="p-name">Business</div>
        <div className="p-tag2">For growing restaurants with high volume and their own tools.</div>
        <div className="p-cost"><span className="amt">AED 369</span><span className="per">/mo</span></div>
        <div className="divide"></div><div className="incl">Everything In Pro, Plus</div>
        <ul className="feat"><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Unlimited bookings</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Send every booking to your CRM by webhook</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Connect Zapier, Make or Sheets</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Test your webhook from the dashboard</li><li><span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Dedicated onboarding to get you set up</li></ul>
        <div className="p-btn"><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      </div>

    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">Prices exclude 5% VAT. If you reach your monthly limit, your AI keeps replying and lets customers know your team will confirm shortly, so nothing is ever lost. Upgrade any time.</p>
  </div>
</section>

{/* FAQ */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">FAQ</span><h2>UAE Restaurant Questions</h2></div>
    <div className="faq">
      <details className="fq reveal" open><summary>Does it reply to guests in Arabic and English?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. NextReply detects whether a guest writes in Arabic or English and replies in the same language automatically — no separate number or setup. It even handles guests who switch between both mid-conversation.</div></details>
      <details className="fq reveal"><summary>Do I need the WhatsApp Business API or a verified UAE number?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">NextReply runs on the official WhatsApp Business API using your own UAE number. During setup we guide you through connecting and verifying it, so you stay fully compliant with WhatsApp&apos;s rules.</div></details>
      <details className="fq reveal"><summary>Can it handle Ramadan hours and changing timings?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. You can update your hours any time — including iftar and suhoor timings during Ramadan — and NextReply gives guests the correct information instantly.</div></details>
      <details className="fq reveal"><summary>Does it take pickup and delivery orders too, not just reservations?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. Alongside table reservations, it answers pickup and delivery questions, shares timings, and passes order details to your team so nothing is missed during the rush.</div></details>
      <details className="fq reveal"><summary>How quickly can a Dubai restaurant go live?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Most restaurants are live within minutes. Create your account, add your menu and hours, connect WhatsApp and your calendar, and you are ready to take reservations in Arabic and English.</div></details>
    </div>
  </div>
</section>

{/* RELATED */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal" style={{marginBottom:"20px"}}><h2>Related Industries</h2></div>
    <div className="related reveal"><a href="/industries/hotels">Hotels &amp; B&amp;Bs</a><a href="/industries/salons-spas">Salons &amp; Spas</a><a href="/industries/gyms">Gyms &amp; Fitness</a><a href="/industries">All Industries</a></div>
  </div>
</section>

{/* CTA */}
<section style={{paddingTop:"0"}}>
  <div className="cta-wrap reveal">
    <div className="cta">
      <div className="dotbg"></div><div className="glow g1"></div>
      <h2>Fill Every Table In Dubai, Even During The Rush</h2>
      <p>Let NextReply answer every guest on WhatsApp in Arabic and English, and book your tables day and night. Start free, no card needed.</p>
      <a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}