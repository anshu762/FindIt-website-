"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
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
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        setSuccess("Welcome back! Redirecting...");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 800);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#fdfdfd] p-6 selection:bg-slate-900 selection:text-white">
      {/* Mesh Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-slate-200/50 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[420px]"
      >
        {/* Branding */}
        <div className="mb-12 flex flex-col items-center">
          <Link href="/" className="mb-4 flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-transform duration-300 group-hover:scale-110">
              <span className="text-xl font-bold text-white italic">F.</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">FindIt.</span>
          </Link>
          <h1 className="text-[1.75rem] font-bold tracking-tight text-slate-900">Log in to your account</h1>
          <p className="mt-2 text-sm font-medium text-slate-500">Welcome back! Please enter your details.</p>
        </div>

        {/* Card Layout */}
        <div className="rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold text-slate-500">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="anish@example.com"
                  required
                  className="h-12 border-slate-200/70 rounded-xl px-4 focus-visible:ring-slate-900/10 focus-visible:border-slate-400 transition-all placeholder:text-slate-300"
                />
              </div>
              
              <div className="space-y-2 text-left">
                <Label htmlFor="password" className="text-xs font-bold text-slate-500">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="h-12 border-slate-200/70 rounded-xl px-4 focus-visible:ring-slate-900/10 focus-visible:border-slate-400 transition-all"
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
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Button>
          </form>

          <footer className="mt-8 border-t border-slate-50 pt-6 text-center text-sm font-medium text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-bold text-slate-900 hover:underline">
              Sign up
            </Link>
          </footer>
        </div>

        {/* Extra minimal help links */}
        <div className="mt-8 flex items-center justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-300">
          <Link href="/" className="hover:text-slate-400">Back to home</Link>
          <span className="h-1 w-1 rounded-full bg-slate-200" />
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> 256-bit SSL</span>
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
