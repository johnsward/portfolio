import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Adjust as needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${openSans.variable}`}>
      <Head>
        {/* Favicon for all devices */}
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/android-chrome-512x512.png" sizes="512x512" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest (for PWA support) */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Title */}
        <title>John Swärd Portfolio</title>
      </Head>
      <body className="antialiased text-slate-100 max-w-3xl min-h-screen flex flex-col items-center px-8 mx-auto">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
