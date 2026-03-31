"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Campus",
      color: "bg-blue-500",
      details: ["Career Mantra Coaching", "Near Head Post Office", "Civil Lines, Etawah", "UP - 206001"],
    },
    {
      icon: Phone,
      title: "Direct Connect",
      color: "bg-indigo-500",
      details: ["+91 9149089121", "+91 8279853303", "Mon - Sat: 9AM - 7PM"],
    },
    {
      icon: Mail,
      title: "Email Support",
      color: "bg-emerald-500",
      details: ["info@careermantra.com", "careermantrainfo@gmail.com"],
    },
  ];

  return (
    <main className="bg-[#fcfcfd] min-h-screen">
      {/* --- HERO SECTION: Minimal & Clean --- */}
      <section className="relative pt-24 pb-16 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left max-w-3xl"
          >
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-6 px-4 py-1">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let&apos;s build your <span className="text-blue-500">future</span> together.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Have a question about a course or need career advice? Our experts are 
              just a message away. Reach out today for a brighter tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- QUICK CONTACT CARDS --- */}
      <section className="py-12 px-6 -mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer group">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200`}>
                    <item.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((line, i) => (
                      <p key={i} className="text-slate-600 text-sm font-medium">{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FORM & MAP SPLIT SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
                  <p className="text-slate-500">Expect a response within 12 working hours.</p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Right: Map & Support Info */}
            <div className="lg:col-span-5 space-y-10">
              {/* Map Preview */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <Card className="relative overflow-hidden rounded-[2.5rem] border-none shadow-lg">
                   <div className="h-[300px] bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                      <div className="bg-white p-4 rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform">
                        <MapPin className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Visit our Campus</h4>
                      <p className="text-sm text-slate-500 mb-6">Experience our high-tech labs in person.</p>
                      <Button variant="outline" className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50">
                        Get Directions <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                   </div>
                </Card>
              </div>

              {/* Support Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MessageSquare, t: "Quick Chat", d: "WhatsApp support" },
                  { icon: Award, t: "Free Demo", d: "Book a trial class" }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                    <feature.icon className="w-6 h-6 text-blue-500 mb-3" />
                    <h5 className="font-bold text-slate-900 text-sm">{feature.t}</h5>
                    <p className="text-xs text-slate-500">{feature.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION: Simple & Professional --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Common Questions</h2>
            <p className="text-slate-500">Everything you need to know about starting your journey.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do I enroll for NIELIT O Level?", a: "You can visit our center with your documents or call our counselor for direct registration process." },
              { q: "Are there flexible batch timings?", a: "Yes, we offer early morning (7 AM) to late evening (7 PM) batches including special weekend classes for working professionals." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-100 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-slate-900">{faq.q}</h3>
                  <span className="bg-slate-100 rounded-full p-1 group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
           <div className="text-left relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Prefer a direct talk?</h2>
              <p className="text-blue-100">Our senior counselors are available for one-on-one sessions.</p>
           </div>
           <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold shadow-xl">
             Call Admissions <Phone className="ml-2 w-5 h-5" />
           </Button>
        </div>
      </section>
    </main>
  );
}