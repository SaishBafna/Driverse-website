import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from "sonner";
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
      <body className={inter.className}>
        <div>
          {children}
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
