import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700"]
})

export const metadata: Metadata = {
  title: "Nextjs Complete Auth",
  description: "Nextjs complete Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="bg-gray-950">{children}</body>
    </html>
  );
}
