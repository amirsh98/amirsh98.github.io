import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amirhossein Jamshidpour — DevOps & SRE Engineer",
  description:
    "Personal portfolio of Amirhossein Jamshidpour — DevOps / SRE engineer specializing in on-premises infrastructure, Kubernetes, automation, and observability.",
  openGraph: {
    title: "Amirhossein Jamshidpour — DevOps & SRE Engineer",
    description:
      "On-premises DevOps / SRE engineer. Kubernetes, automation, observability, and reliable infrastructure.",
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
      <body>{children}</body>
    </html>
  );
}
