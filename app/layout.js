import "./globals.css";

export const metadata = {
  title: "NextReply — Turn WhatsApp Chats Into Booked Appointments",
  description:
    "NextReply is an AI receptionist for WhatsApp that answers customers instantly and books appointments for you, day and night.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%238b5cf6'/%3E%3Cpath d='M9 12h14M9 17h9' stroke='white' stroke-width='2.6' stroke-linecap='round'/%3E%3C/svg%3E",
  },
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
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
