"use client"

import type React from "react"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setFormSubmitted(true)
  }

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Have questions, feedback, or want to make a special request? We're here to help!
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ScrollAnimation type="slideInLeft" threshold={0.1}>
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">Send Us a Message</CardTitle>
              <CardDescription className="font-roboto">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground font-roboto mb-6">
                    Thank you for reaching out. We'll respond to your message shortly.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} className="font-poppins btn-hover-effect">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-poppins">
                        Full Name
                      </Label>
                      <Input id="name" placeholder="John Doe" required className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-poppins">
                        Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="font-roboto" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-poppins">
                      Phone Number (Optional)
                    </Label>
                    <Input id="phone" placeholder="(123) 456-7890" className="font-roboto" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-poppins">
                      Subject
                    </Label>
                    <Input id="subject" placeholder="Reservation Inquiry" required className="font-roboto" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-poppins">
                      Message
                    </Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full font-poppins btn-hover-effect">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Contact Information */}
        <ScrollAnimation type="slideInRight" threshold={0.1}>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins">Contact Information</CardTitle>
                <CardDescription className="font-roboto">
                  Reach out to us directly using the information below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 font-poppins">Phone</h3>
                    <p className="text-muted-foreground font-roboto mb-1">(123) 456-7890</p>
                    <p className="text-sm text-muted-foreground font-roboto">
                      Available daily from 10:00 AM to 10:00 PM
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 font-poppins">Email</h3>
                    <p className="text-muted-foreground font-roboto mb-1">info@yummybites.com</p>
                    <p className="text-sm text-muted-foreground font-roboto">
                      We'll respond to your email within 24 hours
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 font-poppins">Address</h3>
                    <p className="text-muted-foreground font-roboto mb-1">
                      123 Restaurant Street
                      <br />
                      Foodie City, FC 12345
                    </p>
                    <p className="text-sm text-muted-foreground font-roboto">Open daily: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl img-modern">
              <Image
                src="/images/restaurant-location.jpg"
                alt="YummyBites restaurant location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold font-poppins mb-2">Visit Our Restaurant</h3>
                <p className="font-roboto">
                  Located in the heart of Foodie City, just a 5-minute walk from Central Park.
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-poppins">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-poppins">Do you take reservations?</h3>
                  <p className="text-muted-foreground font-roboto">
                    Yes, we recommend making a reservation, especially for dinner and weekends. You can book a table
                    online or call us directly.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-poppins">Do you offer catering services?</h3>
                  <p className="text-muted-foreground font-roboto">
                    Yes, we offer catering for events of all sizes. Please contact us for more information and to
                    discuss your specific needs.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-poppins">Do you accommodate dietary restrictions?</h3>
                  <p className="text-muted-foreground font-roboto">
                    We offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary
                    restrictions when ordering.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
