"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Busy Professional",
    quote: "This tool has saved me hours every week. I can't imagine life without it!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Digital Nomad",
    quote: "SimplifyAI helps me stay on top of my emails and news while I'm traveling. It's a game-changer.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    quote: "The Twitter summaries are incredible. I can keep up with industry trends without spending hours scrolling.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div className="mx-auto w-20 h-20 relative mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-lg italic mb-6 text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                <h4 className="font-bold text-blue-700">{testimonial.name}</h4>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full hidden md:flex border-blue-600 text-blue-600 hover:bg-blue-50"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full hidden md:flex border-blue-600 text-blue-600 hover:bg-blue-50"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

