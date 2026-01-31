import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/dist/client/link"



export default function Home() {
  return (
    <main className="w-full">
      
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Badge className="mb-4 bg-yellow-400 text-indigo-900">
              Govt. Recognized Courses
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build Your Career With <br />
              <span className="text-yellow-400">
                Career Mantra Education Center
              </span>
            </h1>

            <p className="text-gray-200 text-lg mb-8">
              Practical computer education with certification, expert faculty
              and complete career guidance for students & job seekers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300">
                <a
                  href="https://wa.me/917817065116?text=Hello%20I%20want%20to%20take%20admission%20in%20Career%20Mantra"
                  target="_blank"
                >
                  Admission Open
                </a>
              </Button>

              <Button variant="outline" size="lg" className=" border-gray-300 bg-indigo-900 hover:bg-gray-300">
                View Courses
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/student.png"
              alt="Student"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { title: "10+", desc: "Years Experience" },
            { title: "5000+", desc: "Students Trained" },
            { title: "15+", desc: "Professional Courses" },
            { title: "100%", desc: "Career Support" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="py-8">
                <h3 className="text-3xl font-bold text-indigo-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Popular Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "O Level",
              "CCC",
              "DCA / ADCA",
              "Web Development",
              "Graphic Designing",
              "Tally + GST",
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    {course}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Job-oriented practical training with certification.
                  </p>
                  <Button variant="link" className="px-0">
                    Learn More →
                  </Button>
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

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Faculty",
                desc: "Highly experienced & practical trainers",
              },
              {
                title: "Govt Certification",
                desc: "Recognized & valid certificates",
              },
              {
                title: "Affordable Fees",
                desc: "Quality education at minimum cost",
              },
              {
                title: "Career Guidance",
                desc: "Job, freelancing & interview support",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <CardContent className="py-8">
                  <h3 className="font-semibold text-lg mb-2">
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

      {/* ================= CTA ================= */}
      <section className="bg-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Start Your Bright Future Today 🚀
          </h2>

          <p className="text-gray-200 mb-8">
            Limited seats available. Enroll now & become industry ready.
          </p>

          <Button size="lg" className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300">
            <Link href="/Contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      
    </main>
  )
}
