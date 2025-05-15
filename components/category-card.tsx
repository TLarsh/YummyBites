import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

interface CategoryCardProps {
  title: string
  image: string
  description: string
  link: string
  index: number
}

export function CategoryCard({ title, image, description, link, index }: CategoryCardProps) {
  return (
    <ScrollAnimation type="scaleIn" delay={index * 0.1} threshold={0.2}>
      <Card className="overflow-hidden card-hover-effect category-card">
        <div className="relative h-56 overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover category-card-image" />
          <div className="absolute inset-0 category-card-overlay flex items-end">
            <h3 className="text-2xl font-semibold p-6 text-white font-poppins category-card-title">{title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4 font-roboto">{description}</p>
          <Button asChild variant="outline" className="font-poppins w-full btn-hover-effect">
            <Link href={link}>View Menu</Link>
          </Button>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
