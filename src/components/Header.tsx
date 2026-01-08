import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 bg-background text-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            T
          </div>
          Tailblocks
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-indigo-400 transition">
            Home
          </Link>
          <Link to="/courses" className="text-sm hover:text-indigo-400 transition">
            Courses
          </Link>
          <Link to="/about" className="text-sm hover:text-indigo-400 transition">
            About
          </Link>
          <Link to="/contact" className="text-sm hover:text-indigo-400 transition">
            Contact
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-background">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/home" className="text-lg hover:text-indigo-400">
                Home
              </Link>
              <Link to="/courses" className="text-lg hover:text-indigo-400">
                Courses
              </Link>
              <Link to="/about" className="text-lg hover:text-indigo-400">
                About
              </Link>
              <Link to="/contact" className="text-lg hover:text-indigo-400">
                Contact
              </Link>

              <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
