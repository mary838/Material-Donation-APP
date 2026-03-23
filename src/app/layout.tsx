import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import your new Navbar component
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
// ... other font loading (leaving it out for clarity) ...

export const metadata: Metadata = {
  title: "KindDrop - Helping Communities",
  description: "Donate and help cause",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Ensure you are passing a className for your font (like 'body.className') 
        from the font you loaded. I have omitted that below to avoid any font errors.
      */}
      <body className="antialiased"> 
        {/* ADD THE NAVBAR HERE */}
        <Navbar />
        
        <main>
          {children}
        </main>
        {/* ADD THE FOOTER HERE */}
        <Footer />
      </body>
    </html>
  );
}