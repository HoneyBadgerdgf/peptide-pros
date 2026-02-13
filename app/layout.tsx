import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peptide Pros | Local Peptide Education & Sourcing in Las Vegas",
  description: "Clear education. Local support. Real conversations. Las Vegas based peptide education and sourcing. Speak with a local nurse before making decisions.",
  keywords: "peptides, Las Vegas, BPC-157, peptide therapy, wellness, longevity, recovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
