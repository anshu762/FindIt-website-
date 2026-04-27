"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { registerUser } from "@/lib/actions/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await registerUser({ name, email, password });

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess("Account created successfully!");
        setTimeout(() => {
          router.push("/auth/login");
        }, 1200);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#fdfdfd] p-6 selection:bg-slate-900 selection:text-white">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-slate-200/50 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[440px]"
      >
        {/* Branding */}
        <div className="mb-10 flex flex-col items-center">
          <Link href="/" className="mb-4 flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-slate-100">
              <span className="text-xl font-bold text-white italic">F.</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">FindIt.</span>
          </Link>
          <h1 className="text-[1.75rem] font-bold tracking-tight text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm font-medium text-slate-500 italic px-8 text-center leading-relaxed">Join thousands of users finding their perfect car deal every day.</p>
        </div>

        {/* Card Layout */}
        <div className="rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold text-slate-500">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Anish Singh"
                  required
                  className="h-12 border-slate-200/70 rounded-xl px-4 focus-visible:ring-blue-600/10 focus-visible:border-blue-300 transition-all"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold text-slate-500">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="h-12 border-slate-200/70 rounded-xl px-4 focus-visible:ring-blue-600/10 focus-visible:border-blue-300 transition-all"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-bold text-slate-500">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="h-12 border-slate-200/70 rounded-xl px-4 focus-visible:ring-blue-600/10 focus-visible:border-blue-300 transition-all"
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-xs font-bold text-red-600 border border-red-100"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </motion.div>
              )}
              {success && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-xs font-bold text-emerald-600 border border-emerald-100"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {success}
                </motion.div>
              )}
            </AnimatePresence>

            <Button 
              type="submit" 
              disabled={loading} 
              className="h-12 w-full rounded-xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Sign up
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Button>
          </form>

          <footer className="mt-8 border-t border-slate-50 pt-6 text-center text-sm font-medium text-slate-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-bold text-slate-900 hover:underline">
              Log in
            </Link>
          </footer>
        </div>

        {/* Extra minimal help links */}
        <div className="mt-8 flex items-center justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-300">
           <Link href="/" className="hover:text-slate-400">Terms</Link>
          <span className="h-1 w-1 rounded-full bg-slate-200" />
          <Link href="/" className="hover:text-slate-400">Privacy</Link>
          <span className="h-1 w-1 rounded-full bg-slate-200" />
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Secure</span>
        </div>
      </motion.div>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
