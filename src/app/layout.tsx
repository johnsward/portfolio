import { Open_Sans } from "next/font/google";
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
      <body className="antialiased text-slate-100 max-w-3xl min-h-screen flex flex-col items-center px-8 mx-auto">
        {children}
      </body>
    </html>
  );
}
