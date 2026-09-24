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
      <span className="chip"><span className="pulse"></span>For Real Estate</span>
      <h1>The AI WhatsApp Assistant Built For <span className="grad-text">Real Estate Agents</span></h1>
      <p className="sub">You are showing one property while three buyers message about others. NextReply answers every enquiry on WhatsApp, qualifies the lead, shares listing details, and books viewings into your calendar, even while you are out on a showing.</p>
      <div className="hero-cta"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a><a href="/connect-whatsapp" className="btn btn-light btn-lg">See How It Works</a></div>
      <div className="trust-badges">
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No Setup Fees</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Cancel Anytime</span>
        <span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Uses Your Own Number</span>
      </div>
    </div>
    <div className="mock">
      <div className="mock-top"><div className="mock-av">N</div><div><div className="nm">Prime Property Group</div><div className="st">online</div></div></div>
      <div className="mock-body">
        <div className="bub them">Hi, is the 3-bed apartment on Oak Street still available? 🏡</div>
        <div className="bub voice"><span className="play"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span className="wave"><i style={{height:"9px"}}></i><i style={{height:"16px"}}></i><i style={{height:"12px"}}></i><i style={{height:"19px"}}></i><i style={{height:"10px"}}></i></span><span className="dur">0:06</span></div>
        <div className="bub me">Yes, it is! It is a 3-bed, 2-bath at $2,400/mo. Would you like to book a viewing? I have Saturday 11 AM or 3 PM.</div>
        <div className="bub them">Saturday 11 works</div>
        <div className="bub me">Great. Can I get your name to confirm the viewing?</div>
        <div className="bub them">Sarah</div>
        <div className="bub me">All set, Sarah! Viewing at Oak Street, Saturday 11 AM. 🔑</div>
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
      <h2>Why Agents Lose Leads On WhatsApp</h2>
      <p>For most agents, WhatsApp is where buyers and renters first reach out. They ask if a listing is still available, the price, the location, or send a quick "can I view it this weekend?" while you are with another client.</p>
      <p>When you are on a showing or driving between properties, those messages sit unread. A serious buyer who does not hear back fast moves to the next agent, and a hot lead goes cold.</p>
      <ul className="mini">
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Missed enquiries while out on showings</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Hot leads going cold before you reply</li>
        <li><span className="tk"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>The same questions: price, availability, location</li>
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
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#8b5cf6,#6d3aed)"}}>S</div><div className="mm-body"><div className="mm-top"><b>Sarah</b><span>10:48 PM</span></div><p>Is the Oak Street apartment still available?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#a78bfa,#8b5cf6)"}}>A</div><div className="mm-body"><div className="mm-top"><b>Aisha</b><span>11:15 PM</span></div><p>What is the rent and are pets allowed?</p></div><span className="mm-dot"></span></div>
          <div className="mm-row"><div className="mm-av" style={{background:"linear-gradient(140deg,#93b4fd,#6d3aed)"}}>M</div><div className="mm-body"><div className="mm-top"><b>Maria</b><span>7:02 AM</span></div><p>🎤 Voice message · asking for a viewing</p></div><span className="mm-dot"></span></div>
          <div style={{marginTop:"12px",padding:"11px 13px",background:"#fff5f5",border:"1px solid #fee2e2",borderRadius:"11px",fontSize:"12.5px",color:"#b91c1c",textAlign:"center",fontWeight:"600"}}>Went with another agent instead</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHAT IT HANDLES */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Features</span><h2>What NextReply Handles For Your Listings</h2><p>From the first enquiry to a booked viewing, it qualifies and nurtures leads the way your best assistant would.</p></div>
    <div className="feat-grid">
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="9" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg></div><h3>Qualifies Property Leads</h3><p>NextReply asks the right questions, budget, move-in date, bedrooms, so by the time you call, you already know the lead is serious and what they want.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM5 10v1a7 7 0 0 0 14 0v-1"/></svg></div><h3>Answers Listing Questions</h3><p>Price, availability, square footage, pet policy, parking. NextReply answers from your listing details instantly, so no enquiry goes stale.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Books Viewings</h3><p>It offers viewing times that are genuinely free, confirms the buyer, and drops the appointment into your calendar with a reference number.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h3>Shares Listing Details</h3><p>Buyers get the key details of each property, so they arrive at a viewing already informed and ready to move forward.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div><h3>Hands Hot Leads To You</h3><p>When a lead is ready to make an offer or needs your expertise, it passes the chat to you with full context, so you close instead of chasing.</p></div>
      <div className="fc reveal"><div className="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6 6-6M5 15h14"/></svg></div><h3>Speaks Their Language</h3><p>Every reply comes back in the language your buyer wrote in, so you can serve an international market with ease.</p></div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow"><span className="pulse"></span>How It Works</span><h2>You Go Live In Three Steps</h2><p>No technical skills needed. Set it up once and let it run.</p></div>
    <div className="steps">
      <div className="stp reveal"><div className="n">1</div><h3>Add Your Listings</h3><p>Tell NextReply about your listings, prices, areas and the questions buyers ask most. This becomes your AI's knowledge.</p></div>
      <div className="stp reveal"><div className="n">2</div><h3>Connect WhatsApp &amp; Calendar</h3><p>Link your existing WhatsApp Business number and viewing calendar. Nothing changes for your buyers.</p></div>
      <div className="stp reveal"><div className="n">3</div><h3>Watch Viewings Book</h3><p>Buyers chat as normal. NextReply qualifies, books viewings and shows every lead in your dashboard.</p></div>
    </div>
    <div style={{textAlign:"center",marginTop:"44px"}} className="reveal"><a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal"><span className="eyebrow"><span className="pulse"></span>Loved By Salon Owners</span><h2>More Qualified Leads, Fewer Missed</h2></div>
    <div className="tst-grid">
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">Leads used to go cold while I was out showing. Now NextReply replies instantly, qualifies them, and my weekends are packed with viewings.</p><div className="who"><div className="av">EC</div><div><b>Daniel Foster</b><span>Agent, Prime Property Group</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">It qualifies buyers before I even call. I stopped wasting time on tyre-kickers and my conversion has gone up.</p><div className="who"><div className="av">OM</div><div><b>Rebecca Shaw</b><span>Broker, Skyline Realty</span></div></div></div>
      <div className="tst reveal"><div className="stars"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></div><p className="q">It answers listing questions at midnight and books the viewing. I wake up to a calendar full of appointments.</p><div className="who"><div className="av">SB</div><div><b>Marcus Lane</b><span>Realtor, Lane & Co</span></div></div></div>
    </div>
  </div>
