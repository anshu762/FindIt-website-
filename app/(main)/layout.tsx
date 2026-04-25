import type { ReactNode } from "react";
import { CompareProvider } from "@/context/compare-context";
import CompareStatusBar from "@/components/cars/CompareStatusBar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <CompareProvider>
      {children}
      <CompareStatusBar />
    </CompareProvider>
  );
}
