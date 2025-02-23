"use client";
import AccountNavBar from "@/app/frontend/components/AccountNavBar";
import LandingBar from "@/app/frontend/components/landingbar";

export default function AccountPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <LandingBar />
      <AccountNavBar />
    </main>
  );
}