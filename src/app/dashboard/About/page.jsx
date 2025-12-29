import AboutClient from "./AboutClient";

/* =========================
   PAGE SEO METADATA (SERVER)
========================= */
export const metadata = {
  title: "About Driverse | Truck Drivers, Mechanics & Towing Platform",
  description:
    "Driverse.ai connects truck drivers with mechanics, towing services, and carriers while offering voice and chat communication to stay connected on the road.",
  keywords: [
    "about driverse",
    "truck driver platform",
    "mechanic services",
    "towing services",
    "driver communication app",
    "voice chat for drivers",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
