"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              CM
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Career Mantra
            </span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/About" className="hover:text-indigo-600">
              About
            </Link>
            <Link href="/Courses" className="hover:text-indigo-600">
              Courses
            </Link>
            <Link href="/gallery" className="hover:text-indigo-600">
              Gallery
            </Link>
            <Link href="/Contact" className="hover:text-indigo-600">
              Contact
            </Link>

            <Button asChild className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300">
              <a
                href="https://wa.me/917817065116?text=Hello%20I%20want%20to%20take%20admission%20in%20Career%20Mantra"
                target="_blank"
              >
                Admission Open
              </a>
            </Button>
          </nav>

          {/* ================= MOBILE MENU ================= */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[260px]">
                <nav className="flex flex-col gap-5 mt-10 font-medium text-gray-700">

                  <Link href="/" className="hover:text-indigo-600">
                    Home
                  </Link>
                  <Link href="/About" className="hover:text-indigo-600">
                    About
                  </Link>
                  <Link href="/Courses" className="hover:text-indigo-600">
                    Courses
                  </Link>
                  <Link href="/gallery" className="hover:text-indigo-600">
                    Gallery
                  </Link>
                  <Link href="/Contact" className="hover:text-indigo-600">
                    Contact
                  </Link>

                  <Button asChild className="mt-4 bg-yellow-400 text-indigo-900 hover:bg-yellow-300">
                    <a
                      href="https://wa.me/917817065116?text=Hello%20I%20want%20to%20take%20admission%20in%20Career%20Mantra"
                      target="_blank"
                    >
                      Admission Open
                    </a>
                  </Button>

                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}
