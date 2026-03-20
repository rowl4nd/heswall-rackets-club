import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Heswall Rackets Club | Squash, Racketball & Padel on the Wirral",
    template: "%s | Heswall Rackets Club",
  },
  description:
    "Community-owned sports club since 1974. 4 squash courts, 2 padel courts, bar & function suite available for hire. Based in Heswall, Wirral.",
  keywords: [
    "squash",
    "racketball",
    "padel",
    "Heswall",
    "Wirral",
    "sports club",
    "function room hire",
    "court booking",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Heswall Rackets Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
