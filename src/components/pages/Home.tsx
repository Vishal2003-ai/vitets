import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="bg-background text-foreground">

      {/* HERO SECTION */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn <span className="text-indigo-500">Modern Web Development</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Build real-world projects using React, Tailwind, Next.js, and more.
          Upgrade your skills with industry-ready courses.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </Button>
          <Button variant="outline">
            View Courses
          </Button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-background border-gray-800">
            <CardHeader>
              <CardTitle>Practical Learning</CardTitle>
              <CardDescription>
                Learn by building real-world projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              Hands-on experience with modern tools and frameworks.
            </CardContent>
          </Card>

          <Card className="bg-background border-gray-800">
            <CardHeader>
              <CardTitle>Industry Ready</CardTitle>
              <CardDescription>
                Skills companies are hiring for.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              Focused curriculum designed for job readiness.
            </CardContent>
          </Card>

          <Card className="bg-background border-gray-800">
            <CardHeader>
              <CardTitle>Expert Guidance</CardTitle>
              <CardDescription>
                Learn from experienced developers.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              Clear explanations and mentorship support.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* COURSES / SERVICES */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-background border-gray-800 hover:border-indigo-500 transition">
            <CardHeader>
              <CardTitle>React + Tailwind</CardTitle>
              <CardDescription>
                Frontend mastery
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              Build fast, responsive UIs using modern React tools.
            </CardContent>
          </Card>

          <Card className="bg-background border-gray-800 hover:border-indigo-500 transition">
            <CardHeader>
              <CardTitle>Full Stack Development</CardTitle>
              <CardDescription>
                MERN / Next.js
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              Backend + frontend complete development roadmap.
            </CardContent>
          </Card>

          <Card className="bg-background border-gray-800 hover:border-indigo-500 transition">
            <CardHeader>
              <CardTitle>UI/UX with shadcn</CardTitle>
              <CardDescription>
                Modern UI systems
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              Build clean and scalable design systems.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Start Your Journey Today 🚀
        </h2>
        <p className="mt-4 text-gray-400">
          Learn skills that matter. Build projects that impress.
        </p>

        <Button className="mt-8 bg-indigo-600 hover:bg-indigo-700">
          Join Now
        </Button>
      </section>

    </main>
  )
}
