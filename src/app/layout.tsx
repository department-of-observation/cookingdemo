// src/app/layout.tsx
import "./globals.css";
import React from "react";
import { SiteShell } from "@/components/site/SiteChrome";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
