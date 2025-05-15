import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

interface SpecialOfferCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  badge: string
  link: string
  direction: "left" | "right"
}

export function SpecialOfferCard({
  title,
  subtitle,
  description,
  image,
  badge,
  link,
  direction,
}: SpecialOfferCardProps) {
  return (
    <ScrollAnimation type={direction === "left" ? "slideInLeft" : "slideInRight"} threshold={0.2}>
      <Card className="flex flex-col md:flex-row overflow-hidden card-hover-effect special-offer">
        <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover special-offer-image" />
          <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium font-poppins special-offer-badge">
            {badge}
          </div>
        </div>
        <CardContent className="flex-1 p-6">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-3 font-poppins">
            {subtitle}
          </div>
          <h3 className="text-2xl font-semibold mb-3 font-poppins">{title}</h3>
          <p className="text-muted-foreground mb-6 font-roboto">{description}</p>
          <Button asChild className="font-poppins w-full sm:w-auto btn-hover-effect">
            <Link href={link}>Order Now</Link>
          </Button>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
