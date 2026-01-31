"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
  "/gallery/img1.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpeg",
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg",
  "/gallery/img16.jpeg",
  "/gallery/img7.jpeg",
  "/gallery/img8.jpeg",
  "/gallery/img9.jpeg",
  "/gallery/img10.jpeg",
  "/gallery/img11.jpeg",
  "/gallery/img12.jpeg",
  "/gallery/img13.jpeg",
  "/gallery/img14.jpeg",
  "/gallery/img15.jpeg",
  "/gallery/img16.jpeg",
  "/gallery/img17.jpeg",
  "/gallery/img18.jpeg",
  "/gallery/img19.jpeg",
  "/gallery/img20.jpeg",
  "/gallery/img21.jpeg",
  "/gallery/img22.jpeg",
  "/gallery/img23.jpeg",
  "/gallery/img24.jpeg",
  "/gallery/img25.jpeg",
  "/gallery/img26.jpeg",
  "/gallery/img27.jpeg",
  "/gallery/img28.jpeg",
  "/gallery/img29.jpeg",
  
]

export default function GalleryPage() {
  const [open, setOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* ===== Heading ===== */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-indigo-700">Gallery</span>
        </h1>
        <p className="text-gray-600">
          Glimpses of our classrooms, students & activities
        </p>
      </div>

      {/* ===== Gallery Grid ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-xl transition"
            onClick={() => {
              setActiveImage(src)
              setOpen(true)
            }}
          >
            <Image
              src={src}
              alt="Gallery Image"
              width={400}
              height={300}
              className="object-cover w-full h-56 hover:scale-105 transition"
            />
          </Card>
        ))}
      </div>

      {/* ===== Lightbox ===== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-transparent border-none">
          {activeImage && (
            <Image
              src={activeImage}
              alt="Gallery Preview"
              width={900}
              height={600}
              className="rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

    </section>
  )
}
