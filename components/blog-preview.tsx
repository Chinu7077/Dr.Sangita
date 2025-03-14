import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Principles of Homeopathy",
    description: "Learn about the fundamental principles that make homeopathy an effective healing system.",
    image: "/707.jpg?height=200&width=400",
    date: "March 10, 2025",
    readTime: "5 min read",
    category: "Education",
  },
  {
    id: 2,
    title: "Natural Remedies for Seasonal Allergies",
    description: "Discover how homeopathic treatments can provide relief from seasonal allergies without side effects.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 5, 2025",
    readTime: "4 min read",
    category: "Remedies",
  },
  {
    id: 3,
    title: "Boosting Immunity: A Homeopathic Approach",
    description: "Strengthen your body's natural defenses with these homeopathic tips and remedies.",
    image: "/placeholder.svg?height=200&width=400",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Wellness",
  },
]

export default function BlogPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Health & Wellness Blog</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Expert insights, tips, and information about homeopathic treatments and holistic health.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                <Badge className="absolute top-4 right-4">{post.category}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground gap-4 mb-2">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/blog/${post.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blog">
            <Button size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

