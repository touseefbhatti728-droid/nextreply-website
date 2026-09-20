"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SalonsContent() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
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
      <span className="chip"><span className="pulse"></span>For Salons &amp; Spas</span>
      <h1>The WhatsApp AI Receptionist Built For <span className="grad-text">Salons &amp; Spas</span></h1>
      <p className="sub">Your chair is full and your phone keeps buzzing. NextReply answers every client on WhatsApp, understands the style photos and voice notes they send, and books them into your calendar, even after you have closed for the night.</p>
      <div className="hero-cta"><a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-primary btn-lg">Start Free</a><a href="/connect-whatsapp" className="btn btn-light btn-lg">See How It Works</a></div>
      <div className="trust-badges">
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No Setup Fees</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Cancel Anytime</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Uses Your Own Number</span>
      </div>
    </div>
    <div className="mock">
      <div className="mock-top"><div className="mock-av">N</div><div><div className="nm">Luxe Hair &amp; Spa</div><div className="st">online</div></div></div>
      <div className="mock-body">
        <div className="bub them">Hi, can I get a balayage this Saturday? 💇‍♀️</div>
        <div className="bub voice"><span className="play"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span className="wave"><i style={{height:"9px"}}></i><i style={{height:"16px"}}></i><i style={{height:"12px"}}></i><i style={{height:"19px"}}></i><i style={{height:"10px"}}></i></span><span className="dur">0:06</span></div>
        <div className="bub me">Love that look! 😍 Saturday I have 1:00 PM or 4:30 PM with our colour specialist. Which suits you?</div>
        <div className="bub them">4:30 works</div>
        <div className="bub me">Perfect. Can I get your name to lock it in?</div>
        <div className="bub them">Sarah</div>
        <div className="bub me">All set, Sarah! Balayage, Saturday 4:30 PM ✨</div>
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
      <div className="stat reveal"><b>98%</b><span>Message Open Rate</span></div>
      <div className="stat reveal"><b>~5 sec</b><span>Average Reply Time</span></div>
      <div className="stat reveal"><b>24/7</b><span>Automated Replies</span></div>
    </div>
  </div>
</section>

{/* PROBLEM (with illustration) */}
<section>
  <div className="wrap split reveal">
    <div className="col-text">
      <span className="eyebrow">The Problem</span>
      <h2>Why Salons Lose Bookings On WhatsApp</h2>
      <p>For most salons and spas, WhatsApp is where clients actually reach out. They send a photo of the colour they saw on Instagram, a voice note between meetings, or a quick "any slots today?" at 10 PM.</p>
      <p>When you are mid-cut, mid-treatment, or already home, those messages sit unread. A client who does not hear back in a few minutes simply books somewhere else, and you never even knew they asked.</p>
      <ul className="mini">
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Missed late-night and weekend enquiries</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Voice notes forgotten mid-appointment</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>The same price questions, fifty times a day</li>
      </ul>
    </div>
    <div className="illus">
      <div className="glow"></div>
      <div className="frame">
        <div style={{background:"#faf9ff",borderRadius:"16px",padding:"16px 14px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",padding:"0 4px"}}>
            <span style={{fontFamily:"'Sora',sans-serif",fontWeight:"700",fontSize:"14px",color:"var(--text)"}}>Missed while you worked</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"12px",fontWeight:"700",color:"#ef4444",background:"#fee2e2",padding:"4px 10px",borderRadius:"100px"}}><span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#ef4444"}}></span>3 unread</span>
          </div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#8b5cf6,#6d3aed)"}}>S</div><div className="mm-body"><div className="mm-top"><b>Sarah</b><span>10:48 PM</span></div><p>Hi! Any slots for a balayage this Saturday? 💇‍♀️</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#a78bfa,#8b5cf6)"}}>A</div><div className="mm-body"><div className="mm-top"><b>Aisha</b><span>11:15 PM</span></div><p>📷 Sent a photo · is this colour possible?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#93b4fd,#6d3aed)"}}>M</div><div className="mm-body"><div className="mm-top"><b>Maria</b><span>7:02 AM</span></div><p>🎤 Voice message (0:14)</p></div><span className="mm-dot"></span></div>
          <div style={{marginTop:"12px",padding:"11px 13px",background:"#fff5f5",border:"1px solid #fee2e2",borderRadius:"11px",fontSize:"12.5px",color:"#b91c1c",textAlign:"center",fontWeight:"600"}}>Booked elsewhere by morning</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHAT IT HANDLES */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Features</span><h2>What NextReply Handles For Your Salon</h2><p>From the first message to a confirmed booking, it runs the whole conversation the way your front desk would.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="9" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg></div><h3>Reads Style Photos</h3><p>A client sends a photo of the cut, colour or nails they want. NextReply looks at it, responds about what it sees, and matches it to the right service.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM5 10v1a7 7 0 0 0 14 0v-1"/></svg></div><h3>Answers Voice Notes</h3><p>Busy clients would rather talk than type. Voice notes are transcribed and answered in seconds, so nobody waits and nothing slips through.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Books The Right Slot</h3><p>It offers times that are actually free, confirms the service, and drops the appointment into your Google Calendar with a reference number.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h3>Answers Price &amp; Service FAQs</h3><p>How long does a full colour take? Do you do keratin? What are your prices? It answers from the details you set, instantly and consistently.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div><h3>Hands Off To You</h3><p>If a client needs a personal touch or asks something unusual, it passes the chat to you with full context, so you never lose the thread.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6 6-6M5 15h14"/></svg></div><h3>Speaks Their Language</h3><p>Every reply comes back in the language your client wrote in, so a mixed clientele always feels understood.</p></div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>How It Works</span><h2>Your Salon Goes Live In Three Steps</h2><p>No technical skills needed. Set it up once and let it run.</p></div>
    <div className="steps">
      <div className="stp reveal"><div className="n">1</div><h3>Add Your Salon</h3><p>Tell NextReply your services, prices, hours and the questions clients ask most. This becomes your AI's brain.</p></div>
      <div className="stp reveal"><div className="n">2</div><h3>Connect WhatsApp &amp; Calendar</h3><p>Link your existing WhatsApp Business number and Google Calendar. Nothing changes for your clients.</p></div>
      <div className="stp reveal"><div className="n">3</div><h3>Watch Chairs Fill</h3><p>Clients chat as normal. NextReply answers, books and shows every appointment in your dashboard.</p></div>
    </div>
    <div style={{textAlign:"center",marginTop:"44px"}} className="reveal"><a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-primary btn-lg">Start Free</a></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal"><span className="eyebrow"><span className="pulse"></span>Loved By Salon Owners</span><h2>Calmer Front Desks, Fuller Chairs</h2></div>
    <div className="tst-grid">
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Clients used to message overnight and book elsewhere by morning. Now NextReply replies instantly and my Saturdays are fully booked.</p><div className="who"><div className="av">EC</div><div><b>Emily Carter</b><span>Owner, Luxe Hair Studio</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">The photo understanding is the game changer. A client sends the colour they want and it just handles the whole conversation.</p><div className="who"><div className="av">OM</div><div><b>Olivia Morgan</b><span>Colour Specialist, Bloom Spa</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">I stopped dropping my scissors to check my phone. It books while I work and everything shows up in my calendar.</p><div className="who"><div className="av">SB</div><div><b>Sophie Bennett</b><span>Owner, The Style Room</span></div></div></div>
    </div>
  </div>
