"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Clock, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen,
  Award,
  Search,
  Sparkles,
  Users,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Data import
import { courseDetails } from "@/data/courses";

// Government Certifications Data
const govtCertifications = [
  {
    title: "Course on Computer Concepts (CCC)",
    duration: "3 Months",
    level: "Beginner",
    slug: "ccc",
    description: "Essential digital skills for government exams and basic computer literacy.",
  },
  {
    title: "O Level Computer Course (NIELIT)",
    duration: "1 Year",
    level: "Intermediate",
    slug: "o-level",
    description: "Professional IT course covering Python, Web Design, and Networking.",
  },
  {
    title: "ADCA",
    duration: "1 Year",
    level: "Advanced",
    slug: "adca",
    description: "Advanced Diploma covering Tally GST, DTP, and Office Automation.",
  },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "govt" | "industry">("all");

  // Combined and filtered data
  const filteredGovt = govtCertifications.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIndustry = courseDetails.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white pb-24">
      
      {/* ===== HEADER / HERO SECTION ===== */}
      <section className="relative bg-slate-900 border-b border-slate-800 py-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/30 px-4 py-1.5 rounded-full backdrop-blur-md text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline text-orange-400" /> Transform Your Future Today
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
              Master In-Demand <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Tech & Govt</span> Skills
            </h1>
            
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Industry-aligned certifications, government-recognized programs, and hands-on training to build a high-growth career.
            </p>

            {/* Live Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by course name or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-slate-800/80 border-slate-700/80 rounded-2xl text-white placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-orange-500 shadow-xl backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTER TABS & MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 mt-12 relative z-20 max-w-7xl">
        
        {/* Navigation / Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Programs" },
            { id: "govt", label: "Govt Recognized" },
            { id: "industry", label: "Industry Specializations" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: GOVT CERTIFICATIONS */}
        {(activeTab === "all" || activeTab === "govt") && filteredGovt.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-800/80 pb-4">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Government Recognized Programs</h2>
                <p className="text-xs text-slate-400 mt-0.5">Certifications for competitive exams & job eligibility</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGovt.map((course, idx) => (
                <CourseCard key={idx} course={course} isGovt />
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: PROFESSIONAL COURSES */}
        {(activeTab === "all" || activeTab === "industry") && filteredIndustry.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-800/80 pb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Industry Specializations</h2>
                <p className="text-xs text-slate-400 mt-0.5">Career-focused technology and management courses</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustry.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* No Results Found */}
        {filteredGovt.length === 0 && filteredIndustry.length === 0 && (
          <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
            <p className="text-slate-400">Try searching for another keyword or reset the search query.</p>
            <Button onClick={() => setSearchQuery("")} variant="outline" className="mt-6 border-slate-700 text-white">
              Reset Search
            </Button>
          </div>
        )}

      </div>

      {/* ===== WHY CHOOSE US STATS SECTION ===== */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-800/80 my-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: GraduationCap, title: "Expert Instructors", desc: "Learn from veterans with hands-on domain experience.", color: "text-orange-400", bg: "bg-orange-500/10" },
              { icon: BookOpen, title: "Practical Learning", desc: "Real-world projects, live labs, and capstone assignments.", color: "text-blue-400", bg: "bg-blue-500/10" },
              { icon: Award, title: "Global Certification", desc: "Industry accredited credentials recognized worldwide.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENROLLMENT CTA BANNER ===== */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Need Guidance Choosing a Course?</h3>
              <p className="text-orange-100 max-w-xl">Talk to our career advisors and get personalized recommendations tailored to your goals.</p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 font-bold px-8 py-6 rounded-2xl shadow-xl transition-transform hover:scale-105">
                Get Free Counseling <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}

// Reusable Enhanced Course Card
function CourseCard({ course, isGovt = false }: { course: any; isGovt?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col justify-between bg-slate-900/90 border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl overflow-hidden relative">
        
        {/* Top Accent Line */}
        <div className={`h-1 w-full ${isGovt ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`} />

        <div>
          <CardHeader className="p-6 pb-4">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3.5 rounded-2xl transition-colors duration-300 
                ${isGovt 
                  ? 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white' 
                  : 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                <GraduationCap size={24} />
              </div>
              
              <div className="flex flex-col items-end gap-1.5">
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border border-slate-700/60 font-medium py-1 px-3 rounded-full text-xs">
                  <Clock size={12} className="mr-1.5 text-orange-400 inline" /> {course.duration}
                </Badge>
                {course.level && (
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold px-2">
                    {course.level}
                  </span>
                )}
              </div>
            </div>
            
            <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2 min-h-[56px] flex items-center">
              {course.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
              {course.description || `Master industry-standard tools and techniques with our expert-led ${course.title} course.`}
            </p>
            
            {/* Feature Checkmarks */}
            <div className="space-y-2 border-t border-slate-800/60 pt-4">
              <div className="flex items-center text-xs text-slate-400">
                <CheckCircle2 size={14} className="mr-2 text-emerald-400 flex-shrink-0" />
                Hands-on Projects & Live Labs
              </div>
              <div className="flex items-center text-xs text-slate-400">
                <CheckCircle2 size={14} className="mr-2 text-emerald-400 flex-shrink-0" />
                Dedicated Placement Assistance
              </div>
            </div>
          </CardContent>
        </div>

        <CardFooter className="p-6 pt-0 border-t-0">
          <Link href={`/courses/${course.slug}`} className="w-full">
            <Button className={`w-full py-5 rounded-xl font-semibold transition-all duration-300 group/btn flex items-center justify-center gap-2
              ${isGovt 
                ? 'bg-slate-800 hover:bg-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/20' 
                : 'bg-slate-800 hover:bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-600/20'
              }`}>
              View Details 
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>

      </Card>
    </motion.div>
  );
}