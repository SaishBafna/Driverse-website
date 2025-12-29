import AgentQuizClient from "./AgentQuizClient";

/* =========================
   AGENT QUIZ SEO
========================= */
export const metadata = {
  title: "Agent Quiz | Friendly Voice Chat Guidelines – Driverse",
  description:
    "Complete the Driverse agent quiz to qualify for friendly voice and chat conversations with drivers. Score 80% or more to get verified—start now!",
  keywords: [
    "agent quiz",
    "driverse agent verification",
    "voice chat agent quiz",
    "friendly conversation guidelines",
    "talk to friend agent test",
  ],
  alternates: {
    canonical: "https://driverse.ai/dashboard/AgentQuiz",
  },
};

export default function AgentQuizPage() {
  return <AgentQuizClient />;
}
