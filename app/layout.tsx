import "@/app/styles/globals.css";
import LandingBar from "@/app/frontend/components/landingbar";
import SessionWrapper from "@/app/frontend/components/SessionWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <LandingBar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
