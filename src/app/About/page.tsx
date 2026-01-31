import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
      <main
      className="w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/gallery/img13.jpeg')",
      }}
    >
       <div className="min-h-screen bg-black/60"></div>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Badge className="mb-4 bg-yellow-400 text-indigo-900">
              Since Trusted Education Center
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-yellow-400">Career Mantra</span>
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
              Career Mantra Education Center is dedicated to providing
              quality computer and professional education, empowering
              students with skills for a successful career.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/log.webp"
              alt="Career Mantra Logo"
              width={260}
              height={260}
              className="bg-white p-4 rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Career Mantra Computer Education Center is a trusted institute
              offering certificate, diploma and professional computer courses.
              Our goal is to deliver practical, job-oriented education at
              affordable fees.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on industry-relevant syllabus, hands-on training
              and complete career development for students and job seekers.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/sheet.jpeg"
              alt="Career Mantra Classroom"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Courses & Programs
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "O Level Programme",
              "CCC – Course on Computer Concepts",
              "DCA / ADCA",
              "MDCA",
              "DFA – Financial Accounting",
              "Web Development",
              "Graphic Designing",
              "Tally ERP 9 with GST",
              "Programming (C, C++, Java)",
            ].map((course, i) => (
              <Card key={i} className="hover:shadow-xl transition">
                <CardContent className="py-6">
                  <h3 className="font-semibold text-indigo-700 mb-2">
                    {course}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Job-oriented course with certification & practical training.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Career Mantra?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "Experienced Faculty",
                desc: "Learn from skilled & certified trainers",
              },
              {
                title: "Govt Recognized Courses",
                desc: "Valid certification for career growth",
              },
              {
                title: "Practical Training",
                desc: "Hands-on experience with real projects",
              },
              {
                title: "Affordable Fees",
                desc: "Quality education at reasonable cost",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="py-8">
                  <h3 className="font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
      <section className="bg-indigo-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Start Your Career with Career Mantra
          </h2>

          <p className="text-gray-200 mb-6">
            📞 9149089121 &nbsp; | &nbsp; ✉️ careermantrainfo@gmail.com
          </p>

          <Button
            asChild
            className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

    </main>
  )
}
