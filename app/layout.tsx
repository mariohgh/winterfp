import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winter Finance Partners | Xero, Microsoft D365 & NetSuite Consultancy",
  description:
    "Expert ERP and accounting software consultancy. We help businesses implement and optimise Xero, Microsoft Dynamics 365, and NetSuite.",
  openGraph: {
    title: "Winter Finance Partners",
    description: "Expert ERP and accounting software consultancy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
