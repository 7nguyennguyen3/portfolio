import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import { constructMetadata } from "@/lib/utils";
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
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
