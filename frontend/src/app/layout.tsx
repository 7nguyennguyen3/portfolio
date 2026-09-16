// import ChatPopup from "../components/chat/ChatPopUp"; // Chatbot paused for now — may revisit later
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { constructMetadata } from "@/lib/utils";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          {/* <ChatPopup /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
