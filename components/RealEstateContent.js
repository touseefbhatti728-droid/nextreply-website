"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RealEstateContent() {
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
      <span className="chip"><span className="pulse"></span>WhatsApp AI for UAE Real Estate</span>
      <h1>WhatsApp Lead Bot for Real Estate in <span className="grad-text">Dubai &amp; the UAE</span></h1>
      <p className="sub">NextReply is a bilingual Arabic and English WhatsApp assistant for UAE property agents. It qualifies Bayut and Property Finder leads, books viewings, and answers listing questions — 24/7, on your own WhatsApp Business number, so no enquiry goes cold.</p>
      <div className="hero-cta"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a><a href="/connect-whatsapp" className="btn btn-light btn-lg">See How It Works</a></div>
      <div className="trust-badges">
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Arabic &amp; English</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Official WhatsApp Business API</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No Setup Fees</span>
      </div>
    </div>
    <div className="mock">
      <div className="mock-top"><div className="mock-av">N</div><div><div className="nm">Skyline Properties · Dubai</div><div className="st">online</div></div></div>
      <div className="mock-body">
        <div className="bub them">Hi, is the 2BR in Dubai Marina still available?</div>
        <div className="bub me">Yes it is! It is AED 130k/year, 2 bed, 2 bath, sea view. What is your budget and move-in date, so I can shortlist the best options?</div>
        <div className="bub them">Around 120-140k, moving next month</div>
        <div className="bub me">Perfect. I have 3 options in Marina in that range. Can I book you a viewing this Saturday at 5 PM?</div>
        <div className="ref"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Viewing Booked · VW-1180</div>
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
      <h2>Why Dubai Agents Lose Leads On WhatsApp</h2>
      <p>In the UAE, property leads come in over WhatsApp from Bayut, Property Finder and your own listings. Buyers and tenants ask if a unit is still available, the rent, the area and whether they can view it — often in Arabic, English, or both.</p>
      <p>When you are in a viewing or driving between properties, those messages sit unread. A lead who waits more than a few minutes has already messaged three other agents, and the deal goes to whoever replied first.</p>
      <ul className="mini">
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Portal leads going cold before you reply</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Arabic-speaking clients left waiting for a reply</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>No time to qualify budget and requirements</li>
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
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#8b5cf6,#6d3aed)"}}>A</div><div className="mm-body"><div className="mm-top"><b>Andrei</b><span>8:48 PM</span></div><p>Is the JVC studio still available for rent?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#a78bfa,#8b5cf6)"}}>م</div><div className="mm-body"><div className="mm-top"><b>محمد</b><span>9:15 PM</span></div><p>عندكم شقة غرفتين في مارينا؟ وكم الإيجار؟</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#93b4fd,#6d3aed)"}}>E</div><div className="mm-body"><div className="mm-top"><b>Elena</b><span>7:02 AM</span></div><p>🎤 Voice message · wants a viewing this week</p></div><span className="mm-dot"></span></div>
          <div style={{marginTop:"12px",padding:"11px 13px",background:"#fff5f5",border:"1px solid #fee2e2",borderRadius:"11px",fontSize:"12.5px",color:"#b91c1c",textAlign:"center",fontWeight:"600"}}>Went with another agent</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHAT IT HANDLES */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Features</span><h2>What NextReply Does For Your UAE Agency</h2><p>From the first portal lead to a booked viewing, it works your WhatsApp in Arabic and English, the way your best agent would.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 9h.01M14 9h.01M10 13h.01M14 13h.01"/></svg></div><h3>Qualifies Leads Instantly</h3><p>NextReply asks budget, area, bedrooms and move-in date the moment a lead messages, so you only spend time on serious, ready buyers and tenants.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Books Viewings Into Your Calendar</h3><p>Once a lead is qualified, it offers times and books the viewing straight into your calendar, so your diary fills with real appointments.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6 6-6M5 15h14"/></svg></div><h3>Answers In Arabic &amp; English</h3><p>Whether a client writes in Arabic, English or both, NextReply replies naturally in the same language — no separate number and no extra setup.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM5 10v1a7 7 0 0 0 14 0v-1"/></svg></div><h3>Answers Listing Questions</h3><p>Rent, price, availability, chiller, parking, handover — NextReply answers from your listing details instantly, at any hour.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><h3>Follows Up Automatically</h3><p>It reminds leads about viewings and nudges quiet conversations, so warm leads do not slip away while you are with other clients.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div><h3>Hands Hot Leads To You</h3><p>When a lead is ready to move, NextReply passes the full chat and requirements to you, so you step in at exactly the right moment.</p></div>
    </div>
  </div>
</section>

