import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import GoogleReCaptchaWrapper from "./api/GoogleReCaptchaWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Terence Zhang | Web Developer Portfolio",
  description:
    "Explore Terence Zhang’s professional portfolio showcasing expertise in full-stack web development. Specialising in modern web technologies such as Next.js, React, Framer Motion, ShadCN, Node.js, Express.js, and MongoDB, Terence builds fast, scalable, and visually engaging web applications. Discover projects that highlight his skills in frontend design, backend development, and seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${calistoga.variable} scrollbar`}
    >
      <body className="bg-gray-900 text-white antialiased">
        <GoogleReCaptchaWrapper>{children}</GoogleReCaptchaWrapper>
        <GoogleAnalytics gaId="G-J8TQVF4EVX"/>
        <Toaster />
      </body>
    </html>
  );
}
