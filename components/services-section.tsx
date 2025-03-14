"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, TreesIcon as Lungs, Thermometer, Stethoscope, Pill } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Chronic Disease Management",
    description: "Long-term care and management for chronic conditions using personalized homeopathic remedies.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    popular: true,
  },
  {
    id: 2,
    title: "Mental Health Support",
    description: "Holistic approach to anxiety, depression, stress, and other mental health concerns.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    popular: false,
  },
  {
    id: 3,
    title: "Respiratory Health",
    description: "Treatment for asthma, allergies, and other respiratory conditions with natural remedies.",
    icon: <Lungs className="h-8 w-8 text-primary" />,
    popular: false,
  },
  {
    id: 4,
    title: "Pediatric Care",
    description: "Gentle and effective treatments for children's health issues and developmental concerns.",
    icon: <Thermometer className="h-8 w-8 text-primary" />,
    popular: true,
  },
  {
    id: 5,
    title: "Women's Health",
    description: "Specialized care for women's health issues including hormonal imbalances and reproductive health.",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    popular: false,
  },
  {
    id: 6,
    title: "Preventive Care",
    description: "Strengthen your immune system and prevent illness with constitutional homeopathic treatment.",
    icon: <Pill className="h-8 w-8 text-primary" />,
    popular: false,
  },
]

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive homeopathic treatments tailored to your unique health needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`overflow-hidden transition-all duration-300 ${
                hoveredCard === service.id ? "shadow-lg scale-[1.02]" : "shadow-md"
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-primary/10 p-3">{service.icon}</div>
                  {service.popular && <Badge variant="secondary">Popular</Badge>}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/services/${service.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="secondary">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

