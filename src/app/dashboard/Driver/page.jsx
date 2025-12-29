import DriverClient from "./DriverClient";

/* =========================
   DRIVER REGISTRATION SEO
========================= */
export const metadata = {
  title: "Driver Registration | Join the Community – Driverse",
  description:
    "Register as a driver on Driverse to access services, connect with carriers, and enjoy friendly voice and chat conversations—sign up today!",
  keywords: [
    "driver registration",
    "truck driver signup",
    "driverse drivers",
    "driver community",
    "friendly voice chat drivers",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/Driver",
  },
};

export default function DriverPage() {
  return <DriverClient />;
}
