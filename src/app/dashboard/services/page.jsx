import ServicesClient from "./ServicesClient";

/* =========================
   SERVICES PAGE SEO
========================= */
export const metadata = {
  title:
    "Services | Drivers, Mechanics, Towing & Carriers – Driverse",
  description:
    "Driverse.ai connects drivers, mechanics, towing companies, and carriers. Request services, post availability, and communicate seamlessly.",
  keywords: [
    "truck driver services",
    "mechanic services",
    "towing services",
    "carrier logistics support",
    "driver communication app",
    "talk to friend drivers",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
