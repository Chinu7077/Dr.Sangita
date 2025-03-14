import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4 col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">Dr. Sangita</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Providing holistic homeopathic treatments for a healthier, balanced life.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Dr. Sangita
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  My Services
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Patient Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Health Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Healing Street, Wellness City, 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <Link href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <Link
                  href="mailto:dr.sangita@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dr.sangita@example.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe for health tips and updates.</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dr. Sangita. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

