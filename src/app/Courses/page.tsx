"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Clock, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  BookOpen,
  Award
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Data import (As per your request)
import { courseDetails } from "@/data/courses";

// Static data for Government Certifications (From your first code)
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
  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* ===== HEADER SECTION (Merged UI) ===== */}
      <section className="relative bg-[#1a2e44] text-white py-24 overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white border-none px-4 py-1">
              Elevate Your Career
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Our <span className="text-orange-500">Professional</span> Courses
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Career Mantra offers industry-aligned programs to help you master the most in-demand technical skills and get certified.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        
        {/* SECTION 1: GOVT CERTIFICATIONS */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
             <div className="h-8 w-1 bg-orange-500 rounded-full" />
             <h2 className="text-2xl font-bold text-[#1a2e44]">Government Recognized Programs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {govtCertifications.map((course, idx) => (
              <CourseCard key={idx} course={course} isGovt />
            ))}
          </div>
        </div>

        {/* SECTION 2: PROFESSIONAL COURSES (From courseDetails) */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
             <div className="h-8 w-1 bg-blue-600 rounded-full" />
             <h2 className="text-2xl font-bold text-[#1a2e44]">Industry Specializations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseDetails.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>

      </div>

      {/* ===== WHY CHOOSE US (From first code) ===== */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: GraduationCap, title: "Expert Instructors", desc: "Learn from industry veterans", color: "text-orange-500" },
              { icon: BookOpen, title: "Practical Learning", desc: "Hands-on projects and labs", color: "text-blue-500" },
              { icon: Award, title: "Global Certification", desc: "Recognized by top organizations", color: "text-purple-500" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`p-4 rounded-2xl bg-slate-50 mb-4 ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Course Card Component with Merged UI
function CourseCard({ course, isGovt = false }: { course: any; isGovt?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-none shadow-md overflow-hidden bg-white">
        {/* Decorative Top Bar */}
        <div className={`h-1.5 w-full ${isGovt ? 'bg-orange-500' : 'bg-blue-600'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl transition-colors duration-300 text-3xl 
              ${isGovt 
                ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white' 
                : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              }`}>
              <GraduationCap size={24} />
            </div>
            <Badge variant="secondary" className="bg-slate-100 text-[#1a2e44] font-medium py-1 px-3">
              <Clock size={14} className="mr-1.5 text-orange-500" /> {course.duration}
            </Badge>
          </div>
          
          <CardTitle className="text-xl font-bold text-[#1a2e44] group-hover:text-orange-600 transition-colors min-h-[56px] flex items-center">
            {course.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {course.description || `Master industry-standard tools and techniques with our expert-led ${course.title} course.`}
          </p>
          
          {/* Subtle Feature List */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-xs text-slate-500">
              <CheckCircle2 size={14} className="mr-2 text-green-500" />
              Hands-on Projects
            </div>
            <div className="flex items-center text-xs text-slate-500">
              <CheckCircle2 size={14} className="mr-2 text-green-500" />
              Placement Assistance
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t border-slate-50">
          <Link href={`/courses/${course.slug}`} className="w-full">
            <Button className={`w-full transition-all group-hover:gap-3 
              ${isGovt ? 'bg-[#1a2e44] hover:bg-orange-600' : 'bg-blue-700 hover:bg-[#1a2e44]'}`}>
              View Details <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}