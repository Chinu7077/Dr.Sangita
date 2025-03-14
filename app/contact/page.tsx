"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have questions or want to schedule an appointment? Get in touch
                with Dr. Sangita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-2 border-muted">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-center text-muted-foreground">
                      Thank you for reaching out. We'll respond to your inquiry
                      within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">
                            Appointment Inquiry
                          </SelectItem>
                          <SelectItem value="consultation">
                            Consultation Question
                          </SelectItem>
                          <SelectItem value="treatment">
                            Treatment Information
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mt-2">
                  Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Clinic Address</h3>
                      <p className="text-muted-foreground mt-1">
                        Kundura,Koraput,Odisha,764002
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Landmark: sweet dream bakery
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground mt-1">
                        <a
                          href="tel:+919876543210"
                          className="hover:text-primary transition-colors"
                        >
                          +91 7008330920
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available for calls during clinic hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground mt-1">
                        <a
                          href="mailto:dr.sangita@example.com"
                          className="hover:text-primary transition-colors"
                        >
                          dr.sangita@example.com
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Clinic Hours</h3>
                      <div className="text-muted-foreground mt-1 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>10:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Find Us
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Visit our clinic located in Kundura.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border-2 border-muted h-[400px] w-full bg-card">
          <iframe
  className="w-full h-full border-0"
  src="https://maps.google.com/maps?q=Kundura&t=&z=13&ie=UTF8&iwloc=&output=embed"
  allowFullScreen
  loading="lazy"
></iframe>

          </div>

          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=Kundura",
                  "_blank"
                )
              }
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Common questions about contacting and visiting our clinic.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Do I need an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we recommend scheduling an appointment in advance to
                  ensure Dr. Sangita can dedicate sufficient time to your
                  consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is parking available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we have dedicated parking spaces for patients in the
                  building basement. Please bring your appointment confirmation
                  for validation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do I prepare for my visit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Please bring your medical records, list of current
                  medications, and a detailed description of your symptoms to
                  your appointment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer emergency consultations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve a few slots each day for urgent cases. Please call
                  our clinic directly if you need an emergency consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept cash, all major credit/debit cards, UPI payments,
                  and digital wallets like Paytm and Google Pay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is the clinic accessible?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, our clinic is wheelchair accessible with ramps and
                  elevators. Please let us know if you need any additional
                  accommodations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
