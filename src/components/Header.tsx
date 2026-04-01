"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Phone, MessageSquare, ArrowRight } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/About" },
    { title: "Courses", href: "/courses" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* ================= LOGO SECTION ================= */}
        <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 font-bold text-white shadow-lg shadow-indigo-200">
            CM
            <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-yellow-400 border-2 border-white" />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-bold leading-none tracking-tight text-slate-900">
              Career Mantra
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Tech Academy
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION (Shadcn) ================= */}
        <nav className="hidden lg:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-9 px-4 text-sm font-medium transition-colors hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-50",
                        pathname === link.href && "bg-indigo-50 text-indigo-600 font-semibold"
                      )}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="mx-4 h-6 w-px bg-slate-200" />

          <Button 
            asChild
            className="group relative overflow-hidden rounded-full bg-indigo-600 px-6 font-semibold transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-95"
          >
            <a href="https://wa.me/917817065116" target="_blank" className="flex items-center">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </nav>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div className="flex lg:hidden items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full text-indigo-600 hover:bg-indigo-50" asChild>
            <a href="tel:+917817065116"><Phone className="h-5 w-5" /></a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl border-slate-200 shadow-sm transition-colors hover:bg-slate-50">
                <Menu className="h-5 w-5 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col border-l-0 p-0 sm:max-w-xs">
              <SheetHeader className="border-b p-6 text-left">
                <SheetTitle className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">CM</div>
                  Navigation
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-1 flex-col justify-between p-6">
                <nav className="space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl p-4 text-base font-semibold transition-all",
                        pathname === link.href 
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" 
                          : "bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                      )}
                    >
                      {link.title}
                      <ArrowRight className={cn("h-4 w-4 opacity-0 transition-all", pathname === link.href && "opacity-100")} />
                    </Link>
                  ))}
                </nav>

                <div className="space-y-3 pt-6">
                  <p className="text-center text-xs font-medium text-slate-400">Get in touch with us</p>
                  <Button asChild className="w-full rounded-xl bg-green-500 py-6 text-lg font-bold hover:bg-green-600 shadow-lg shadow-green-100">
                    <a href="https://wa.me/917817065116" className="flex items-center justify-center gap-2">
                      <MessageSquare className="h-5 w-5" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}