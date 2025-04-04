import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";



const spartan = League_Spartan({ 
  subsets: ["latin"],
  weight: ['300', "400", '500', '600', '700'],
  variable: '--font-spartan-sans'
});


export const metadata: Metadata = {
  title: "STM Health",
  description: "Strength Through Motion Health | Richmond, BC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spartan.variable} antialiased`}
      >
       
        {children}

        <Footer />
      </body>
    </html>
  );
}
