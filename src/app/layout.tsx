import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import DocumentTitle from "./components/DocumentTitle";
import { pageTitles } from "./lib/pageTitles";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: pageTitles["/"].ga,
  description:
    "The Alba FA uses football as a force to connect, inspire and grow Scottish Gaelic through community football activity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="gd" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <DocumentTitle />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Partners />
        <Footer />
      </body>
    </html>
  );
}
