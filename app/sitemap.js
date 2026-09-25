const BASE = "https://nextreply.io";

const routes = [
  "", "/pricing", "/connect-whatsapp", "/privacy", "/terms",
  "/industries",
  "/industries/salons-spas", "/industries/clinics", "/industries/dentists",
  "/industries/restaurants", "/industries/real-estate", "/industries/gyms",
  "/industries/aesthetic-clinics", "/industries/veterinary", "/industries/home-services",
  "/industries/auto-repair", "/industries/hotels", "/industries/law-firms",
  "/industries/accounting", "/industries/photographers",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((path) => ({
    url: BASE + path,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
