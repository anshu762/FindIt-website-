"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Calculator, 
  Car, 
  User, 
  CheckCircle2, 
  TrendingDown, 
  Zap,
  ChevronDown,
  ShieldCheck,
  Star
} from "lucide-react";
import CarCard from "@/components/cars/CarCard";

interface LandingClientProps {
  featuredCars: any[];
}

export default function LandingClient({ featuredCars }: LandingClientProps) {
  const fadeInUp: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="bg-white">
      {/* 1. REFINED LIGHT HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 -z-0">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest shadow-sm"
              >
                <div className="flex h-2 w-2 rounded-full bg-blue-500" />
                The Future of Car Buying
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter"
              >
                Find the car that <br />
                <span className="text-blue-600">fits your lifestyle.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
              >
                Calculated for you, not the brochure. Get personalized recommendations with real running costs, safety ratings, and resale value predictions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-4 lg:justify-start justify-center"
              >
                <Link href="/quiz">
                  <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold bg-slate-900 shadow-xl shadow-slate-200 hover:-translate-y-1 transition-all group">
                    Start Lifestyle Quiz
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/cars">
                  <Button size="lg" variant="ghost" className="h-16 px-10 rounded-2xl text-lg font-bold text-slate-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                    Browse All Cars
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-8 lg:justify-start justify-center"
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                    50k+
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">Trusted by Indian Buyers</p>
                  <p className="text-slate-500 font-medium whitespace-nowrap">Join our community of smart owners</p>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <div className="relative z-10 w-full max-w-[600px] lg:ml-auto">
                 {/* Visual Polish */}
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-[60px] opacity-60" />
                 <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-100 rounded-full blur-[80px] opacity-40" />
                 
                 <div className="rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white group">
                    <img 
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
                      alt="Modern SUV"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-lg space-y-2">
                       <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Recommended SUV</span>
                          <div className="flex gap-1 text-amber-400"><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /></div>
                       </div>
                       <p className="text-lg font-black text-slate-900">Fits your Family & Budget</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
           <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-slate-300">
             <ChevronDown className="h-6 w-6" />
           </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR (Modern) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { label: "Cars Analyzed", value: "100+", icon: <Car className="h-5 w-5" /> },
                { label: "Recommendation Match", value: "97%", icon: <CheckCircle2 className="h-5 w-5" /> },
                { label: "Happy Buyers", value: "50k+", icon: <User className="h-5 w-5" /> },
                { label: "Resale Insight", value: "5 Years", icon: <TrendingDown className="h-5 w-5" /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start space-y-3 p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS (Relatable How It Works) */}
      <section className="py-32 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div {...fadeInUp} className="max-w-3xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Car buying, <br /><span className="text-blue-600">reimagined.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              We focus on how you live, not just what the sales brochure tells you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Lifestyle Fit", 
                desc: "Matches based on your family size, parking space, and road conditions.", 
                icon: <User className="h-7 w-7 text-blue-600" />
              },
              { 
                title: "Real Budgeting", 
                desc: "Get personalized monthly costs including fuel, service, and insurance.", 
                icon: <Calculator className="h-7 w-7 text-indigo-600" />
              },
              { 
                title: "Future Proofed", 
                desc: "See exactly how much your car will be worth in 1, 3, and 5 years.", 
                icon: <TrendingDown className="h-7 w-7 text-emerald-600" />
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED COLLECTION */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Top Recommended.</h2>
              <p className="text-slate-500 text-lg md:text-xl max-w-xl font-medium">
                The current leaders in family comfort, city efficiency, and resale value.
              </p>
            </div>
            <Link href="/cars">
              <Button variant="outline" className="h-14 px-10 rounded-2xl border-2 border-slate-100 font-bold hover:bg-slate-900 hover:text-white transition-all">
                Browse Full List
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredCars.map((car, i) => (
              <motion.div 
                key={car.id}
                {...fadeInUp}
                transition={{ delay: i * 0.15 }}
              >
                 <CarCard car={car} hideCompare />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (Premium Dark) */}
      <section className="py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 blur-[120px] -z-10" />
          
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
            Find yours <br />today.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Join 50k+ Indian buyers who found the right car without the stress.
          </p>
          <div className="flex justify-center pt-8">
             <Link href="/quiz">
              <Button size="lg" className="h-20 px-16 rounded-full text-2xl font-black bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                START QUIZ
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
