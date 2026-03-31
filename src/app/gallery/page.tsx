"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Maximize2, X } from "lucide-react"

const images = [
  "/gallery/img1.jpeg", "/gallery/img2.jpeg", "/gallery/img3.jpeg",
  "/gallery/img4.jpeg", "/gallery/img5.jpeg", "/gallery/img16.jpeg",
  "/gallery/img7.jpeg", "/gallery/img8.jpeg", "/gallery/img9.jpeg",
  "/gallery/img10.jpeg", "/gallery/img11.jpeg", "/gallery/img12.jpeg",
  "/gallery/img13.jpeg", "/gallery/img14.jpeg", "/gallery/img15.jpeg",
  "/gallery/img17.jpeg", "/gallery/img18.jpeg", "/gallery/img19.jpeg",
  "/gallery/img20.jpeg", "/gallery/img21.jpeg", "/gallery/img22.jpeg",
  "/gallery/img23.jpeg", "/gallery/img24.jpeg", "/gallery/img25.jpeg",
  "/gallery/img26.jpeg", "/gallery/img27.jpeg", "/gallery/img28.jpeg",
  "/gallery/img29.jpeg",
]

export default function GalleryPage() {
  const [open, setOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-6">
      
      {/* ===== Heading with Animation ===== */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <Badge variant="outline" className="mb-4 border-indigo-200 text-indigo-600 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
          Life at Career Mantra
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-slate-900">
          Our Visual <span className="text-indigo-600">Journey</span>
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-lg">
          Explore the vibrant culture, advanced labs, and successful moments of our students.
        </p>
      </motion.div>

      {/* ===== Modern Responsive Grid ===== */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className="relative group overflow-hidden border-none rounded-2xl cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => {
                setActiveImage(src)
                setOpen(true)
              }}
            >
              <Image
                src={src}
                alt={`Career Mantra Gallery ${index + 1}`}
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ===== Enhanced Lightbox (Shadcn Dialog) ===== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl h-[90vh] p-0 bg-black/95 border-none flex items-center justify-center overflow-hidden">
          <DialogTitle className="sr-only">Gallery Image Preview</DialogTitle>
          
          <AnimatePresence>
            {activeImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full flex items-center justify-center p-4"
              >
                <Image
                  src={activeImage}
                  alt="Gallery Preview"
                  fill
                  className="object-contain"
                  quality={100}
                />
                
                {/* Close Hint */}
                <button 
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

    </section>
  )
}