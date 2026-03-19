import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {Toaster} from "sonner";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyperchain Solution — The Supply Chain Data Company",
  description:
    "Engineering Data, Technology & Supply Chain Intelligence for Global Enterprises.",
  openGraph: {
    title: "Hyperchain Solution — The Supply Chain Data Company",
    description:
      "Engineering Data, Technology & Supply Chain Intelligence for Global Enterprises",
    type: "website",
    siteName: "Hyperchain Solution",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased bg-bg-white text-text-primary`}
 
      >
                {/* {children} */}
  <Toaster position="top-right" richColors />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-QZM7LCKCY1"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QZM7LCKCY1');
  `}
</Script>
      </body>
    </html>
  );
}