import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Driverse",
  description: "Driverse",
  other: {
    "google-site-verification": "HAAWKRB89ds81zWwi2ywwJIfYxWrJsmMsPusz_bqj9Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Meta Pixel Code */}
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

        {/* NoScript Pixel fallback */}
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
        <div>
          {children}
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
