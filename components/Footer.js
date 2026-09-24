import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="logo">
              <span className="lnx">Next</span>
              <span style={{ color: "var(--peri)" }}>Reply</span>
            </div>
            <p>
              The AI assistant that answers every customer on WhatsApp and
              books appointments, day and night.
            </p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>Product</h4>
              <Link href="/#features">Features</Link>
              <Link href="/#how">How It Works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className="foot-col">
              <h4>Industries</h4>
              <Link href="/industries/salons-spas">Salons &amp; Spas</Link>
              <Link href="/industries/clinics">Clinics &amp; Doctors</Link>
              <Link href="/industries/dentists">Dentists</Link>
              <Link href="/industries/restaurants">Restaurants</Link>
              <Link href="/industries">All Industries</Link>
            </div>
            <div className="foot-col">
              <h4>Account</h4>
              <a href="https://app.nextreply.io/signup">
                Start Free
              </a>
              <a href="https://app.nextreply.io/login">
                Sign In
              </a>
              <Link href="/connect-whatsapp">Connect WhatsApp</Link>
            </div>
            <div className="foot-col">
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms Of Service</Link>
              <a href="mailto:hello@nextreply.io">hello@nextreply.io</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>
            &copy; 2026{" "}
            <span className="bw">
              Next<span className="r">Reply</span>
            </span>
            . All Rights Reserved.
          </span>
          <span>Made For Businesses That Live On WhatsApp.</span>
        </div>
      </div>
    </footer>
  );
}