"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator, Car, User, CheckCircle2, Shield, TrendingDown, Star } from "lucide-react";
import CarCard from "@/components/cars/CarCard";

interface LandingClientProps {
  featuredCars: any[];
}

export default function LandingClient({ featuredCars }: LandingClientProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 px-4">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-4"
          >
            <Star className="h-4 w-4 fill-current" />
            <span>India&apos;s #1 Lifestyle-First Car Finder</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight"
          >
            Find the car that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">fits your life.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Answer 6 simple questions. Get personalized recommendations with real running costs, safety insights, and resale value predictions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/quiz">
              <Button size="lg" className="h-14 px-10 rounded-2xl text-lg font-bold bg-slate-900 shadow-2xl shadow-slate-200 hover:-translate-y-1 transition-transform group">
                Start Quiz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/cars">
              <Button size="lg" variant="ghost" className="h-14 px-10 rounded-2xl text-lg font-bold text-slate-600 hover:bg-slate-50 transition-all">
                Browse All Cars
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">How FindIt Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We move beyond generic specs to tell you how a car actually impacts your wallet and life.
            </p>
          </motion.div>

          <div className="relative grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-shadow">
               <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 ring-8 ring-blue-50/50">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Tell us your life</h3>
              <p className="text-slate-600 leading-relaxed">
                Family size, daily driving distance, and road conditions. Simple lifestyle inputs.
              </p>
              <div className="hidden md:block absolute top-1/2 -right-6 h-px w-12 bg-slate-200" />
            </motion.div>

            {/* Step 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-shadow">
               <div className="h-16 w-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 ring-8 ring-indigo-50/50">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. We match your cars</h3>
              <p className="text-slate-600 leading-relaxed">
                Our algorithm scores 100+ cars based on your unique needs to find the perfect fits.
              </p>
              <div className="hidden md:block absolute top-1/2 -right-6 h-px w-12 bg-slate-200" />
            </motion.div>

            {/* Step 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-shadow">
               <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 ring-8 ring-emerald-50/50">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. See the real cost</h3>
              <p className="text-slate-600 leading-relaxed">
                Get dynamic monthly expenses and 5-year resale predictions before you step into a showroom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE HIGHLIGHTS */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div {...fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Why choose FindIt?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We&apos;re solving the confusion of car buying with data-driven transparency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Lifestyle Matching", 
                desc: "Matches based on family & parking, not just price.", 
                icon: <User className="h-6 w-6" />,
                color: "blue"
              },
              { 
                title: "Real Running Costs", 
                desc: "Live calculations including fuel, insurance & service.", 
                icon: <Calculator className="h-6 w-6" />,
                color: "emerald"
              },
              { 
                title: "Depreciation Tracker", 
                desc: "Accurate resale value predictions over 5 years.", 
                icon: <TrendingDown className="h-6 w-6" />,
                color: "amber"
              },
              { 
                title: "Side-by-Side Compare", 
                desc: "Elite matrix comparing costs, not just engine specs.", 
                icon: <CheckCircle2 className="h-6 w-6" />,
                color: "indigo"
              }
            ].map((f, i) => (
              <motion.div 
                key={f.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all group"
              >
                <div className={`h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SAMPLE CAR CARDS */}
      <section className="py-24 px-4 bg-slate-900 text-white rounded-[3rem] mx-4 my-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">Most Searched Cars</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Ready to explore? Here are some of India&apos;s favorites that users are currently comparing.
              </p>
            </div>
            <Link href="/cars">
              <Button variant="default" className="rounded-2xl bg-white text-slate-900 hover:bg-slate-100 px-6 font-bold">
                View All 100+ Cars
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car, i) => (
              <motion.div 
                key={car.id}
                {...fadeInUp}
                transition={{ delay: i * 0.15 }}
                className="text-slate-900"
              >
                <CarCard car={car} hideCompare />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900">
            Ready to find your perfect car match?
          </motion.h2>
          <motion.p {...fadeInUp} className="text-lg text-slate-600">
            It takes less than 2 minutes and could save you from years of regret. Join 50,000+ users finding better cars.
          </motion.p>
          <motion.div {...fadeInUp} className="flex justify-center">
             <Link href="/quiz">
              <Button size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-200">
                Start My Quiz Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
