"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Car, Bookmark, History, LayoutDashboard, Settings, LogOut, ChevronRight, Sparkles, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CarCard from "@/components/cars/CarCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getSavedCars } from "@/lib/actions/user";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [savedCars, setSavedCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    { label: "Saved Cars", value: savedCars.length, icon: Bookmark, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Quiz Results", value: "2", icon: History, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Activity Score", value: "92", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome Header */}
      <div className="mb-10 items-end justify-between space-y-4 sm:flex sm:space-y-0">
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Welcome back, {session?.user?.name?.split(' ')[0]}!
          </motion.h1>
          <p className="text-lg font-medium text-slate-500 italic">Manage your fleet and track your search progress.</p>
        </div>
        <div className="flex items-center gap-3">
           <Link href="/cars">
            <Button className="rounded-xl bg-slate-900 font-bold hover:bg-slate-800 transition-all">
              Browse More Cars
            </Button>
           </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar Nav */}
        <div className="space-y-4 lg:col-span-1">
          <nav className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <NavItem icon={LayoutDashboard} label="Overview" active />
            <NavItem icon={Bookmark} label="Saved Vehicles" />
            <NavItem icon={History} label="Quiz History" />
            <NavItem icon={Settings} label="Member Settings" />
            <div className="my-2 border-t border-slate-100" />
            <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </nav>

          {/* Premium Badge */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">
             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
               <Sparkles className="h-5 w-5 text-yellow-400" />
             </div>
             <p className="text-lg font-bold">Elite Member</p>
             <p className="mt-1 text-xs font-medium text-slate-400">You have access to high-fidelity market data and trends.</p>
             <Button variant="outline" className="mt-4 w-full border-white/20 bg-transparent text-white hover:bg-white/10 rounded-xl font-bold">
               View Benefits
             </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 lg:col-span-3">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Card key={i} className="flex items-center gap-4 p-5 transition-all hover:shadow-md border-slate-100">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Saved Cars Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-blue-600 rounded-full" />
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Your Saved Vehicles</h2>
              </div>
              <Link href="/cars" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">
                Explore All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {savedCars.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {savedCars.map((car, i) => (
                  <motion.div 
                    key={car.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CarCard car={car} hideCompare isInitialSaved />
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="flex flex-col items-center justify-center p-16 text-center border-dashed border-slate-200">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                  <Bookmark className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">No cars saved yet</h3>
                <p className="mt-2 max-w-sm text-sm font-medium text-slate-500 italic">
                  Explore our premium fleet and bookmark the vehicles that match your lifestyle.
                </p>
                <Link href="/cars" className="mt-6">
                  <Button className="rounded-xl bg-blue-600 font-bold hover:bg-blue-700">Explore Fleet</Button>
                </Link>
              </Card>
            )}
          </section>

          {/* Recent Activity / Roadmap */}
          <div className="grid gap-6 lg:grid-cols-2">
             <Card className="p-6 border-slate-100 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400">
                  <Clock className="h-4 w-4" /> Recent Activity
                </h3>
                <div className="space-y-6">
                   <ActivityItem 
                    title="Price Drop Alert" 
                    desc="Toyota Fortuner price decreased by 2.5%" 
                    time="2 hours ago"
                    type="alert"
                   />
                   <ActivityItem 
                    title="New Match Found" 
                    desc="A new SUV matches your quiz profile" 
                    time="Yesterday"
                    type="match"
                   />
                </div>
             </Card>

             <Card className="p-6 bg-blue-50/30 border-blue-100 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-400">
                  <TrendingUp className="h-4 w-4" /> Market Insights
                </h3>
                <div className="space-y-4">
                   <p className="text-sm font-medium text-slate-600 leading-relaxed">
                     Based on your searches, the demand for **Hybrid SUVs** is increasing. Consider exploring the latest Honda City Hybrid models.
                   </p>
                   <Link href="/results" className="inline-block text-xs font-black text-blue-600 underline">View Full Report</Link>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 group ${
      active 
        ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`}>
      <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${active ? "text-blue-400" : "text-slate-400 group-hover:text-blue-600"}`} />
      {label}
    </button>
  );
}

function ActivityItem({ title, desc, time, type }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className={`mt-1 h-2 w-2 rounded-full ${type === 'alert' ? 'bg-orange-500' : 'bg-blue-500'}`} />
      <div className="space-y-0.5">
        <p className="text-sm font-black text-slate-900">{title}</p>
        <p className="text-xs font-medium text-slate-500">{desc}</p>
        <p className="text-[10px] font-bold text-slate-300 uppercase mt-1">{time}</p>
      </div>
    </div>
  )
}
