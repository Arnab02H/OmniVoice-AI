import type { Metadata } from "next";
import "./globals.css";
import BackgroundEffects from "./components/BackgroundEffects";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "OmniVoice.AI - All-in-One AI Voice Platform",
    description: "An all-in-one AI voice platform that handles every type of voice interaction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <BackgroundEffects />
                {children}

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
