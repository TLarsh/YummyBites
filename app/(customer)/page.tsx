import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Phone, Star, Utensils, Calendar, ShoppingBag } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Restaurant hero image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Delicious Food, Delivered to Your Doorstep</h1>
            <p className="text-lg md:text-xl opacity-90">
              Experience the taste of excellence with our carefully crafted dishes made from the freshest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/order">Order Online</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10 font-semibold"
              >
                <Link href="/reservations">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Main Courses",
                image: "/placeholder.svg?height=300&width=400",
                description: "Delicious entrées prepared with the finest ingredients",
                link: "/menu/main-courses",
              },
              {
                title: "Appetizers",
                image: "/placeholder.svg?height=300&width=400",
                description: "Start your meal with our selection of tasty appetizers",
                link: "/menu/appetizers",
              },
              {
                title: "Desserts",
                image: "/placeholder.svg?height=300&width=400",
                description: "Sweet treats to perfectly end your dining experience",
                link: "/menu/desserts",
              },
            ].map((category) => (
              <Card key={category.title} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button asChild variant="outline">
                    <Link href={category.link}>View Menu</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Weekend special"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Weekend Special
                </div>
                <h3 className="text-xl font-semibold mb-2">Family Feast Bundle</h3>
                <p className="text-muted-foreground mb-4">
                  Get 20% off when you order our family meal package, perfect for 4-6 people. Includes appetizers, main
                  courses, and desserts.
                </p>
                <Button asChild>
                  <Link href="/order/special/family-feast">Order Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                <Image src="/placeholder.svg?height=400&width=300" alt="Lunch special" fill className="object-cover" />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Weekday Lunch
                </div>
                <h3 className="text-xl font-semibold mb-2">Express Lunch Menu</h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy our quick lunch specials for just $12.99, available Monday to Friday from 11am to 2pm. Includes
                  a main dish and beverage.
                </p>
                <Button asChild>
                  <Link href="/order/special/express-lunch">Order Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment:
                  "The food was absolutely delicious and the service was impeccable. Will definitely be coming back!",
              },
              {
                name: "Michael Chen",
                rating: 5,
                comment:
                  "Best restaurant in town! The online ordering system is so convenient and the food arrives hot and fresh every time.",
              },
              {
                name: "Emily Rodriguez",
                rating: 4,
                comment:
                  "Great atmosphere and amazing food. The reservation system was easy to use and they accommodated our special requests.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose YummyBites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Utensils,
                title: "Quality Food",
                description: "We use only the freshest ingredients to prepare our dishes",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Quick and reliable delivery to your doorstep",
              },
              {
                icon: Calendar,
                title: "Easy Reservations",
                description: "Book a table online in just a few clicks",
              },
              {
                icon: ShoppingBag,
                title: "Online Ordering",
                description: "Convenient ordering system for pickup or delivery",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Experience the taste of YummyBites today. Order online for delivery or pickup, or book a table for a
            memorable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/order">Order Online</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-semibold"
            >
              <Link href="/reservations">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Restaurant Street
                    <br />
                    Foodie City, FC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 11:00 AM - 10:00 PM
                    <br />
                    Saturday: 10:00 AM - 11:00 PM
                    <br />
                    Sunday: 10:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                  <p className="text-muted-foreground">
                    Phone: (123) 456-7890
                    <br />
                    Email: info@yummybites.com
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Restaurant location map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
