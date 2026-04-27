"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, LogOut, User as UserIcon, Car, BarChart3, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Browse Cars", href: "/cars", icon: <Search className="h-4 w-4" /> },
    { title: "Compare", href: "/compare", icon: <BarChart3 className="h-4 w-4" /> },
    { title: "Quiz", href: "/quiz", icon: <Car className="h-4 w-4" /> },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/80 border-b border-slate-200/50 backdrop-blur-xl shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            FindIt<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 outline-none">
                  <Avatar className="h-9 w-9 border-2 border-white shadow-sm ring-1 ring-slate-200">
                    <AvatarImage src={session.user?.image || ""} />
                    <AvatarFallback className="bg-blue-50 text-blue-600">
                      {session.user?.name?.[0] || <UserIcon className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 rounded-2xl p-2 shadow-xl border-slate-100">
                <div className="px-3 py-2 border-b border-slate-50 mb-1">
                  <p className="text-sm font-bold text-slate-900">{session.user?.name}</p>
                  <p className="text-xs text-slate-500 truncate">{session.user?.email}</p>
                </div>
                <Link href="/dashboard">
                  <DropdownMenuItem className="rounded-xl focus:bg-slate-50 cursor-pointer py-2.5">
                    <BarChart3 className="mr-2 h-4 w-4" /> Dashboard
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem 
                  onClick={() => signOut()}
                  className="rounded-xl focus:bg-red-50 focus:text-red-600 text-red-600 cursor-pointer py-2.5"
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth/login">
              <Button variant="default" className="rounded-full px-6 font-bold bg-slate-900 shadow-lg shadow-slate-200">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Header */}
        <div className="flex items-center gap-3 md:hidden">
          {session && (
             <Avatar className="h-8 w-8">
              <AvatarImage src={session.user?.image || ""} />
              <AvatarFallback className="bg-blue-50 text-blue-600 text-[10px]">
                {session.user?.name?.[0]}
              </AvatarFallback>
            </Avatar>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 transition-colors">
                <Menu className="h-6 w-6 text-slate-900" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0 p-0">
              <SheetHeader className="p-6 border-b border-slate-50">
                <SheetTitle className="text-left text-2xl font-black">FindIt<span className="text-blue-600">.</span></SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 gap-2">
                {session && (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-4 px-4 py-4 text-lg font-bold text-blue-600 bg-blue-50/50 rounded-2xl transition-all mb-2"
                  >
                    <div className="p-2 rounded-xl bg-blue-100/50"><BarChart3 className="h-4 w-4" /></div>
                    Your Dashboard
                  </Link>
                )}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-4 py-4 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all"
                  >
                    <div className="p-2 rounded-xl bg-slate-50 text-slate-600">{link.icon}</div>
                    {link.title}
                  </Link>
                ))}
                {!session && (
                  <Link href="/auth/login" className="mt-4">
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold bg-slate-900">
                      Login Securely
                    </Button>
                  </Link>
                )}
                {session && (
                   <button 
                    onClick={() => signOut()}
                    className="mt-10 flex items-center gap-4 px-4 py-4 text-lg font-bold text-red-600 hover:bg-red-50 rounded-2xl transition-all"
                   >
                    <div className="p-2 rounded-xl bg-red-50"><LogOut className="h-5 w-5" /></div>
                    Logout
                   </button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