{/* BUILT FOR THE UAE */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>Built For The UAE</span><h2>Made For How Dubai Agents Actually Work</h2><p>Localised for UAE property portals, buyers and tenants — not a generic bot.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><h3>Bilingual By Default</h3><p>Arabic and English out of the box, so GCC buyers and expat tenants are answered in their own language, every time.</p></div>
      <div className="fc reveal"><h3>Official WhatsApp Business API</h3><p>Runs on the verified WhatsApp Business API with your own UAE number. We help you connect and get verified.</p></div>
      <div className="fc reveal"><h3>Built For Portal Leads</h3><p>Handles the flood of Bayut and Property Finder enquiries fast, qualifying and booking before your competitors reply.</p></div>
      <div className="fc reveal"><h3>Simple AED Pricing</h3><p>Clear monthly plans in AED with no setup fee and no long contract. Cancel any time.</p></div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>How It Works</span><h2>Your Dubai Agency Goes Live In Three Steps</h2><p>No technical skills needed. Set it up once and let it run.</p></div>
    <div className="steps">
      <div className="stp reveal"><div className="n">1</div><h3>Add Your Listings</h3><p>Tell NextReply your available units, prices, areas and the questions leads ask most, in Arabic and English.</p></div>
      <div className="stp reveal"><div className="n">2</div><h3>Connect WhatsApp &amp; Calendar</h3><p>Link your existing UAE WhatsApp Business number and calendar. Nothing changes for your leads.</p></div>
      <div className="stp reveal"><div className="n">3</div><h3>Watch Viewings Book Themselves</h3><p>Leads chat as normal. NextReply qualifies, books viewings and shows every lead in your dashboard.</p></div>
    </div>
    <div style={{textAlign:"center",marginTop:"44px"}} className="reveal"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal"><span className="eyebrow"><span className="pulse"></span>Loved By Property Agents</span><h2>Faster Replies, More Viewings</h2></div>
    <div className="tst-grid">
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Portal leads used to go cold while I was in viewings. NextReply now qualifies and books them in Arabic and English before my competitors even reply.</p><div className="who"><div className="av">SA</div><div><b>Sami Al Farsi</b><span>Agent, Skyline Properties, Dubai</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">It asks budget and area upfront, so I only spend time on serious clients. My viewing calendar is finally full of real appointments.</p><div className="who"><div className="av">DP</div><div><b>Daniela Petrova</b><span>Manager, Prime Estates, Business Bay</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Leads message at midnight and NextReply books their viewing while I sleep. Response time is now instant, day or night.</p><div className="who"><div className="av">FH</div><div><b>Faisal Hamdan</b><span>Owner, Horizon Realty, Abu Dhabi</span></div></div></div>
    </div>
  </div>
</section>

{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing For Agents</span><h2>Simple AED Plans For Your Agency</h2><p>Every plan runs the same bilingual AI on your WhatsApp. Pick the lead volume that fits — no setup fee.</p></div>
    <div className="price-grid">
      <div className="plan reveal"><div className="mesh"></div><div className="pi a"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M6 21V7l6-4 6 4v14"/></svg></div><div className="pn">Starter</div><div className="pd">For solo agents and small teams.</div><div className="amt">AED 109<span>/mo</span></div><div className="dvd"></div><div className="incl">Services You Get</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Qualifies leads instantly</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Replies in Arabic &amp; English</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Books viewings into your calendar</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 500 leads / month</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      <div className="plan pop reveal"><div className="mesh"></div><span className="badge">Most Popular</span><div className="pi b"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/></svg></div><div className="pn">Pro</div><div className="pd">For busy agencies with high lead flow.</div><div className="amt">AED 219<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Starter, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 1500 leads / month</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Automatic lead follow-ups</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Full lead chat history</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Priority support</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-light">Start Free</a></div>
      <div className="plan reveal"><div className="mesh"></div><div className="pi c"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div><div className="pn">Business</div><div className="pd">For brokerages &amp; multiple teams.</div><div className="amt">AED 369<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Pro, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Unlimited leads</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Send leads to your CRM</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Connect Zapier, Make or Sheets</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Dedicated onboarding</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">Prices exclude 5% VAT. If you reach your monthly lead limit, your AI keeps replying and lets clients know your team will follow up shortly, so no lead is ever lost. Upgrade any time.</p>
  </div>
</section>

{/* FAQ */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">FAQ</span><h2>UAE Real Estate Questions</h2></div>
    <div className="faq">
      <details className="fq reveal" open><summary>Can it qualify leads from Bayut and Property Finder?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. When a lead messages your WhatsApp from any portal or listing, NextReply asks budget, area, bedrooms and move-in date, then books a viewing or hands a hot lead to you.</div></details>
      <details className="fq reveal"><summary>Does it reply to clients in Arabic and English?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. NextReply detects the client&apos;s language and replies in Arabic or English automatically — no separate number or setup.</div></details>
      <details className="fq reveal"><summary>Do I need the WhatsApp Business API or a verified UAE number?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">NextReply runs on the official WhatsApp Business API using your own UAE number. During setup we guide you through connecting and verifying it.</div></details>
      <details className="fq reveal"><summary>Can it send leads to my CRM?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes, on the Business plan. NextReply can pass qualified leads to your CRM or tools like Zapier, Make and Google Sheets.</div></details>
      <details className="fq reveal"><summary>How quickly can my agency go live?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Most agencies are live within minutes. Create your account, add your listings, connect WhatsApp and your calendar, and you are ready to qualify leads in Arabic and English.</div></details>
    </div>
  </div>
</section>

{/* RELATED */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal" style={{marginBottom:"20px"}}><h2>Related Industries</h2></div>
    <div className="related reveal"><a href="/industries/hotels">Hotels &amp; B&amp;Bs</a><a href="/industries/home-services">Home Services</a><a href="/industries/law-firms">Law Firms</a><a href="/industries">All Industries</a></div>
  </div>
</section>

{/* CTA */}
<section style={{paddingTop:"0"}}>
  <div className="cta-wrap reveal">
    <div className="cta">
      <div className="dotbg"></div><div className="glow g1"></div>
      <h2>Be The First To Reply, Every Time</h2>
      <p>Let NextReply qualify every lead on WhatsApp in Arabic and English and book viewings, day and night. Start free, no card needed.</p>
      <a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}