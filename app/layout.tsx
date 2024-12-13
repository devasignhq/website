import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevAsign",
  description: "Powering open-source collaboration with blockchain payments",
  applicationName: "DevAsign",
  authors: {
    name: "DevAsign",
    url: "https://devasign.com",
  },
  keywords: [
    "DevAsign",
    "Open source",
    "Open payments",
    "Open source collaboration",
    "Blockchain payments",
    "Blockchain jobs",
    "Open source projects",
    "Manage github issues",
    "Manage gitlab issues",
    "Manage projects",
    "DevAsign projects",
    "Software developers jobs",
    "Software jobs",
    "Software gigs",
    "Gig jobs",
  ],
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
