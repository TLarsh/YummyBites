"use client"

import type React from "react"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, Clock, Users, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function ReservationsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [guests, setGuests] = useState<string | undefined>("2")
  const [submitted, setSubmitted] = useState(false)

  const availableTimes = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setSubmitted(true)
  }

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Book a Table</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Reserve your table at YummyBites and enjoy a memorable dining experience with friends and family.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollAnimation type="slideInLeft" threshold={0.1}>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl img-modern">
            <Image
              src="/images/restaurant-location.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold font-poppins mb-2">YummyBites Restaurant</h2>
              <p className="font-roboto mb-4">Experience the taste of excellence in a welcoming atmosphere</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-roboto">
                    Monday - Friday: 11:00 AM - 10:00 PM
                    <br />
                    Saturday: 10:00 AM - 11:00 PM
                    <br />
                    Sunday: 10:00 AM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation type="slideInRight" threshold={0.1}>
          {submitted ? (
            <Card className="bg-card shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-poppins text-primary flex justify-center items-center">
                  <CheckCircle2 className="mr-2 h-6 w-6" /> Reservation Confirmed
                </CardTitle>
                <CardDescription className="font-roboto">
                  Your table has been successfully reserved. We look forward to serving you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium font-poppins mb-1">Date</h3>
                      <p className="font-roboto">{date ? format(date, "EEEE, MMMM d, yyyy") : "Not selected"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium font-poppins mb-1">Time</h3>
                      <p className="font-roboto">{time || "Not selected"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium font-poppins mb-1">Party Size</h3>
                      <p className="font-roboto">{guests} guests</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium font-poppins mb-1">Confirmation #</h3>
                      <p className="font-roboto">RES-{Math.floor(Math.random() * 10000)}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-muted-foreground font-roboto">
                  <p>
                    A confirmation email has been sent to your email address. If you need to modify or cancel your
                    reservation, please contact us at least 2 hours before your reservation time.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full btn-hover-effect font-poppins"
                  onClick={() => {
                    setSubmitted(false)
                    setDate(undefined)
                    setTime(undefined)
                    setGuests("2")
                  }}
                >
                  Make Another Reservation
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Reserve Your Table</CardTitle>
                <CardDescription className="font-roboto">
                  Fill out the form below to book your table at YummyBites.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-poppins">
                        Phone Number
                      </Label>
                      <Input id="phone" placeholder="(123) 456-7890" required className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-poppins">Number of Guests</Label>
                      <Select value={guests} onValueChange={setGuests} required>
                        <SelectTrigger className="font-roboto">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()} className="font-roboto">
                              {num} {num === 1 ? "guest" : "guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="font-poppins">Reservation Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${
                            !date && "text-muted-foreground"
                          } font-roboto`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-poppins">Reservation Time</Label>
                    <Select value={time} onValueChange={setTime} required>
                      <SelectTrigger className="font-roboto">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimes.map((t) => (
                          <SelectItem key={t} value={t} className="font-roboto">
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special-requests" className="font-poppins">
                      Special Requests (Optional)
                    </Label>
                    <textarea
                      id="special-requests"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
                      placeholder="Any special requests or dietary requirements?"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hover-effect font-poppins">
                    Book Table
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </ScrollAnimation>
      </div>

      <ScrollAnimation type="fadeIn" delay={0.2} threshold={0.1}>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold font-poppins mb-6">Why Reserve with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Guaranteed Seating</h3>
                <p className="text-muted-foreground font-roboto">
                  Skip the wait and ensure your table is ready when you arrive.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Special Occasions</h3>
                <p className="text-muted-foreground font-roboto">
                  Let us know about birthdays or anniversaries for a special touch.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Easy Modifications</h3>
                <p className="text-muted-foreground font-roboto">
                  Need to change your reservation? No problem, just give us a call.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
