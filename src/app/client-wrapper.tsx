"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change, but allow hash navigation
    if (pathname === "/" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}