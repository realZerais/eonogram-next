import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/Navigation";


export const metadata = {
  title: "Eonogram"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className= 'antialiased'
      >
        <div className="w-full flex flex-col justify-start items-center bg-background min-h-screen">
          <Navigation></Navigation>
          {children}
        </div>

      </body>
    </html>
  );
}