</section>

{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing For Agents</span><h2>Plans That Fit Your Business</h2><p>Every plan runs the same AI assistant for your listings. Pick the lead volume that fits.</p></div>
    <div className="price-grid">
      <div className="plan reveal"><div className="mesh"></div><div className="pi a"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div className="pn">Starter</div><div className="pd">For solo agents getting started.</div><div className="amt">$29<span>/mo</span></div><div className="dvd"></div><div className="incl">Services You Get</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Books property viewings</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Qualifies buyer &amp; renter leads</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Answers listing &amp; price FAQs</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 500 bookings / month</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      <div className="plan pop reveal"><div className="mesh"></div><span className="badge">Most Popular</span><div className="pi b"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/></svg></div><div className="pn">Pro</div><div className="pd">For busy agents with high lead volume.</div><div className="amt">$59<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Starter, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Up to 1500 bookings / month</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Full lead chat history</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Read every past lead chat</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Priority support</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-light">Start Free</a></div>
      <div className="plan reveal"><div className="mesh"></div><div className="pi c"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div><div className="pn">Business</div><div className="pd">For agencies &amp; brokerages.</div><div className="amt">$99<span>/mo</span></div><div className="dvd"></div><div className="incl">Everything In Pro, Plus</div><ul className="feat"><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Unlimited bookings</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Send bookings to your CRM</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Connect Zapier, Make or Sheets</li><li><span className="tk"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Dedicated onboarding</li></ul><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">If you reach your monthly booking limit, your AI keeps replying and lets clients know your team will confirm shortly, so no booking is ever lost. Upgrade any time.</p>
  </div>
</section>

{/* FAQ */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">FAQ</span><h2>Real Estate Questions</h2></div>
    <div className="faq">
      <details className="fq reveal" open><summary>Can it qualify leads automatically?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. It asks the questions that matter, budget, timing, requirements, so you know exactly how serious a lead is before you spend time on them.</div></details>
      <details className="fq reveal"><summary>Can it book viewings into my calendar?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Yes. It offers viewing times that are free, confirms the buyer, and books the appointment straight into your connected calendar.</div></details>
      <details className="fq reveal"><summary>Do I need to change my number?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">No. NextReply connects to your existing WhatsApp Business number, so your buyers keep messaging the same place they always have.</div></details>
      <details className="fq reveal"><summary>What if a lead is ready to make an offer?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">It hands hot leads straight to you with full context, so you step in at the moment that matters and close the deal.</div></details>
      <details className="fq reveal"><summary>How quickly can I go live?<span className="pl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div className="a">Most agents are live within minutes. Create your account, add your listings and areas, connect WhatsApp and your calendar, and you are ready to capture leads.</div></details>
    </div>
  </div>
</section>

{/* RELATED */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh left reveal" style={{marginBottom:"20px"}}><h2>Related Industries</h2></div>
    <div className="related reveal"><a href="/industries/home-services">Home Services</a><a href="/industries/hotels">Hotels &amp; B&amp;Bs</a><a href="/industries/salons-spas">Salons &amp; Spas</a><a href="/industries">All Industries</a></div>
  </div>
</section>

{/* CTA */}
<section style={{paddingTop:"0"}}>
  <div className="cta-wrap reveal">
    <div className="cta">
      <div className="dotbg"></div><div className="glow g1"></div>
      <h2>Close More Deals, Chase Fewer Leads</h2>
      <p>Let NextReply qualify every lead on WhatsApp and book your viewings, day and night. Start free, no card needed.</p>
      <a href="https://app.nextreply.io/signup" className="btn btn-primary btn-lg">Start Free</a>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}