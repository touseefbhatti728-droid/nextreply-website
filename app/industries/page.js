import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industries | AI WhatsApp Chatbot For Every Business | NextReply",
  description:
    "See how NextReply's AI WhatsApp chatbot works for your industry, from salons and clinics to dentists, restaurants and more. Automate replies and bookings 24/7.",
};

const ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 9h.01M14 9h.01M10 13h.01M14 13h.01" /></svg>
);

const LIVE = [
  { name: "Salons & Spas", slug: "salons-spas", desc: "Cuts, colour, treatments" },
  { name: "Clinics & Doctors", slug: "clinics", desc: "Patient intake & booking" },
  { name: "Dentists", slug: "dentists", desc: "Emergencies & appointments" },
  { name: "Restaurants", slug: "restaurants", desc: "Reservations & menus" },
];

const SOON = [
  "Gyms & Fitness Studios", "Real Estate", "Aesthetic & Cosmetic Clinics",
  "Chiropractors & Physiotherapy", "Veterinary Clinics", "Hotels & B&Bs",
  "Travel Agencies", "Law Firms & Legal Consultants", "Accounting & Tax Firms",
  "Home Services", "Auto Repair Shops", "Photographers & Videographers",
  "Event Planners", "Tutors & Coaches", "Retail & Boutiques", "Wellness Centers",
];

export default function IndustriesHub() {
  return (
    <>
      <Header />

      <section className="ind-hero">
        <div className="dotbg" />
        <div className="glow g1" />
        <div className="wrap" style={{ position: "relative", zIndex: 2, maxWidth: 720, textAlign: "center", margin: "0 auto" }}>
          <span className="chip"><span className="pulse" />Built For Your Industry</span>
          <h1>One AI WhatsApp Chatbot, Tailored To Your Business</h1>
          <p className="sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            NextReply learns how your specific industry talks to customers, so every reply and every booking fits the way you actually work. Find yours below.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sh left"><h2>Popular Industries</h2><p style={{ margin: "12px 0 0" }}>Deep-dive pages with real conversations, use cases and answers for each field.</p></div>
          <div className="hub-grid">
            {LIVE.map((i) => (
              <a key={i.slug} href={`/industries/${i.slug}`} className="hub-card">
                <span className="hic">{ICON}</span>
                <span><b>{i.name}</b><span>{i.desc}</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sh left"><h2>More Industries Coming Soon</h2><p style={{ margin: "12px 0 0" }}>NextReply already works for these today. Dedicated guides are on the way.</p></div>
          <div className="hub-grid">
            {SOON.map((name) => (
              <div key={name} className="hub-card soon">
                <span className="hic">{ICON}</span>
                <span><b>{name}</b></span>
                <span className="tagcoming">Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="cta-wrap">
          <div className="cta">
            <div className="dotbg" />
            <div className="glow g1" />
            <h2>Do Not See Your Industry?</h2>
            <p>NextReply works for any business that talks to customers on WhatsApp. Start free and teach it about yours in minutes.</p>
            <a href="https://whatsapp-agent-dashboard-wine.vercel.app/signup" className="btn btn-primary btn-lg">Start Free</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}