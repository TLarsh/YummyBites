import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Phone, Star, Utensils, Calendar, ShoppingBag } from "lucide-react"
import { CategoryCard } from "@/components/category-card"
import { SpecialOfferCard } from "@/components/special-offer-card"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function HomePage() {
  const categories = [
    {
      title: "Main Courses",
      image: "/images/main-courses.jpg",
      description: "Delicious entrées prepared with the finest ingredients",
      link: "/menu/main-courses",
    },
    {
      title: "Appetizers",
      image: "/images/appetizers.jpg",
      description: "Start your meal with our selection of tasty appetizers",
      link: "/menu/appetizers",
    },
    {
      title: "Desserts",
      image: "/images/desserts.jpg",
      description: "Sweet treats to perfectly end your dining experience",
      link: "/menu/desserts",
    },
  ]

  const specialOffers = [
    {
      title: "Family Feast Bundle",
      subtitle: "Weekend Special",
      description:
        "Get 20% off when you order our family meal package, perfect for 4-6 people. Includes appetizers, main courses, and desserts.",
      image: "/images/weekend-special.jpg",
      badge: "20% OFF",
      link: "/order/special/family-feast",
      direction: "left" as const,
    },
    {
      title: "Express Lunch Menu",
      subtitle: "Weekday Lunch",
      description:
        "Enjoy our quick lunch specials for just $12.99, available Monday to Friday from 11am to 2pm. Includes a main dish and beverage.",
      image: "/images/lunch-special.jpg",
      badge: "$12.99",
      link: "/order/special/express-lunch",
      direction: "right" as const,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The food was absolutely delicious and the service was impeccable. Will definitely be coming back!",
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
  ]

  const features = [
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
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-image.jpg" alt="Delicious food spread" fill className="object-cover" priority />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
              Delicious Food, <span className="text-primary/90">Delivered</span> to Your Doorstep
            </h1>
            <p className="text-lg md:text-xl opacity-90 font-roboto">
              Experience the taste of excellence with our carefully crafted dishes made from the freshest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-semibold font-poppins btn-hover-effect">
                <Link href="/order">Order Online</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10 font-semibold font-poppins btn-hover-effect"
              >
                <Link href="/reservations">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Explore Our Menu</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                image={category.image}
                description={category.description}
                link={category.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="section-divider"></div>

      {/* Special Offers */}
      <section className="py-20 decorative-dots">
        <div className="container">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Special Offers</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialOffers.map((offer) => (
              <SpecialOfferCard
                key={offer.title}
                title={offer.title}
                subtitle={offer.subtitle}
                description={offer.description}
                image={offer.image}
                badge={offer.badge}
                link={offer.link}
                direction={offer.direction}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">What Our Customers Say</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} type="fadeIn" delay={index * 0.1} threshold={0.2}>
                <Card className="p-6 card-hover-effect">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-poppins">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold font-poppins">{testimonial.name}</h4>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-roboto">{testimonial.comment}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Why Choose YummyBites</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} type="fadeIn" delay={index * 0.1} threshold={0.2}>
                <Card className="p-6 text-center card-hover-effect">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-pulse-slow">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">{feature.title}</h3>
                  <p className="text-muted-foreground font-roboto">{feature.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="decorative-dots absolute inset-0"></div>
        </div>
        <div className="container relative z-10 text-center">
          <ScrollAnimation type="fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">Ready to Order?</h2>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={0.1}>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 font-roboto">
              Experience the taste of YummyBites today. Order online for delivery or pickup, or book a table for a
              memorable dining experience.
            </p>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={0.2}>
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
          </ScrollAnimation>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Find Us</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="slideInLeft" threshold={0.2}>
              <div className="space-y-8">
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

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-poppins">Contact Us</h3>
                    <p className="text-muted-foreground font-roboto">
                      Phone: (123) 456-7890
                      <br />
                      Email: info@yummybites.com
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="slideInRight" threshold={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl img-modern">
                <Image src="/images/restaurant-location.jpg" alt="Restaurant interior" fill className="object-cover" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
