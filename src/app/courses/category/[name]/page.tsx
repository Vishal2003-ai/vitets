import { courseDetails } from "@/data/courses";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Download, ArrowRight, BookOpen, Clock } from "lucide-react";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  // URL name formatting (e.g., "web-development" to "Web Development")
  const decodedName = decodeURIComponent(name).replace(/-/g, ' ');

  const filteredCourses = courseDetails.filter(
    (c) => c.category?.toLowerCase() === decodedName.toLowerCase()
  );

  if (filteredCourses.length === 0) return notFound();

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1a2e44] text-white py-20">
        {/* Background Decorative Accent */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-orange-400 text-sm font-medium transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Courses
          </Link>

          <div className="max-w-3xl">
            <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 mb-4 hover:bg-orange-500/10">
              Specialized Learning Track
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold capitalize tracking-tight leading-tight">
              {decodedName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Programs</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Career Mantra offers specialized training in <span className="text-white font-medium">{decodedName}</span> to make you industry-ready with 100% practical exposure and real-world projects.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2e44]">
              Available Courses ({filteredCourses.length})
            </h2>
            <p className="text-sm text-slate-500">Explore comprehensive curricula designed for all skill levels</p>
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-8">
          {filteredCourses.map((course) => (
            <div
              key={course.slug}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-12 gap-0">
                
                {/* Left Visual Banner */}
                <div className="md:col-span-4 bg-gradient-to-br from-slate-100 to-slate-200/60 p-8 sm:p-12 flex flex-col items-center justify-center relative overflow-hidden group-hover:from-orange-50 group-hover:to-orange-100/50 transition-colors">
                  <div className="text-7xl sm:text-8xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                    {course.icon}
                  </div>
                  <Badge variant="outline" className="mt-6 bg-white/80 backdrop-blur-sm border-slate-300 text-slate-700 flex items-center gap-1.5 font-medium">
                    <Clock size={14} className="text-orange-500" />
                    {course.duration}
                  </Badge>
                </div>

                {/* Right Content Area */}
                <div className="md:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Course Category & Title */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                        Practical Training
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1a2e44] mb-3 group-hover:text-orange-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                      {course.details} Is course mein hum latest tools jaise{" "}
                      <span className="font-semibold text-slate-800">
                        {course.tools.join(", ")}
                      </span>{" "}
                      par focus karenge.
                    </p>

                    {/* Tools / Technologies Badges */}
                    {course.tools && course.tools.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="text-xs text-slate-400 font-medium mr-1">Tools covered:</span>
                        {course.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Key Highlights / Syllabus Preview */}
                    <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 mb-8">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <BookOpen size={14} /> Key Highlights
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {course.syllabus.slice(0, 4).map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                    <Link href={`/courses/${course.slug}`} className="flex-1 sm:flex-none">
                      <Button className="w-full sm:w-auto bg-[#1a2e44] hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm">
                        Full Course Details
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-slate-300 hover:border-orange-500 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Download Syllabus
                    </Button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}