import AgentClient from "./AgentClient";

/* =========================
   AGENT REGISTRATION SEO
========================= */
export const metadata = {
  title: "Join as an Agent | Friendly Voice Chat – Driverse",
  description:
    "Join Driverse.ai as an agent and earn by having friendly voice and chat conversations with drivers. Flexible timing, simple signup—register now!",
  keywords: [
    "agent registration",
    "earn by talking",
    "voice chat agent",
    "friendly conversation agent",
    "driverse agent signup",
    "talk to friend agent",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/Agent",
  },
};

export default function AgentPage() {
  return <AgentClient />;
}
