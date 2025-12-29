import ContactClient from "./ContactClient";

/* =========================
   CONTACT PAGE SEO
========================= */
export const metadata = {
  title: "Contact Driverse | Driver, Mechanic & Towing Support",
  description:
    "Get in touch with Driverse.ai. Contact our team for support related to drivers, mechanics, towing services, carriers, or Talk to Friend voice chat.",
  keywords: [
    "contact driverse",
    "driverse support",
    "truck driver contact",
    "towing service support",
    "mechanic platform contact",
    "driverse ai canada",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
