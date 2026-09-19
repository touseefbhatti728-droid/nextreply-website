import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NextReply \u2014 Privacy Policy",
  description: "How NextReply collects, uses and protects your data and your customers' data.",
};

const CONTENT = "<section class=\"page-hero\"><div class=\"dotbg\"></div><div class=\"glow-orb o1\"></div><div class=\"wrap page-hero-in\"><span class=\"chip\">Legal</span><h1>Privacy Policy</h1><p>How <span class=\"bw\">Next<span class=\"r\">Reply</span></span> collects, uses and protects your information and your customers' information.</p></div></section>\n<section class=\"legal\"><div class=\"wrap legal-wrap\">\n<p class=\"legal-updated\">Last updated: January 2026</p>\n<p>NextReply (\"we\", \"us\", \"our\") provides an AI receptionist that answers messages and books appointments over WhatsApp. This policy explains what we collect, why, and how we keep it safe. By using <span class=\"bw\">Next<span class=\"r\">Reply</span></span> you agree to this policy.</p>\n<h2>Information We Collect</h2>\n<p>We collect information you give us and information created when you use the service:</p>\n<ul>\n<li>Account details you provide, such as your name, business name and email address.</li>\n<li>Business information you add, such as services, hours and answers to common questions.</li>\n<li>Messages exchanged between your customers and the AI, so we can reply and create bookings.</li>\n<li>Booking details, such as customer name, requested service and appointment time.</li>\n<li>Technical data, such as log information needed to run and secure the service.</li>\n</ul>\n<h2>How We Use Information</h2>\n<p>We use the information to operate <span class=\"bw\">Next<span class=\"r\">Reply</span></span>, reply to your customers, create bookings in your calendar, show your dashboard, provide support, and improve the reliability and safety of the service. We do not sell your information.</p>\n<h2>WhatsApp And Third Party Services</h2>\n<p>NextReply works with third party services to deliver its features, including the WhatsApp Business Platform, Google Calendar and our hosting and AI providers. Your use of WhatsApp is also governed by WhatsApp's own terms and privacy policy.</p>\n<h2>Data Storage And Security</h2>\n<p>We store data with reputable cloud providers and apply access controls and encryption in transit. No system is perfectly secure, but we take reasonable steps to protect your information from loss or misuse.</p>\n<h2>Data Retention</h2>\n<p>We keep information for as long as your account is active or as needed to provide the service. You can ask us to delete your data, and we will do so unless we must keep it to meet a legal obligation.</p>\n<h2>Your Rights</h2>\n<p>Depending on where you live, you may have the right to access, correct or delete your information, or to object to certain processing. To make a request, contact us using the details below.</p>\n<h2>Children</h2>\n<p>NextReply is for businesses and is not intended for children. We do not knowingly collect information from children.</p>\n<h2>Changes To This Policy</h2>\n<p>We may update this policy from time to time. We will post the new version here with an updated date.</p>\n<h2>Contact</h2>\n<p>For any privacy question or request, email us at <a href=\"mailto:hello@nextreply.io\" style=\"color:var(--violet-dark);font-weight:600\">hello@nextreply.io</a>.</p>\n</div></section>";

export default function Page() {
  return (
    <>
      <Header />
      <main dangerouslySetInnerHTML={{ __html: CONTENT }} />
      <Footer />
    </>
  );
}
