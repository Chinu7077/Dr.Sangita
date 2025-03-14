import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Principles of Homeopathy",
    description:
      "Learn about the fundamental principles that make homeopathy an effective healing system.",
    image: "/hm.jpeg?height=200&width=400",
    date: "March 10, 2025",
    readTime: "5 min read",
    category: "Education",
    featured: true,
  },
  {
    id: 2,
    title: "Natural Remedies for Seasonal Allergies",
    description:
      "Discover how homeopathic treatments can provide relief from seasonal allergies without side effects.",
    image: "/nm.jpg?height=200&width=400",
    date: "March 5, 2025",
    readTime: "4 min read",
    category: "Remedies",
    featured: false,
  },
  {
    id: 3,
    title: "Boosting Immunity: A Homeopathic Approach",
    description:
      "Strengthen your body's natural defenses with these homeopathic tips and remedies.",
    image: "/ik.jpg?height=200&width=400",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Wellness",
    featured: true,
  },
  {
    id: 4,
    title: "Homeopathy for Children: Safe and Gentle Care",
    description:
      "How homeopathic remedies can address common childhood ailments without harmful side effects.",
    image: "/cs.png?height=200&width=400",
    date: "February 20, 2025",
    readTime: "7 min read",
    category: "Pediatric",
    featured: false,
  },
  {
    id: 5,
    title: "Managing Chronic Pain with Homeopathy",
    description:
      "Alternative approaches to pain management that address the root causes rather than just symptoms.",
    image: "/yu.jpg?height=200&width=400",
    date: "February 15, 2025",
    readTime: "5 min read",
    category: "Remedies",
    featured: false,
  },
  {
    id: 6,
    title: "Women's Health: Hormonal Balance Through Homeopathy",
    description:
      "Natural solutions for PMS, menopause, and other hormonal challenges women face.",
    image: "/im.png?height=200&width=400",
    date: "February 10, 2025",
    readTime: "6 min read",
    category: "Women's Health",
    featured: true,
  },
  {
    id: 7,
    title: "The Science Behind Homeopathic Dilutions",
    description:
      "Understanding how ultra-diluted substances can have powerful healing effects.",
    image: "/101.png?height=200&width=400",
    date: "February 5, 2025",
    readTime: "8 min read",
    category: "Education",
    featured: false,
  },
  {
    id: 8,
    title: "Stress Management: Homeopathic Solutions for Modern Life",
    description:
      "Effective remedies and lifestyle changes to combat the effects of chronic stress.",
    image: "/606.jpg?height=200&width=400",
    date: "January 28, 2025",
    readTime: "5 min read",
    category: "Wellness",
    featured: false,
  },
  {
    id: 9,
    title: "Digestive Health: A Homeopathic Perspective",
    description:
      "How to address common digestive issues with targeted homeopathic treatments.",
    image: "/707.jpg?height=200&width=400",
    date: "January 20, 2025",
    readTime: "6 min read",
    category: "Remedies",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Health & Wellness Blog
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Expert insights, tips, and information about homeopathic
                treatments and holistic health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="w-full py-8 bg-background border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full bg-background pl-8"
              />
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="remedies">Remedies</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((post) => post.featured)
              .slice(0, 3)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-4 right-4">
                      {post.category}
                    </Badge>
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
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
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
        </div>
      </section>

      {/* All Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-4 right-4">
                    {post.category}
                  </Badge>
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
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
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
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
    </main>
  );
}
