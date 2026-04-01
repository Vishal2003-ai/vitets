"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  Award, 
  Briefcase, 
  ArrowRight,
  Monitor,
  Database,
  PenTool,
  TrendingUp,
  MessageCircle,
  Code,
  ArrowUpRight
} from "lucide-react"


const stats = [
  { title: "10+", desc: "Years Experience", icon: Award },
  { title: "5000+", desc: "Students Trained", icon: Users },
  { title: "15+", desc: "Professional Courses", icon: GraduationCap },
  { title: "100%", desc: "Career Support", icon: Briefcase },
]

const courses = [
  {
    name: "O Level",
    slug: "o-level",
    icon: Monitor,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "NIELIT recognized foundation course in IT tools and systems.",
    duration: "1 Year",
    category: "Government"
  },
  {
    name: "CCC",
    slug: "ccc",
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Course on Computer Concepts - essential for govt job preparation.",
    duration: "80 Hours",
    category: "Essential"
  },
  {
    name: "ADCA / DCA",
    slug: "adca-dca",
    icon: Database,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Advanced Diploma covering Office, Tally, and Graphics.",
    duration: "12 Months",
    category: "Diploma"
  },
  {
    name: "Web Development",
    slug: "web-development",
    icon: Code,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    description: "Build modern websites using HTML, CSS, JS, and Next.js.",
    duration: "6 Months",
    category: "Trending"
  },
  {
    name: "Graphic Designing",
    slug: "graphic-designing",
    icon: PenTool,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    description: "Master Photoshop, CorelDraw, and Illustrator for creative roles.",
    duration: "4 Months",
    category: "Creative"
  },
  {
    name: "Tally Prime + GST",
    slug: "tally-prime-gst",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Professional accounting with inventory and taxation mastery.",
    duration: "3 Months",
    category: "Finance"
  }
]

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-20 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -ml-24 -mb-24" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 py-1.5 px-4 bg-indigo-500/20 text-indigo-200 border-indigo-400/30 backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 mr-2" /> Govt. Recognized Institute
            </Badge>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Shape Your Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                With Career Mantra
              </span>
            </h1>

            <p className="text-indigo-100 text-xl mb-10 max-w-lg leading-relaxed font-light">
              Master the digital skills required for the modern job market. Get practical training, certification, and 100% placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-yellow-400 text-indigo-950 hover:bg-yellow-300 px-8 py-7 text-lg font-bold shadow-lg shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95">
                <a href="https://wa.me/917817065116" target="_blank" className="flex items-center gap-2">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button variant="outline" size="lg" className="rounded-full hover:text-white border-indigo-400 text-black hover:bg-indigo-700/50 backdrop-blur-sm px-8 py-7 text-lg">
                Explore Courses
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-2xl" />
            <Image
              src="/student.png" // Make sure to have this in public folder
              alt="Career Mantra Education"
              width={600}
              height={600}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-12 bg-white relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <Card key={i} className="border-none shadow-xl shadow-slate-100 transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Trending Programs</h2>
            <p className="text-slate-600 text-lg">Choose from our industry-leading courses designed to make you a professional expert.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map((course, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden border-none bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
        <CardContent className="p-8">
          {/* Top Row: Icon & Category */}
          <div className="flex justify-between items-start mb-6">
            <div className={`p-4 rounded-2xl ${course.bgColor} ${course.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              <course.icon className="w-7 h-7" />
            </div>
            <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none font-bold text-[10px] uppercase tracking-wider">
              {course.category}
            </Badge>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {course.name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
            {course.description}
          </p>

          {/* Footer Info */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-50">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {course.duration}
            </span>
            <Link href={`/courses/${course.slug}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
        
            <div className="flex items-center gap-1 text-sm font-bold text-indigo-600 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
              Join Now <ArrowUpRight className="w-4 h-4" />
            </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Start Your Tech Journey Today 🚀
            </h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto font-light">
              Join thousands of successful students and transform your career. New batches are starting soon!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-indigo-900 hover:bg-indigo-50 px-10 py-7 font-bold text-lg shadow-xl shadow-white/10">
                <Link href="/Contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full  border-indigo-400 hover:text-white hover:bg-indigo-800 px-10 py-7 font-bold text-lg">
                <a href="https://wa.me/917817065116" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  )
}

 