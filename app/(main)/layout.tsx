import type { ReactNode } from "react";
import { CompareProvider } from "@/context/compare-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AuthSessionProvider from "@/components/providers/session-provider";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <AuthSessionProvider>
      <CompareProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </CompareProvider>
    </AuthSessionProvider>
  );
}
