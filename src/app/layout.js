import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { NavBar } from "@/components/all-page/navbar";
import { FormPopUpProvider } from "@/providers/FormPopUpProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Items Management System",
  description: "PAW 10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <NavBar />
        <FormPopUpProvider>
          {children}
        </FormPopUpProvider>
      </body>
    </html>
  );
}
