"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Natural Healing with <span className="text-primary">Dr. Sangita</span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Discover the power of homeopathy for holistic wellness and personalized care for you and your family.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/consultation">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
          <div ref={ref} className="flex items-center justify-center">
            <motion.div
              className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted md:aspect-square lg:aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm" />
              <img
                src="/1.jpg?height=600&width=600"
                alt="Dr. Sangita"
                width={600}
                height={600}
                className="aspect-square h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

