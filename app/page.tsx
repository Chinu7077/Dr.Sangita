import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      {/* About Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Dr. Sangita</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                With over 5 years of experience in homeopathic medicine, Dr. Sangita has helped thousands of patients
                achieve better health naturally.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/about">
                <Button variant="outline" className="w-full">
                  Learn More About My Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Consultation CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Healing Journey?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Book an online consultation with Dr. Sangita and take the first step towards natural healing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/consultation">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
  

      {/* Blog Preview */}
    
    </main>
  )
}

