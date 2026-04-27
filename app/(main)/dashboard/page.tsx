"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Car, Bookmark, History, LayoutDashboard, Settings, LogOut, ChevronRight, Sparkles, TrendingUp, Clock, User as UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CarCard from "@/components/cars/CarCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getSavedCars } from "@/lib/actions/user";
import CompareStatusBar from "@/components/cars/CompareStatusBar";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [savedCars, setSavedCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/auth/login");
    }

    async function loadData() {
      const cars = await getSavedCars();
      setSavedCars(cars);
      setLoading(false);
    }

    if (status === "authenticated") {
      loadData();
    }
  }, [status]);

  if (status === "loading" || loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      </div>
    );
  }

  const stats = [
    { label: "Saved Vehicles", value: savedCars.length, icon: Bookmark, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Account Type", value: "Standard", icon: UserIcon, color: "text-slate-600", bg: "bg-slate-50" },
  ];

  const memberSince = session?.user?.image ? "Aug 2023" : new Date().getFullYear().toString(); // Fallback

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Welcome Header */}
      <div className="mb-12 items-end justify-between space-y-4 sm:flex sm:space-y-0">
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black tracking-tight text-slate-900"
          >
            Welcome, {session?.user?.name?.split(' ')[0]}!
          </motion.h1>
          <p className="text-lg font-medium text-slate-500 italic">Explore your curated collection and manage your preferences.</p>
        </div>
        <div className="flex items-center gap-3">
           <Link href="/cars">
            <Button className="h-12 px-6 rounded-xl bg-slate-900 font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Browse More Cars
            </Button>
           </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-10 lg:grid-cols-4">
        {/* Sidebar Nav */}
        <div className="space-y-6 lg:col-span-1">
          <nav className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <NavItem 
              icon={LayoutDashboard} 
              label="Dashboard" 
              active={activeSection === 'overview'} 
              onClick={() => {
                setActiveSection('overview');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <NavItem 
              icon={Bookmark} 
              label="Saved Cars" 
              active={activeSection === 'saved-cars'} 
              onClick={() => {
                setActiveSection('saved-cars');
                document.getElementById('saved-cars')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <div className="my-2 border-t border-slate-100" />
            <button 
              onClick={() => signOut()}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </nav>
          
          <div className="p-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Account Verified</p>
            <p className="text-xs font-bold text-slate-400 mt-1">ID: {session?.user?.id?.slice(0, 8).toUpperCase()}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-10 lg:col-span-3">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Card key={i} className="flex items-center gap-5 p-6 transition-all hover:shadow-md border-slate-100/60 shadow-sm">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Saved Cars Section */}
          <section id="saved-cars" className="space-y-8 scroll-mt-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-4">
                <div className="h-10 w-1.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Your Collection</h2>
              </div>
              <Link href="/cars" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                Marketplace <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {savedCars.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2">
                {savedCars.map((car, i) => (
                  <motion.div 
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CarCard car={car} isInitialSaved />
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="flex flex-col items-center justify-center p-20 text-center border-dashed border-slate-200 bg-slate-50/30">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white text-slate-200 shadow-sm">
                  <Bookmark className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">No vehicles curated</h3>
                <p className="mt-3 max-w-sm text-base font-medium text-slate-500 leading-relaxed italic">
                  Take the lifestyle quiz or browse our premium fleet to start building your personal collection.
                </p>
                <Link href="/cars" className="mt-8">
                  <Button className="h-14 px-10 rounded-2xl bg-blue-600 text-lg font-bold hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all hover:-translate-y-1">
                    Explore Modern Fleet
                  </Button>
                </Link>
              </Card>
            )}
          </section>
        </div>
      </div>
      <CompareStatusBar />
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 group ${
      active 
        ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`}>
      <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${active ? "text-blue-400" : "text-slate-400 group-hover:text-blue-600"}`} />
      {label}
    </button>
  );
}

