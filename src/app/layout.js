import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://driverse.ai"),

  title: {
    default: "Driverse.ai | Drivers, Mechanics, Towing & Voice Chat",
    template: "%s | Driverse.ai",
  },

  description:
    "Driverse.ai connects truck drivers with mechanics and towing services. Talk to friends using voice and chat while on the road.",

  keywords: [
    "truck drivers",
    "driverse",
    "mechanic near me",
    "towing service",
    "truck breakdown help",
    "driver communication app",
    "voice chat for drivers",
    "talk to friend",
  ],

  alternates: {
    canonical: "https://driverse.ai",
  },

  openGraph: {
    title: "Driverse.ai – Driver Services & Voice Chat",
    description:
      "Find mechanics, towing services, and talk to friends via voice & chat. Built for truck drivers.",
    url: "https://driverse.ai",
    siteName: "Driverse.ai",
    images: [
      {
        url: "/og-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "Driverse.ai",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Driverse.ai – Drivers & Voice Chat",
    description:
      "Marketplace for truck drivers with mechanic, towing & talk to friend features.",
    images: ["/og-image.png"],
  },

  other: {
    "google-site-verification":
      "HAAWKRB89ds81zWwi2ywwJIfYxWrJsmMsPusz_bqj9Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ================= Schema Markup ================= */}
        <Script
          id="schema-driverse"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Driverse.ai",
            url: "https://driverse.ai",
            applicationCategory: "CommunicationApplication",
            operatingSystem: "Web",
            description:
              "Driverse.ai connects truck drivers with mechanics, towing services, and voice/chat communication.",
          })}
        </Script>

        {/* ================= Meta Pixel ================= */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '827300446720177');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=827300446720177&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
