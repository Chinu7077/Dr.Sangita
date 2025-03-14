import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Dr. Sangita</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A dedicated homeopathic physician with over 5 years of experience in providing holistic healthcare
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted md:aspect-square lg:aspect-square">
                <img
                  src="/dr.jpg?height=600&width=600"
                  alt="Dr. Sangita"
                  width={600}
                  height={600}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
              <p className="text-muted-foreground md:text-xl">
                My path to becoming a homeopathic physician began with a personal healing experience that transformed my
                understanding of health and wellness.
              </p>
            </div>
            <div className="space-y-6 text-lg">
              <p>
                After completing my medical education with a specialization in homeopathy, I dedicated my career to
                helping patients find natural, gentle, and effective solutions to their health concerns. My approach
                combines classical homeopathic principles with modern medical knowledge to provide comprehensive care.
              </p>
              <p>
                I believe that true healing addresses not just the physical symptoms but also the emotional and mental
                aspects of health. This holistic perspective guides my practice and has helped thousands of patients
                achieve lasting wellness.
              </p>
              <p>
                Throughout my career, I have continued to expand my knowledge through research, advanced training, and
                collaboration with other healthcare professionals. This commitment to ongoing education ensures that my
                patients receive the most effective and up-to-date care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Timeline</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                My educational background and professional milestones.
              </p>
            </div>
          </div>

          <div className="mt-12 relative border-l border-primary/30 pl-6 ml-4 md:ml-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    2010
                  </Badge>
                  <h3 className="text-xl font-bold">Bachelor of Homeopathic Medicine and Surgery (BHMS)</h3>
                </div>
                <p className="text-muted-foreground">Graduated with honors from National Institute of Homeopathy</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    2012
                  </Badge>
                  <h3 className="text-xl font-bold">Advanced Certification in Classical Homeopathy</h3>
                </div>
                <p className="text-muted-foreground">Completed specialized training in constitutional prescribing</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    2015
                  </Badge>
                  <h3 className="text-xl font-bold">Established Private Practice</h3>
                </div>
                <p className="text-muted-foreground">Founded Holistic Healing Homeopathy Clinic</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    2018
                  </Badge>
                  <h3 className="text-xl font-bold">Research Publication</h3>
                </div>
                <p className="text-muted-foreground">
                  Published research on homeopathic treatments for chronic conditions
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    2020
                  </Badge>
                  <h3 className="text-xl font-bold">Expanded to Online Consultations</h3>
                </div>
                <p className="text-muted-foreground">Began offering telemedicine services to reach more patients</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    2023
                  </Badge>
                  <h3 className="text-xl font-bold">Excellence in Homeopathy Award</h3>
                </div>
                <p className="text-muted-foreground">Recognized for contributions to homeopathic medicine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Expertise</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Areas of specialization and professional strengths.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="bg-muted/50">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Specialized Education</h3>
                <p className="text-muted-foreground">Advanced training in classical and modern homeopathic methods</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">5+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Extensive clinical experience treating diverse health conditions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Patient-Centered Care</h3>
                <p className="text-muted-foreground">Individualized treatment plans tailored to each patient's needs</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Award-Winning Practice</h3>
                <p className="text-muted-foreground">Recognized for excellence in homeopathic medicine</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  )
}

