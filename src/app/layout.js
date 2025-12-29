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
    "Driverse.ai is a smart, all-in-one platform designed specifically for the transportation industry, connecting truck drivers, towing companies, mechanics, and carriers in one seamless ecosystem. The platform enables drivers to quickly request towing, mechanical, and roadside assistance services, helping reduce downtime and keep operations running smoothly. Mechanics and towing companies can list their services, showcase real-time availability, and access consistent job opportunities from verified users. Carriers can efficiently connect with trusted service providers to support their logistics and fleet requirements. In addition to service discovery, Driverse.ai offers a unique Talk to Friend feature that allows drivers to communicate through secure voice and chat, helping them stay connected, reduce loneliness during long hauls, and receive real-time support. Built with modern technology and a user-friendly interface, Driverse.ai focuses on speed, reliability, and community-driven engagement. Whether you are a driver looking for help on the road, a service provider seeking new opportunities, or a carrier managing operations, Driverse.ai delivers a reliable, efficient, and connected experience tailored to the needs of the transportation industry.",
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
    "google-site-verification": "HAAWKRB89ds81zWwi2ywwJIfYxWrJsmMsPusz_bqj9Y",
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
