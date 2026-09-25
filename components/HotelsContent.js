"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HotelsContent() {
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
      <span className="chip"><span className="pulse"></span>For Hotels & B&Bs</span>
      <h1>The AI WhatsApp Concierge Built For <span className="grad-text">Hotels &amp; B&amp;Bs</span></h1>
      <p className="sub">Built for Dubai and the UAE. Guests message about rooms, check-in and local tips at every hour. NextReply answers every enquiry on WhatsApp, shares availability, handles booking questions, and gives guests instant concierge help, day and night.</p>
      <div className="hero-cta"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a><a href="/connect-whatsapp" className="btn btn-light btn-lg">See How It Works</a></div>
      <div className="trust-badges">
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No Setup Fees</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Cancel Anytime</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Uses Your Own Number</span><span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Arabic + English Support</span>
      </div>
    </div>
    <div className="mock">
      <div className="mock-top"><div className="mock-av">N</div><div><div className="nm">The Harbour Inn</div><div className="st">online</div></div></div>
      <div className="mock-body">
        <div className="bub them">Hi, do you have a double room for this weekend? 🏨</div>
        <div className="bub voice"><span className="play"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span className="wave"><i style={{height:"9px"}}></i><i style={{height:"16px"}}></i><i style={{height:"12px"}}></i><i style={{height:"19px"}}></i><i style={{height:"10px"}}></i></span><span className="dur">0:06</span></div>
        <div className="bub me">We do! A double is available Friday and Saturday at $140/night. Would you like me to hold it for you?</div>
        <div className="bub them">Yes please</div>
        <div className="bub me">Wonderful. Can I get your name for the reservation?</div>
        <div className="bub them">Sarah</div>
        <div className="bub me">All set, Sarah! Double room, Fri & Sat. We look forward to hosting you 🛎️</div>
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
      <div className="stat reveal"><b>AR + EN</b><span>Arabic &amp; English</span></div>
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
      <h2>Why Hotels Lose Guests On WhatsApp</h2>
      <p>For most hotels and B&Bs, WhatsApp is where guests reach out. They ask about room availability, rates, check-in times, parking, or send a quick "any rooms this weekend?" late at night from another timezone.</p>
      <p>When your front desk is busy or it is the middle of the night, those messages sit unread. A guest who does not hear back books another property, and you lose the stay entirely.</p>
      <ul className="mini">
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Missed booking enquiries at all hours</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Front desk too busy to reply</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>The same questions: rates, check-in, parking</li>
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
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#8b5cf6,#6d3aed)"}}>S</div><div className="mm-body"><div className="mm-top"><b>Sarah</b><span>10:48 PM</span></div><p>Do you have a room for two nights next week?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#a78bfa,#8b5cf6)"}}>A</div><div className="mm-body"><div className="mm-top"><b>Aisha</b><span>11:15 PM</span></div><p>What time is check-in and is parking free?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#93b4fd,#6d3aed)"}}>M</div><div className="mm-body"><div className="mm-top"><b>Maria</b><span>7:02 AM</span></div><p>🎤 Voice message · asking about the rooms</p></div><span className="mm-dot"></span></div>
          <div style={{marginTop:"12px",padding:"11px 13px",background:"#fff5f5",border:"1px solid #fee2e2",borderRadius:"11px",fontSize:"12.5px",color:"#b91c1c",textAlign:"center",fontWeight:"600"}}>Booked another hotel instead</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHAT IT HANDLES */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Features</span><h2>What NextReply Handles For Your Property</h2><p>From the first enquiry to a confirmed stay, it works as a 24/7 concierge the way your best receptionist would.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="9" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg></div><h3>Shares Room Availability</h3><p>Guests ask what is available for their dates. NextReply shares your rooms and rates, and helps them reserve, so no enquiry goes unanswered.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM5 10v1a7 7 0 0 0 14 0v-1"/></svg></div><h3>Answers Guest Questions</h3><p>Check-in times, parking, breakfast, pet policy, local recommendations. NextReply answers instantly so guests get help the moment they need it.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Handles Booking Enquiries</h3><p>It takes the dates, confirms the guest, and records the reservation enquiry in your calendar with a reference, so nothing is missed.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h3>Answers Rates &amp; Policy FAQs</h3><p>What are your rates, is breakfast included, can we check in early? NextReply answers from your details, instantly and accurately.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div><h3>Hands Off To Your Team</h3><p>For group bookings, events or special requests, it passes the chat to your team with full context, so you can handle it personally.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6 6-6M5 15h14"/></svg></div><h3>Speaks Their Language</h3><p>Every reply comes back in the language your guest wrote in, so international travellers always feel welcome.</p></div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>How It Works</span><h2>Your Property Goes Live In Three Steps</h2><p>No technical skills needed. Set it up once and let it run.</p></div>
    <div className="steps">
      <div className="stp reveal"><div className="n">1</div><h3>Add Your Property</h3><p>Tell NextReply your rooms, rates, policies and the questions guests ask most. This becomes your AI's knowledge.</p></div>
      <div className="stp reveal"><div className="n">2</div><h3>Connect WhatsApp &amp; Calendar</h3><p>Link your existing WhatsApp Business number and bookings calendar. Nothing changes for your guests.</p></div>
      <div className="stp reveal"><div className="n">3</div><h3>Watch Rooms Book</h3><p>Guests chat as normal. NextReply answers, handles enquiries and shows every booking in your dashboard.</p></div>
    </div>
    <div style={{textAlign:"center",marginTop:"44px"}} className="reveal"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal"><span className="eyebrow"><span className="pulse"></span>Loved By Salon Owners</span><h2>Happier Guests, Fuller Rooms</h2></div>
    <div className="tst-grid">
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Overnight enquiries from other timezones used to go cold by morning. Now NextReply answers instantly and our rooms stay booked.</p><div className="who"><div className="av">EC</div><div><b>Laura Bennett</b><span>Owner, The Harbour Inn</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Guests ask about check-in and local tips at midnight. NextReply handles it all, so our small team is not glued to the phone.</p><div className="who"><div className="av">OM</div><div><b>Peter Grant</b><span>Manager, Lakeside B&B</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">It answers availability questions around the clock and captures every booking enquiry. Our occupancy has genuinely improved.</p><div className="who"><div className="av">SB</div><div><b>Anna Clarke</b><span>Owner, City View Suites</span></div></div></div>
    </div>
  </div>
