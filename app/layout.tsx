"use client"

import "@/app/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LandingBar from "@/app/frontend/components/landingbar"; // Ensure correct import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <LandingBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
