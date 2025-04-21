import ChatPopup from "@/components/chat/ChatPopUp";
import Navbar from "@/components/Navbar";
import { constructMetadata } from "@/lib/utils";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <ChatPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
