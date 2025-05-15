import { ScrollAnimation } from "@/components/scroll-animation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function MenuPage() {
  // Menu categories and items
  const menuData = {
    "main-courses": {
      title: "Main Courses",
      description: "Delicious entrées prepared with the finest ingredients",
      items: [
        {
          id: "mc-1",
          name: "Classic Cheeseburger",
          description: "Juicy beef patty with melted cheddar, lettuce, tomato, and our special sauce",
          price: "$12.99",
          image: "/images/cheeseburger.jpg",
          tags: ["Popular", "Beef"],
        },
        {
          id: "mc-2",
          name: "Margherita Pizza",
          description: "Traditional pizza with tomato sauce, fresh mozzarella, and basil on a thin crust",
          price: "$14.99",
          image: "/images/pizza.jpg",
          tags: ["Vegetarian", "Popular"],
        },
        {
          id: "mc-3",
          name: "Grilled Salmon",
          description: "Fresh Atlantic salmon fillet grilled to perfection with lemon herb butter",
          price: "$18.99",
          image: "/images/salmon.jpg",
          tags: ["Seafood", "Healthy"],
        },
        {
          id: "mc-4",
          name: "Mushroom Risotto",
          description: "Creamy Arborio rice with wild mushrooms, white wine, and Parmesan cheese",
          price: "$15.99",
          image: "/images/risotto.jpg",
          tags: ["Vegetarian"],
        },
        {
          id: "mc-5",
          name: "Beef Tenderloin Steak",
          description: "8oz prime beef tenderloin with red wine reduction and roasted vegetables",
          price: "$24.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Premium", "Beef"],
        },
        {
          id: "mc-6",
          name: "Chicken Alfredo Pasta",
          description: "Fettuccine pasta with grilled chicken in a creamy Parmesan Alfredo sauce",
          price: "$16.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Popular"],
        },
      ],
    },
    appetizers: {
      title: "Appetizers",
      description: "Start your meal with our selection of tasty appetizers",
      items: [
        {
          id: "app-1",
          name: "Caesar Salad",
          description: "Crisp romaine lettuce with Caesar dressing, croutons, and shaved Parmesan",
          price: "$8.99",
          image: "/images/caesar-salad.jpg",
          tags: ["Healthy", "Gluten-Free Option"],
        },
        {
          id: "app-2",
          name: "Garlic Bread",
          description: "Toasted baguette with garlic butter and melted mozzarella cheese",
          price: "$5.99",
          image: "/images/garlic-bread.jpg",
          tags: ["Vegetarian"],
        },
        {
          id: "app-3",
          name: "Calamari",
          description: "Lightly battered and fried calamari served with marinara sauce and lemon",
          price: "$10.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Seafood"],
        },
        {
          id: "app-4",
          name: "Bruschetta",
          description: "Toasted bread topped with diced tomatoes, fresh basil, garlic, and olive oil",
          price: "$7.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Vegetarian"],
        },
      ],
    },
    desserts: {
      title: "Desserts",
      description: "Sweet treats to perfectly end your dining experience",
      items: [
        {
          id: "des-1",
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
          price: "$7.99",
          image: "/images/chocolate-cake.jpg",
          tags: ["Sweet", "Popular"],
        },
        {
          id: "des-2",
          name: "Tiramisu",
          description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
          price: "$6.99",
          image: "/images/tiramisu.jpg",
          tags: ["Sweet", "Contains Alcohol"],
        },
        {
          id: "des-3",
          name: "New York Cheesecake",
          description: "Creamy cheesecake with a graham cracker crust, topped with fresh berries",
          price: "$8.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Sweet"],
        },
        {
          id: "des-4",
          name: "Apple Pie",
          description: "Traditional apple pie with a flaky crust, served warm with caramel sauce",
          price: "$6.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Sweet"],
        },
      ],
    },
    beverages: {
      title: "Beverages",
      description: "Refreshing drinks to complement your meal",
      items: [
        {
          id: "bev-1",
          name: "Craft Beer Selection",
          description: "Rotating selection of local and imported craft beers",
          price: "$6.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Alcoholic"],
        },
        {
          id: "bev-2",
          name: "House Wine",
          description: "Red, white, or rosé wine by the glass",
          price: "$7.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Alcoholic"],
        },
        {
          id: "bev-3",
          name: "Fresh Lemonade",
          description: "Homemade lemonade with fresh lemons and a hint of mint",
          price: "$3.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Non-Alcoholic"],
        },
        {
          id: "bev-4",
          name: "Italian Soda",
          description: "Sparkling water with your choice of flavored syrup",
          price: "$3.99",
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Non-Alcoholic"],
        },
      ],
    },
  }

  const categories = Object.keys(menuData)

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Explore our carefully crafted menu featuring the finest ingredients and flavors. From appetizers to
            desserts, there's something for everyone to enjoy.
          </p>
        </div>
      </ScrollAnimation>

      <Tabs defaultValue="main-courses" className="w-full">
        <ScrollAnimation type="fadeIn" delay={0.1}>
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 font-poppins"
              >
                {menuData[category].title}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollAnimation>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <ScrollAnimation type="fadeIn" delay={0.2}>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold font-poppins mb-2">{menuData[category].title}</h2>
                <p className="text-muted-foreground font-roboto">{menuData[category].description}</p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData[category].items.map((item, index) => (
                <ScrollAnimation key={item.id} type="fadeIn" delay={0.1 * index} threshold={0.1}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="flex-1 p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold font-poppins">{item.name}</h3>
                          <span className="text-lg font-semibold text-primary font-poppins">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground mb-3 font-roboto">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-secondary font-roboto">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
