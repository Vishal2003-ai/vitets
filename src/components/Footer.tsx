import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-gray-200">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* ===== BRAND ===== */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white text-indigo-700 rounded-full flex items-center justify-center font-bold">
              CM
            </div>
            <h2 className="text-xl font-semibold text-white">
              Career Mantra
            </h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Career Mantra Education Center provides quality computer education
            with government-recognized courses, practical training and
            complete career guidance.
          </p>
        </div>

        {/* ===== COURSES ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Popular Courses
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>O Level</li>
            <li>CCC</li>
            <li>DCA / ADCA</li>
            <li>Web Development</li>
            <li>Graphic Designing</li>
          </ul>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/admission" className="hover:text-white">
                Admission
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Etawah, Uttar Pradesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 7817065116
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@careermantra.com
            </li>
          </ul>

          {/* ===== SOCIAL ===== */}
          <div className="flex gap-3 mt-5">
            <Button size="icon" variant="ghost" className="hover:text-white">
              <Globe size={18} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-white">
              <Facebook size={18} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-white">
              <Instagram size={18} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-white">
              <Youtube size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-indigo-500/40 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Career Mantra Education Center.  
        All Rights Reserved.
      </div>

    </footer>
  )
}
