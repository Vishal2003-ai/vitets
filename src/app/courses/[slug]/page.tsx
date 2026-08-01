import { courseDetails } from "@/data/courses";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Clock, 
  BarChart2, 
  Wrench, 
  Briefcase, 
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Award,
  Calendar,
  MessageCircle,
  FileText
} from "lucide-react";
import { notFound } from "next/navigation";

export default async function DetailedCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseDetails.find((c) => c.slug === slug);

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-[#1a2e44] text-white py-16 lg:py-20">
        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb / Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-8 flex-wrap">
            <Link href="/courses" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> All Courses
            </Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="capitalize text-slate-400">{course.category || "Program"}</span>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-orange-400 font-medium truncate max-w-[200px] sm:max-w-none">{course.title}</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-orange-500/15 text-orange-400 border border-orange-500/30 px-3 py-1 mb-4 hover:bg-orange-500/20 text-xs sm:text-sm tracking-wide">
              <Sparkles size={14} className="mr-1.5 inline-block text-orange-400" />
              Career Mantra Certified Program
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {course.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              {course.details || "Gain industry-ready skills with hands-on projects, expert mentorship, and comprehensive placement assistance."}
            </p>

            {/* Quick Metadata Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Clock size={18} className="text-orange-400" />
                <span><strong className="text-slate-200">Duration:</strong> {course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <BarChart2 size={18} className="text-orange-400" />
                <span><strong className="text-slate-200">Level:</strong> {course.level}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Award size={18} className="text-orange-400" />
                <span>Certified Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Main Content Area */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column: Course Curriculum & Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Syllabus Section */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-[#1a2e44] flex items-center gap-3">
                  <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
                  Course Syllabus
                </h2>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {course.syllabus.length} Modules
                </span>
              </div>

              <div className="grid gap-3">
                {course.syllabus.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100 group hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-200"
                  >
                    <span className="bg-[#1a2e44] text-white text-xs font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors shadow-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-slate-800 font-medium text-sm sm:text-base leading-snug">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools Covered Section */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a2e44] mb-2 flex items-center gap-2.5">
                <Wrench className="text-orange-500" size={24} />
                Tools & Technologies You'll Master
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Hands-on practical experience with the most in-demand software and platforms.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {course.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-slate-100 hover:bg-orange-500 hover:text-white text-[#1a2e44] border border-slate-200 transition-colors font-medium rounded-xl"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Career Opportunities Section */}
            <section className="bg-gradient-to-br from-orange-50/80 to-amber-50/40 p-6 sm:p-8 rounded-2xl border border-orange-200/60 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a2e44] mb-2 flex items-center gap-2.5">
                <Briefcase className="text-orange-500" size={24} />
                Target Career Roles
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Upon successfully completing this program, you can apply for job profiles like:
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {course.jobRoles.map((role) => (
                  <div key={role} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-orange-100 text-slate-800 font-medium text-sm shadow-xs">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Sidebar / Call To Action */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-lg bg-white space-y-6">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                  Admissions Open
                </span>
                <h3 className="text-2xl font-bold text-[#1a2e44] mt-2">Ready to Upgrade?</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Reserve your seat or book a free 1-on-1 demo session with our trainers.
                </p>
              </div>

              {/* Batch Highlights */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-sm py-1 border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 flex items-center gap-1.5"><Calendar size={15} /> Batch Mode</span>
                  <span className="font-semibold text-slate-800">Offline / Hybrid</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 flex items-center gap-1.5"><Clock size={15} /> Next Batch</span>
                  <span className="font-semibold text-orange-600">Starting Monday</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1">
                  <span className="text-slate-500 flex items-center gap-1.5"><Award size={15} /> Placement</span>
                  <span className="font-semibold text-emerald-600">100% Assistance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-[#1a2e44] hover:bg-orange-600 text-white font-medium h-12 text-base rounded-xl transition-colors shadow-sm">
                  Book Free Demo Class
                </Button>
                
                <Button variant="outline" className="w-full border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium h-11 text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                  <MessageCircle size={18} className="text-emerald-600" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
                  <FileText size={13} /> Includes ISO Recognized Certification
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}