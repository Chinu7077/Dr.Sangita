import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Play, Quote } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Patient",
    content:
      "Dr. Sangita's treatment for my chronic migraines has been life-changing. After years of conventional medicine with little relief, her homeopathic approach has reduced my episodes by 80%. I'm now able to enjoy my life without the constant fear of debilitating pain.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: true,
    category: "chronic",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Parent of Patient",
    content:
      "My son's eczema was severe and nothing seemed to help. Dr. Sangita's gentle approach and personalized remedies have cleared his skin completely. We're so grateful! The best part is that there were no side effects, unlike the steroid creams we had tried before.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: false,
    category: "skin",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Patient",
    content:
      "I've been dealing with anxiety for years. Dr. Sangita's holistic treatment plan addressed not just my symptoms but the root causes. I feel more balanced than I have in a decade. Her approach to mental health is comprehensive and effective.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: true,
    category: "mental",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "Patient",
    content:
      "After struggling with digestive issues for years, Dr. Sangita's treatment has restored my gut health. Her approach is thorough and she takes time to understand your complete health history. I appreciate how she explained everything in detail and answered all my questions.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    hasVideo: false,
    category: "digestive",
  },
  {
    id: 5,
    name: "Meera Kapoor",
    role: "Patient",
    content:
      "The homeopathic treatment for my hormonal imbalance has been remarkably effective. Dr. Sangita's expertise in women's health issues is evident in her approach. My symptoms have improved significantly, and I feel like myself again after years of struggle.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: false,
    category: "women",
  },
  {
    id: 6,
    name: "Arjun Singh",
    role: "Patient",
    content:
      "I was skeptical about homeopathy at first, but after suffering from chronic back pain for years with no relief from conventional treatments, I decided to give it a try. Dr. Sangita's treatment has reduced my pain by 70%, and I'm now able to be active again.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: true,
    category: "pain",
  },
  {
    id: 7,
    name: "Neha Reddy",
    role: "Patient",
    content:
      "Dr. Sangita's support during my pregnancy was invaluable. Her remedies helped with morning sickness, back pain, and anxiety without any risk to my baby. I had a smooth pregnancy and delivery thanks to her care and guidance.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: false,
    category: "women",
  },
  {
    id: 8,
    name: "Karan Malhotra",
    role: "Parent of Patient",
    content:
      "Our daughter had recurrent ear infections that weren't responding to antibiotics. Dr. Sangita's homeopathic approach not only cleared the current infection but has prevented recurrences. It's been over a year now without any ear problems.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: false,
    category: "pediatric",
  },
  {
    id: 9,
    name: "Sanjay Verma",
    role: "Patient",
    content:
      "My allergies were making life miserable, especially during seasonal changes. Dr. Sangita's constitutional treatment has significantly reduced my sensitivity. I can now enjoy outdoor activities without constant sneezing and itchy eyes.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    hasVideo: true,
    category: "allergy",
  },
  {
    id: 10,
    name: "Leela Krishnan",
    role: "Patient",
    content:
      "I've been seeing Dr. Sangita for my thyroid condition for the past year. Her treatment has helped stabilize my levels naturally, and I've been able to reduce my conventional medication under my endocrinologist's supervision. Her holistic approach has improved my overall health.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    hasVideo: false,
    category: "chronic",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Patient Testimonials</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Real stories from people who have experienced the benefits of homeopathic treatment with Dr. Sangita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="chronic">Chronic Disease</TabsTrigger>
                <TabsTrigger value="mental">Mental Health</TabsTrigger>
                <TabsTrigger value="women">Women's Health</TabsTrigger>
                <TabsTrigger value="pediatric">Pediatric</TabsTrigger>
                <TabsTrigger value="pain">Pain Management</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chronic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => t.category === "chronic")
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="mental" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => t.category === "mental")
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="women" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => t.category === "women")
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="pediatric" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => t.category === "pediatric")
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="pain" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => t.category === "pain")
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="flex mb-4">
          {Array(testimonial.rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
        </div>
        <div className="relative mb-6">
          <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
          <p className="text-lg relative z-10 pl-4">{testimonial.content}</p>
        </div>
        <div className="flex items-center mt-auto">
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
  )
}