</section>

{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing For Hotels</span><h2>Plans That Fit Your Property</h2><p>Every plan runs the same AI concierge for your property. Pick the enquiry volume that fits.</p></div>
    <div className="price-grid">
      <div className="plan reveal"><div className="mesh"></div><div className="pi a"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div className="pn">Starter</div><div className="pd">For small B&Bs and guesthouses.</div><div className="amt">$29<span>/mo</span></div><div className="dvd"></div><div className="incl">Services You Get</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Handles room booking enquiries</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Shares availability &amp; rates</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Answers check-in &amp; policy FAQs</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 500 bookings / month</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      <div className="plan pop reveal"><div className="mesh"></div><span className="badge">Most Popular</span><div className="pi b"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/></svg></div><div className="pn">Pro</div><div className="pd">For busy hotels with high enquiry volume.</div><div className="amt">$59<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Starter, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 1500 bookings / month</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Full guest chat history</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Read every past guest chat</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Priority support</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-light">Start Free</a></div>
      <div className="plan reveal"><div className="mesh"></div><div className="pi c"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div><div className="pn">Business</div><div className="pd">For hotel groups &amp; multiple properties.</div><div className="amt">$99<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Pro, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Unlimited bookings</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Send bookings to your CRM</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Connect Zapier, Make or Sheets</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Dedicated onboarding</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">If you reach your monthly booking limit, your AI keeps replying and lets clients know your team will confirm shortly, so no booking is ever lost. Upgrade any time.</p>
  </div>
</section>

{/* FAQ */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">FAQ</span><h2>Hotel &amp; B&B Questions</h2></div>
    <div className="faq">
      <details className="fq reveal" open><summary>Can it share room availability?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. Guests ask what is free for their dates and NextReply shares your rooms and rates, then helps them reserve and records the enquiry for your team.</div></details>
      <details className="fq reveal"><summary>Can it answer guest questions 24/7?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. Check-in, parking, breakfast, local tips and more, NextReply answers instantly at any hour from the details you set during setup.</div></details>
      <details className="fq reveal"><summary>Do I need to change my number?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">No. NextReply connects to your existing WhatsApp Business number, so your guests keep messaging the same place they always have.</div></details>
      <details className="fq reveal"><summary>What about group or event bookings?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">For groups, events or special requests, it hands the chat to your team with full context, so you can handle it personally.</div></details>
      <details className="fq reveal"><summary>How quickly can my property go live?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Most properties are live within minutes. Create your account, add your rooms and policies, connect WhatsApp and your calendar, and you are ready to take enquiries.</div></details>
    </div>
  </div>
</section>

{/* RELATED */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal" style={{marginBottom:"20px"}}><h2>Related Industries</h2></div>
    <div className="related reveal"><a href="/industries/restaurants">Restaurants</a><a href="/industries/salons-spas">Salons &amp; Spas</a><a href="/industries/gyms">Gyms &amp; Fitness</a><a href="/industries">All Industries</a></div>
  </div>
</section>

{/* CTA */}
<section style={{paddingTop:"0"}}>
  <div className="cta-wrap reveal">
    <div className="cta">
      <div className="dotbg"></div><div className="glow g1"></div>
      <h2>Fill More Rooms, Around The Clock</h2>
      <p>Let NextReply answer every guest on WhatsApp and capture every booking, day and night. Start free, no card needed.</p>
      <a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}