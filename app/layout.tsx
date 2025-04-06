import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider
} from '@clerk/nextjs'

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400","500","600","700"], 
});


export const metadata: Metadata = {
  title: "Regen",
  description: "AI editor and Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
  <ClerkProvider
    appearance={{
      variables: {
        colorPrimary: '#FF007F', // pink-red
        colorBackground: '#0D1B2A', // dark blue
        colorText: '#FFFFFF', // white
        colorTextSecondary: '#FF6B6B', // soft red
        borderRadius: '0.5rem', // optional rounded corners

      },
    }}
  >
    <html lang="en">
      <body
        className={cn("font-kanit antialiased", kanit.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}