</section>

{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing For Salons</span><h2>Plans That Fit Your Salon</h2><p>Every plan runs the same AI receptionist for your salon. Pick the booking volume that fits.</p></div>
    <div className="price-grid">
      <div className="plan reveal"><div className="mesh"></div><div className="pi a"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div className="pn">Starter</div><div className="pd">For independent stylists and small studios.</div><div className="amt">$29<span>/mo</span></div><div className="dvd"></div><div className="incl">Services You Get</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Books cuts, colour &amp; treatments</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Reads client style photos</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Voice notes &amp; price FAQs</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 50 bookings / month</li></ul><a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-ghost">Start Free</a></div>
      <div className="plan pop reveal"><div className="mesh"></div><span className="badge">Most Popular</span><div className="pi b"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/></svg></div><div className="pn">Pro</div><div className="pd">For busy salons with a full book.</div><div className="amt">$59<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Starter, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 200 bookings / month</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Full client chat history</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Read every past chat</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Priority support</li></ul><a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-light">Start Free</a></div>
      <div className="plan reveal"><div className="mesh"></div><div className="pi c"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div><div className="pn">Business</div><div className="pd">For multi-chair salons &amp; spa groups.</div><div className="amt">$99<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Pro, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Unlimited bookings</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Send bookings to your CRM</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Connect Zapier, Make or Sheets</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Dedicated onboarding</li></ul><a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-ghost">Start Free</a></div>
    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">If you reach your monthly booking limit, your AI keeps replying and lets clients know your team will confirm shortly, so no booking is ever lost. Upgrade any time.</p>
  </div>
</section>

{/* FAQ */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">FAQ</span><h2>Salon &amp; Spa Questions</h2></div>
    <div className="faq">
      <details className="fq reveal" open><summary>Can it really understand a photo of a hairstyle?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. When a client sends a photo of a cut, colour or nail design, NextReply looks at it and responds about what it sees, then guides the client toward the matching service and a booking.</div></details>
      <details className="fq reveal"><summary>Can it book by service and time?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">You describe your services, durations and hours during setup, and NextReply offers times that are free, confirms the service, and books it straight into your connected calendar.</div></details>
      <details className="fq reveal"><summary>Do I need to change my salon number?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">No. NextReply connects to your existing WhatsApp Business number, so your clients keep messaging the same place they always have.</div></details>
      <details className="fq reveal"><summary>What if a client asks something unusual?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">If it is unsure, it hands the conversation to you with the full context, so you or your team can step in whenever a personal touch is needed.</div></details>
      <details className="fq reveal"><summary>How quickly can my salon go live?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Most salons are live within minutes. Create your account, add your services and hours, connect WhatsApp and your calendar, and you are ready to take bookings.</div></details>
    </div>
  </div>
</section>

{/* RELATED */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal" style={{marginBottom:"20px"}}><h2>Related Industries</h2></div>
    <div className="related reveal"><a href="/industries/aesthetic-clinics">Aesthetic Clinics</a><a href="/industries/dentists">Dentists</a><a href="/industries/clinics">Clinics &amp; Doctors</a><a href="/industries">All Industries</a></div>
  </div>
</section>

{/* CTA */}
<section style={{paddingTop:"0"}}>
  <div className="cta-wrap reveal">
    <div className="cta">
      <div className="dotbg"></div><div className="glow g1"></div>
      <h2>Fill Your Chairs While You Work</h2>
      <p>Let NextReply answer every client on WhatsApp and book them in, day and night. Start free, no card needed.</p>
      <a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-primary btn-lg">Start Free</a>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}