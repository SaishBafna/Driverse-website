import PrivacyPolicyClient from "./PrivacyPolicyClient";

/* =========================
   PRIVACY POLICY SEO
========================= */
export const metadata = {
  title: "Privacy Policy | Driverse",
  description:
    "Read Driverse’s Privacy Policy to understand how we collect, use, store, and protect your personal data across our platform.",
  keywords: [
    "driverse privacy policy",
    "user data protection",
    "driver app privacy",
    "personal data security",
    "platform privacy policy",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/PrivacyPolicy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
