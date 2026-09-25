import "./globals.css";

export const metadata = {
  title: "WhatsApp AI Chatbot UAE — 24/7 Bookings From AED 109/mo | NextReply",
  description:
    "Replies in Arabic and English in about 5 seconds, understands voice notes and books clients straight into your calendar. No setup fee — start free today.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%238b5cf6'/%3E%3Cpath d='M9 12h14M9 17h9' stroke='white' stroke-width='2.6' stroke-linecap='round'/%3E%3C/svg%3E",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}