import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-background text-foreground">
      <div className="container mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Logo + Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-bold">
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                T
              </div>
              Tailblocks
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">
              Learn modern web development with practical courses and real-world projects.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

            <div>
              <h4 className="mb-3 text-sm font-semibold text-gray-300">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
                <li><Link to="/courses" className="hover:text-indigo-400">Courses</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-gray-300">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-indigo-400">Help Center</Link></li>
                <li><Link to="/" className="hover:text-indigo-400">Terms</Link></li>
                <li><Link to="/" className="hover:text-indigo-400">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-gray-300">
                Get Started
              </h4>
              <Button className="bg-indigo-600 hover:bg-indigo-700 w-full">
                Join Now
              </Button>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tailblocks. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  )
}
