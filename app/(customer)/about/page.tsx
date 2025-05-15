import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Award, Clock, Heart, Leaf, MapPin, Utensils } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  // Chef profiles
  const chefs = [
    {
      name: "Michael Rodriguez",
      role: "Executive Chef",
      bio: "With over 15 years of culinary experience, Chef Michael brings his passion for innovative flavors and techniques to every dish at YummyBites.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Chen",
      role: "Pastry Chef",
      bio: "Chef Sarah specializes in creating delectable desserts that combine traditional techniques with modern twists, ensuring a sweet end to your meal.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "James Wilson",
      role: "Sous Chef",
      bio: "Chef James is dedicated to sourcing the freshest local ingredients and transforming them into memorable culinary experiences for our guests.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  // Values
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every dish we create, ensuring each bite is filled with love and care.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to sustainable practices, from sourcing local ingredients to reducing waste.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our restaurant, from food quality to customer service.",
    },
    {
      icon: Utensils,
      title: "Creativity",
      description:
        "Our chefs constantly innovate and experiment to bring you unique and exciting culinary experiences.",
    },
  ]

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About YummyBites</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Discover our story, meet our team, and learn about our commitment to delivering exceptional dining
            experiences.
          </p>
        </div>
      </ScrollAnimation>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation type="slideInLeft" threshold={0.1}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl img-modern">
              <Image
                src="/images/restaurant-location.jpg"
                alt="YummyBites restaurant interior"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="slideInRight" threshold={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-poppins">Our Story</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
              <div className="space-y-4 font-roboto">
                <p>
                  Founded in 2015, YummyBites began as a small family-owned restaurant with a simple mission: to serve
                  delicious, high-quality food in a warm and welcoming environment.
                </p>
                <p>
                  What started as a modest eatery has grown into a beloved culinary destination, known for our
                  commitment to exceptional flavors, fresh ingredients, and outstanding service.
                </p>
                <p>
                  Over the years, we've expanded our menu to include a diverse range of dishes that cater to various
                  tastes and dietary preferences, while staying true to our roots and the recipes that made us famous.
                </p>
                <p>
                  Today, YummyBites continues to be a place where friends and families gather to share meals, create
                  memories, and experience the joy of good food prepared with passion and care.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <ScrollAnimation type="fadeIn" threshold={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
              At YummyBites, our values guide everything we do, from how we prepare our food to how we treat our
              customers and staff.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollAnimation key={value.title} type="fadeIn" delay={index * 0.1} threshold={0.1}>
              <Card className="text-center card-hover-effect">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-pulse-slow">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">{value.title}</h3>
                  <p className="text-muted-foreground font-roboto">{value.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="mb-20">
        <ScrollAnimation type="fadeIn" threshold={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Meet Our Chefs</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
              Our talented team of chefs brings creativity, expertise, and passion to the YummyBites kitchen every day.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <ScrollAnimation key={chef.name} type="fadeIn" delay={index * 0.1} threshold={0.1}>
              <Card className="overflow-hidden card-hover-effect">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={chef.image || "/placeholder.svg"}
                    alt={chef.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold font-poppins mb-1">{chef.name}</h3>
                  <p className="text-primary font-medium font-poppins mb-4">{chef.role}</p>
                  <p className="text-muted-foreground font-roboto">{chef.bio}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Location & Hours */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation type="slideInLeft" threshold={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-poppins">Visit Us</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-poppins">Our Location</h3>
                    <p className="text-muted-foreground font-roboto">
                      123 Restaurant Street
                      <br />
                      Foodie City, FC 12345
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-poppins">Opening Hours</h3>
                    <p className="text-muted-foreground font-roboto">
                      Monday - Friday: 11:00 AM - 10:00 PM
                      <br />
                      Saturday: 10:00 AM - 11:00 PM
                      <br />
                      Sunday: 10:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="font-poppins btn-hover-effect">
                  <Link href="/reservations">Book a Table</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="slideInRight" threshold={0.1}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl img-modern">
              <Image
                src="/images/restaurant-location.jpg"
                alt="YummyBites restaurant location"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimation type="fadeIn" threshold={0.1}>
        <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-4">Experience YummyBites Today</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 font-roboto">
            Join us for a memorable dining experience or order your favorite dishes online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold font-poppins btn-hover-effect">
              <Link href="/order">Order Online</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-semibold font-poppins btn-hover-effect"
            >
              <Link href="/reservations">Book a Table</Link>
            </Button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
