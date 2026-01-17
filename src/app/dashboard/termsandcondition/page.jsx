import TermsConditionsClient from "./TermsConditionsClient";

/* =========================
   TERMS & CONDITIONS SEO
========================= */
export const metadata = {
  title: "Terms & Conditions | Driverse",
  description:
    "Review Driverse’s Terms & Conditions to understand your rights, responsibilities, and rules while using our platform and services.",
  keywords: [
    "driverse terms and conditions",
    "user agreement",
    "platform terms",
    "driver app terms",
    "usage policies",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/TermsConditions",
  },
};

export default function TermsConditionsPage() {
  return <TermsConditionsClient />;
}
