import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { glacialIndifference, mulish } from "../config/fonts";

export const metadata: Metadata = {
  title: "OMYTECH Kenya",
  description:
    "Web development, mobile app development, and digital solutions from OMYTECH Kenya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${glacialIndifference.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
