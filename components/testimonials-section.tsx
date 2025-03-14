"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Patient",
    content:
      "Dr. Sangita's treatment for my chronic migraines has been life-changing. After years of conventional medicine with little relief, her homeopathic approach has reduced my episodes by 80%.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Parent of Patient",
    content:
      "My son's eczema was severe and nothing seemed to help. Dr. Sangita's gentle approach and personalized remedies have cleared his skin completely. We're so grateful!",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Patient",
    content:
      "I've been dealing with anxiety for years. Dr. Sangita's holistic treatment plan addressed not just my symptoms but the root causes. I feel more balanced than I have in a decade.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "Patient",
    content:
      "After struggling with digestive issues for years, Dr. Sangita's treatment has restored my gut health. Her approach is thorough and she takes time to understand your complete health history.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    hasVideo: false,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Patients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Real stories from people who have experienced the benefits of homeopathic treatment.
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-1 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="text-lg mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    {testimonial.hasVideo && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" className="ml-auto">
                            <Play className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <div className="aspect-video bg-muted flex items-center justify-center">
                            <p className="text-muted-foreground">Video testimonial would play here</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

