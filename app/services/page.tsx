import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Brain,
  TreesIcon as Lungs,
  Thermometer,
  Stethoscope,
  Pill,
  Leaf,
  Baby,
  Droplet,
  Dna,
  Microscope,
  Zap,
} from "lucide-react"

const allServices = [
  {
    id: 1,
    title: "Chronic Disease Management",
    description: "Long-term care and management for chronic conditions using personalized homeopathic remedies.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    popular: true,
    longDescription:
      "Our chronic disease management approach focuses on identifying the root causes of persistent health issues and addressing them with individualized homeopathic treatments. We work with conditions like arthritis, diabetes, hypertension, and autoimmune disorders.",
  },
  {
    id: 2,
    title: "Mental Health Support",
    description: "Holistic approach to anxiety, depression, stress, and other mental health concerns.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our mental health support combines homeopathic remedies with lifestyle recommendations to address anxiety, depression, stress, insomnia, and other emotional concerns. We focus on restoring balance to both mind and body.",
  },
  {
    id: 3,
    title: "Respiratory Health",
    description: "Treatment for asthma, allergies, and other respiratory conditions with natural remedies.",
    icon: <Lungs className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our respiratory health treatments address both acute and chronic conditions like asthma, allergies, sinusitis, and recurrent respiratory infections. We aim to strengthen the respiratory system and reduce dependency on conventional medications.",
  },
  {
    id: 4,
    title: "Pediatric Care",
    description: "Gentle and effective treatments for children's health issues and developmental concerns.",
    icon: <Thermometer className="h-8 w-8 text-primary" />,
    popular: true,
    longDescription:
      "Our pediatric care provides safe, gentle treatments for children of all ages. We address common childhood ailments, behavioral issues, developmental concerns, and chronic conditions with remedies that support natural growth and healing.",
  },
  {
    id: 5,
    title: "Women's Health",
    description: "Specialized care for women's health issues including hormonal imbalances and reproductive health.",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our women's health services address the unique health needs of women at all life stages. We provide support for menstrual disorders, fertility issues, pregnancy support, menopausal symptoms, and hormonal imbalances.",
  },
  {
    id: 6,
    title: "Preventive Care",
    description: "Strengthen your immune system and prevent illness with constitutional homeopathic treatment.",
    icon: <Pill className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our preventive care approach focuses on strengthening your constitution and immune system to prevent illness and maintain optimal health. We create personalized wellness plans that include homeopathic remedies and lifestyle recommendations.",
  },
  {
    id: 7,
    title: "Skin Disorders",
    description: "Natural treatments for eczema, psoriasis, acne, and other skin conditions.",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our skin disorder treatments address both the external symptoms and internal causes of conditions like eczema, psoriasis, acne, and other dermatological issues. We focus on long-term healing rather than temporary symptom suppression.",
  },
  {
    id: 8,
    title: "Digestive Health",
    description: "Remedies for IBS, acid reflux, food intolerances, and other digestive issues.",
    icon: <Droplet className="h-8 w-8 text-primary" />,
    popular: true,
    longDescription:
      "Our digestive health services address conditions like IBS, acid reflux, food intolerances, and chronic digestive disorders. We work to restore proper digestive function and identify underlying causes of digestive distress.",
  },
  {
    id: 9,
    title: "Allergy Management",
    description: "Comprehensive approach to identifying and treating allergies and sensitivities.",
    icon: <Microscope className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our allergy management program helps identify and address allergies and sensitivities through homeopathic desensitization and immune system support. We work with food allergies, environmental allergies, and chemical sensitivities.",
  },
  {
    id: 10,
    title: "Hormonal Balance",
    description: "Natural support for thyroid disorders, adrenal fatigue, and other hormonal imbalances.",
    icon: <Dna className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our hormonal balance treatments address thyroid disorders, adrenal fatigue, and other endocrine imbalances. We use homeopathic remedies and nutritional support to help restore optimal hormonal function naturally.",
  },
  {
    id: 11,
    title: "Pain Management",
    description: "Non-addictive approaches to acute and chronic pain without side effects.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    popular: true,
    longDescription:
      "Our pain management services provide non-addictive, side-effect-free approaches to both acute and chronic pain. We address migraines, joint pain, back pain, fibromyalgia, and other painful conditions with targeted homeopathic remedies.",
  },
  {
    id: 12,
    title: "Pregnancy Support",
    description: "Safe homeopathic care during pregnancy, labor, and postpartum recovery.",
    icon: <Baby className="h-8 w-8 text-primary" />,
    popular: false,
    longDescription:
      "Our pregnancy support services provide safe, gentle care throughout pregnancy, labor, and postpartum recovery. We address common pregnancy complaints, prepare for labor, and support recovery and breastfeeding with homeopathic remedies.",
  },
]

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">My Services</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive homeopathic treatments tailored to your unique health needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allServices.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
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
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  )
}

