import CarriersClient from "./CarriersClient";

/* =========================
   CARRIERS REGISTRATION SEO
========================= */
export const metadata = {
  title: "Carrier Registration | Grow Your Business – Driverse",
  description:
    "Register as a carrier on Driverse to connect with drivers, mechanics, and towing services. Manage requests easily and grow your business—sign up now!",
  keywords: [
    "carrier registration",
    "driverse carriers",
    "logistics carrier signup",
    "towing and mechanic network",
    "carrier platform",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/carriers",
  },
};

export default function CarriersPage() {
  return <CarriersClient />;
}
