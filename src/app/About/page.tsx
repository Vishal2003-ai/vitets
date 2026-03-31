"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { 
  CheckCircle2, 
  Award, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Mail,
  PhoneCall,
  Sparkles,
  ChevronRight,
  Globe
} from "lucide-react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <main ref={containerRef} className="w-full min-h-screen bg-[#fafafa] text-slate-900 selection:bg-indigo-100">
      
      {/* ================= PREMIUM HERO SECTION ================= */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/gallery/img13.jpeg" 
            alt="Hero Background" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617] z-10" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Badge variant="outline" className="mb-8 py-2 px-6 border-white/20 text-white backdrop-blur-md bg-white/5 rounded-full tracking-[0.2em] text-[10px] uppercase font-medium">
              <Sparkles className="w-3 h-3 mr-2 text-yellow-400 fill-yellow-400" />
              Established 2014 • ISO 9001:2015 Certified
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
              Future of <span className="text-indigo-400 italic font-serif">Learning</span> <br /> 
              Starts Here.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed opacity-80">
              Career Mantra is Northern India&apos;s leading tech-education hub, crafting digital careers through precision training and industry-standard excellence.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
               <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base font-semibold transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                 Explore Courses <ChevronRight className="ml-2 w-4 h-4" />
               </Button>
               <Button variant="outline" size="lg" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                 Our Success Stories
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO GRID STATS ================= */}
      <section className="py-20 -mt-20 relative z-30 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Students Trained", value: "5000+", icon: Users, color: "text-blue-500" },
            { label: "Course Modules", value: "45+", icon: Globe, color: "text-indigo-500" },
            { label: "Govt. Recognized", value: "100%", icon: ShieldCheck, color: "text-emerald-500" },
            { label: "Avg. Salary Hike", value: "40%", icon: Award, color: "text-orange-500" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all"
            >
              <div className={`p-4 rounded-2xl bg-slate-50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
              <span className="text-slate-500 text-sm font-medium mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CORE PHILOSOPHY (Split Layout) ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn} className="relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image 
                   src="/sheet.jpeg" 
                   alt="Learning Culture" 
                   width={800} 
                   height={1000} 
                   className="object-cover aspect-[4/5]"
                 />
               </div>
               {/* Abstract decorative element */}
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-[3rem] -z-10 hidden md:block" />
            </motion.div>

            <motion.div {...fadeIn}>
              <h3 className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-6 flex items-center gap-3">
                <div className="w-10 h-[1px] bg-indigo-600" /> Evolution of Skill
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] text-slate-900">
                Crafting <span className="text-indigo-600">Digital Minds</span> for the Modern Industry.
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                At Career Mantra, we don&apos;t just teach code; we foster a mindset of problem-solving. Our curriculum is live, breathing, and updated weekly to match the rapid shifts in technology.
              </p>
              
              <div className="grid gap-6">
                {[
                  { t: "Experiential Learning", d: "Move beyond theory with project-based modules." },
                  { t: "Global Certification", d: "Industry-standard credentials recognized worldwide." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="mt-1"><CheckCircle2 className="text-indigo-600 w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAM GRID (Modern Cards) ================= */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class Curricula</h2>
              <p className="text-slate-400 text-lg">Specialized tracks designed by industry professionals for career-focused individuals.</p>
            </div>
            <Button variant="link" className="text-indigo-400 font-bold p-0 text-lg hover:text-indigo-300">
              View All 45+ Courses <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Full Stack Development", tag: "Most Popular", desc: "MERN Stack mastery with cloud deployment." },
              { name: "NIELIT O Level", tag: "Govt Certified", desc: "Comprehensive foundation for govt services." },
              { name: "UI/UX Design", tag: "Creative", desc: "Design thinking with Figma and Adobe tools." },
              { name: "Data Analytics", tag: "Hot Trend", desc: "Python, SQL and PowerBI deep-dive." },
              { name: "Financial Accounting", tag: "Professional", desc: "Tally Prime with Advanced GST compliance." },
              { name: "Digital Growth", tag: "Strategy", desc: "Performance marketing and SEO mastery." },
            ].map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-pointer group"
              >
                <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-none px-3 py-1 text-[10px] uppercase font-bold tracking-wider">
                  {course.tag}
                </Badge>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{course.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {course.desc}
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Explore Syllabus <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PREMIUM CTA SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-[0_40px_100px_-20px_rgba(79,70,229,0.5)]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
            </div>

            <motion.div {...fadeIn} className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Ready to transform <br />your professional DNA?
              </h2>
              
              <div className="flex flex-wrap justify-center gap-12 mb-12">
                <div className="flex items-center gap-3 text-indigo-100">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <PhoneCall className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Call Admissions</p>
                    <p className="font-bold">+91 9149089121</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-indigo-100">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Direct Inquiry</p>
                    <p className="font-bold">careermantrainfo@gmail.com</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 rounded-full px-12 py-8 text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Get Your Career Roadmap
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}