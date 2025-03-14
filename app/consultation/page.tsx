"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Clock, Video, Phone, MessageSquare, CreditCard, Wallet } from "lucide-react"

export default function ConsultationPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [consultationType, setConsultationType] = useState("video")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Handle form submission
      alert("Consultation booked successfully! You will receive a confirmation email shortly.")
      setStep(1)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Book Your Consultation
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Schedule a personalized consultation with Dr. Sangita and take the first step towards natural healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <Card className="border-2 border-muted">
              <CardHeader>
                <CardTitle>Consultation Booking</CardTitle>
                <CardDescription>Complete the steps below to schedule your appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                      >
                        1
                      </div>
                      <span className="ml-2 hidden sm:inline">Select Date & Time</span>
                    </div>
                    <div className={`h-1 w-16 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                    <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                      >
                        2
                      </div>
                      <span className="ml-2 hidden sm:inline">Personal Details</span>
                    </div>
                    <div className={`h-1 w-16 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                    <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                      >
                        3
                      </div>
                      <span className="ml-2 hidden sm:inline">Payment</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-base">Select Consultation Type</Label>
                        <RadioGroup
                          defaultValue="video"
                          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                          onValueChange={setConsultationType}
                          value={consultationType}
                        >
                          <div>
                            <RadioGroupItem value="video" id="video" className="sr-only peer" />
                            <Label
                              htmlFor="video"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Video className="mb-3 h-6 w-6" />
                              <span className="text-sm font-medium">Video Call</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="phone" id="phone" className="sr-only peer" />
                            <Label
                              htmlFor="phone"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Phone className="mb-3 h-6 w-6" />
                              <span className="text-sm font-medium">Phone Call</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="chat" id="chat" className="sr-only peer" />
                            <Label
                              htmlFor="chat"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <MessageSquare className="mb-3 h-6 w-6" />
                              <span className="text-sm font-medium">Chat</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-base">Select Date</Label>
                          <div className="mt-2 border rounded-md p-2">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="mx-auto"
                              disabled={(date) => {
                                const day = date.getDay()
                                // Disable weekends
                                return day === 0 || day === 6
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <Label className="text-base">Select Time</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {[
                              "10:00 AM",
                              "11:00 AM",
                              "12:00 PM",
                              "2:00 PM",
                              "3:00 PM",
                              "4:00 PM",
                              "5:00 PM",
                              "6:00 PM",
                            ].map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant="outline"
                                className="flex items-center justify-center"
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Enter your last name" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Enter your phone number" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="Enter your age" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Consultation</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select reason" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chronic">Chronic Disease</SelectItem>
                            <SelectItem value="acute">Acute Condition</SelectItem>
                            <SelectItem value="mental">Mental Health</SelectItem>
                            <SelectItem value="pediatric">Pediatric Care</SelectItem>
                            <SelectItem value="women">Women's Health</SelectItem>
                            <SelectItem value="preventive">Preventive Care</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="symptoms">Describe Your Symptoms</Label>
                        <Textarea
                          id="symptoms"
                          placeholder="Please describe your symptoms or health concerns"
                          rows={4}
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium">Consultation Summary</h3>
                          <Badge variant="outline" className="text-primary">
                            {consultationType === "video"
                              ? "Video Call"
                              : consultationType === "phone"
                                ? "Phone Call"
                                : "Chat"}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{date ? date.toLocaleDateString() : "No date selected"}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Selected time slot</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between">
                            <span>Consultation Fee</span>
                            <span className="font-medium">₹1,200</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-base">Select Payment Method</Label>
                        <RadioGroup
                          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                          onValueChange={setPaymentMethod}
                          value={paymentMethod}
                          required
                        >
                          <div>
                            <RadioGroupItem value="card" id="card" className="sr-only peer" />
                            <Label
                              htmlFor="card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <CreditCard className="mb-3 h-6 w-6" />
                              <span className="text-sm font-medium">Credit/Debit Card</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="upi" id="upi" className="sr-only peer" />
                            <Label
                              htmlFor="upi"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Wallet className="mb-3 h-6 w-6" />
                              <span className="text-sm font-medium">UPI/Paytm</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="later" id="later" className="sr-only peer" />
                            <Label
                              htmlFor="later"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Clock className="mb-3 h-6 w-6" />
                              <span className="text-sm font-medium">Pay Later</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" required />
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "upi" && (
                        <div className="space-y-2">
                          <Label htmlFor="upi-id">UPI ID</Label>
                          <Input id="upi-id" placeholder="yourname@upi" required />
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                        Previous
                      </Button>
                    )}
                    <Button type="submit" className="ml-auto">
                      {step < 3 ? "Continue" : "Confirm Booking"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Common questions about consultations with Dr. Sangita.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-[800px] mt-12">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="booking">Booking</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">What is homeopathy?</h3>
                  <p className="text-muted-foreground">
                    Homeopathy is a natural form of medicine that uses highly diluted substances to trigger the body's
                    natural healing mechanisms. It treats the whole person, considering physical, mental, and emotional
                    aspects.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Is homeopathy safe?</h3>
                  <p className="text-muted-foreground">
                    Yes, homeopathic remedies are generally safe, non-toxic, and have minimal to no side effects. They
                    can be used by people of all ages, including infants, pregnant women, and the elderly.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">How long does it take to see results?</h3>
                  <p className="text-muted-foreground">
                    The timeline for results varies depending on the condition, its severity, and how long you've had
                    it. Acute conditions may improve quickly, while chronic conditions may take longer to show
                    significant improvement.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="booking" className="mt-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">How long is a consultation?</h3>
                  <p className="text-muted-foreground">
                    Initial consultations typically last 45-60 minutes, while follow-up appointments are usually 20-30
                    minutes. This allows enough time to thoroughly discuss your health concerns.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">What should I prepare for my first consultation?</h3>
                  <p className="text-muted-foreground">
                    Please have your medical history, current medications, and a list of your symptoms ready. It's also
                    helpful to note when symptoms started and any factors that make them better or worse.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Can I reschedule my appointment?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can reschedule your appointment up to 24 hours before the scheduled time without any
                    penalty. Please contact us as soon as possible if you need to make changes.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="payment" className="mt-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept credit/debit cards, UPI, Paytm, and other digital payment methods. We also offer a
                    pay-later option for returning patients.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Is there a cancellation fee?</h3>
                  <p className="text-muted-foreground">
                    Cancellations made less than 24 hours before the appointment may incur a 50% cancellation fee.
                    No-shows will be charged the full consultation fee.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Do you offer refunds?</h3>
                  <p className="text-muted-foreground">
                    We do not offer refunds for completed consultations. However, if you experience technical issues
                    during an online consultation, we will reschedule at no additional cost.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}

