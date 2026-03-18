import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./modules/shared/components/ui/sidebar";
import SidebarControls from "./SidebarControls";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // Ajoute d'autres poids si besoin
  variable: "--font-merriweather",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased bg-zinc-950 text-neutral-100 font-merriweather`}>
        <SidebarProvider>
          <SidebarControls />
        {children}
        </SidebarProvider>
      </body>
    </html>
  );
}