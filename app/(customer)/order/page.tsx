"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { MinusCircle, PlusCircle, ShoppingCart, Clock, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OrderPage() {
  // Menu categories and items (same as menu page)
  const menuData = {
    "main-courses": {
      title: "Main Courses",
      description: "Delicious entrées prepared with the finest ingredients",
      items: [
        {
          id: "mc-1",
          name: "Classic Cheeseburger",
          description: "Juicy beef patty with melted cheddar, lettuce, tomato, and our special sauce",
          price: 12.99,
          image: "/images/cheeseburger.jpg",
          tags: ["Popular", "Beef"],
        },
        {
          id: "mc-2",
          name: "Margherita Pizza",
          description: "Traditional pizza with tomato sauce, fresh mozzarella, and basil on a thin crust",
          price: 14.99,
          image: "/images/pizza.jpg",
          tags: ["Vegetarian", "Popular"],
        },
        {
          id: "mc-3",
          name: "Grilled Salmon",
          description: "Fresh Atlantic salmon fillet grilled to perfection with lemon herb butter",
          price: 18.99,
          image: "/images/salmon.jpg",
          tags: ["Seafood", "Healthy"],
        },
        {
          id: "mc-4",
          name: "Mushroom Risotto",
          description: "Creamy Arborio rice with wild mushrooms, white wine, and Parmesan cheese",
          price: 15.99,
          image: "/images/risotto.jpg",
          tags: ["Vegetarian"],
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
          price: 8.99,
          image: "/images/caesar-salad.jpg",
          tags: ["Healthy", "Gluten-Free Option"],
        },
        {
          id: "app-2",
          name: "Garlic Bread",
          description: "Toasted baguette with garlic butter and melted mozzarella cheese",
          price: 5.99,
          image: "/images/garlic-bread.jpg",
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
          price: 7.99,
          image: "/images/chocolate-cake.jpg",
          tags: ["Sweet", "Popular"],
        },
        {
          id: "des-2",
          name: "Tiramisu",
          description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
          price: 6.99,
          image: "/images/tiramisu.jpg",
          tags: ["Sweet", "Contains Alcohol"],
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
          price: 6.99,
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Alcoholic"],
        },
        {
          id: "bev-2",
          name: "Fresh Lemonade",
          description: "Homemade lemonade with fresh lemons and a hint of mint",
          price: 3.99,
          image: "/placeholder.svg?height=300&width=400",
          tags: ["Non-Alcoholic"],
        },
      ],
    },
  }

  // State for cart
  const [cart, setCart] = useState<
    {
      id: string
      name: string
      price: number
      quantity: number
    }[]
  >([])

  // State for order type
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery")

  const router = useRouter()

  // Add item to cart
  const addToCart = (item: { id: string; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
        )
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== id)
      }
    })
  }

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax
  const deliveryFee = orderType === "delivery" ? 3.99 : 0
  const total = subtotal + tax + deliveryFee

  const categories = Object.keys(menuData)

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Order Online</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Order your favorite dishes for delivery or pickup. We prepare everything fresh and deliver it straight to
            your door.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ScrollAnimation type="fadeIn" delay={0.1}>
            <RadioGroup
              defaultValue="delivery"
              className="flex flex-wrap gap-4 mb-8"
              onValueChange={(value) => setOrderType(value as "delivery" | "pickup")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="font-poppins">
                  Delivery
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="font-poppins">
                  Pickup
                </Label>
              </div>
            </RadioGroup>
          </ScrollAnimation>

          <ScrollAnimation type="fadeIn" delay={0.2}>
            <Tabs defaultValue="main-courses" className="w-full">
              <TabsList className="flex flex-wrap justify-start mb-8 h-auto bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 font-poppins"
                  >
                    {menuData[category].title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-1 gap-4">
                    {menuData[category].items.map((item, index) => (
                      <ScrollAnimation key={item.id} type="fadeIn" delay={0.05 * index} threshold={0.1}>
                        <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="flex flex-row">
                            <div className="relative w-1/4 h-32">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <CardContent className="flex-1 p-4 flex justify-between items-center">
                              <div>
                                <h3 className="text-lg font-semibold font-poppins">{item.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2 font-roboto line-clamp-2">
                                  {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {item.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="bg-secondary font-roboto text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="text-lg font-semibold text-primary font-poppins">
                                  ${item.price.toFixed(2)}
                                </span>
                                <Button
                                  onClick={() => addToCart(item)}
                                  size="sm"
                                  className="btn-hover-effect font-poppins"
                                >
                                  Add to Cart
                                </Button>
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
          </ScrollAnimation>
        </div>

        <div className="lg:col-span-1">
          <ScrollAnimation type="slideInRight" threshold={0.1}>
            <div className="sticky top-24">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold font-poppins flex items-center">
                      <ShoppingCart className="mr-2 h-5 w-5" /> Your Order
                    </h2>
                    <Badge variant="secondary" className="font-poppins">
                      {orderType === "delivery" ? "Delivery" : "Pickup"}
                    </Badge>
                  </div>

                  {orderType === "delivery" && (
                    <div className="mb-6 p-4 bg-muted rounded-md">
                      <div className="flex items-start gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium font-poppins mb-1">Delivery Address</h3>
                          <div className="flex flex-col gap-2">
                            <Input placeholder="Enter your address" className="font-roboto" />
                            <Input placeholder="Apartment, suite, etc. (optional)" className="font-roboto" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium font-poppins mb-1">Estimated Delivery Time</h3>
                          <p className="text-sm text-muted-foreground font-roboto">30-45 minutes</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {orderType === "pickup" && (
                    <div className="mb-6 p-4 bg-muted rounded-md">
                      <div className="flex items-start gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium font-poppins mb-1">Pickup Location</h3>
                          <p className="text-sm text-muted-foreground font-roboto">
                            123 Restaurant Street
                            <br />
                            Foodie City, FC 12345
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium font-poppins mb-1">Estimated Pickup Time</h3>
                          <p className="text-sm text-muted-foreground font-roboto">15-20 minutes</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground font-roboto mb-4">Your cart is empty</p>
                      <p className="text-sm text-muted-foreground font-roboto">
                        Add items from the menu to start your order
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <MinusCircle className="h-4 w-4" />
                                </Button>
                                <span className="w-6 text-center font-roboto">{item.quantity}</span>
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => addToCart(item)}>
                                  <PlusCircle className="h-4 w-4" />
                                </Button>
                              </div>
                              <span className="font-roboto">{item.name}</span>
                            </div>
                            <span className="font-medium font-roboto">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground font-roboto">Subtotal</span>
                          <span className="font-roboto">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground font-roboto">Tax</span>
                          <span className="font-roboto">${tax.toFixed(2)}</span>
                        </div>
                        {orderType === "delivery" && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground font-roboto">Delivery Fee</span>
                            <span className="font-roboto">${deliveryFee.toFixed(2)}</span>
                          </div>
                        )}
                        <Separator className="my-2" />
                        <div className="flex justify-between font-medium">
                          <span className="font-poppins">Total</span>
                          <span className="font-poppins">${total.toFixed(2)}</span>
                        </div>
                      </div>

                      <Button
                        className="w-full btn-hover-effect font-poppins"
                        onClick={() => {
                          if (cart.length > 0) {
                            // Store cart data in localStorage to access it on the checkout page
                            localStorage.setItem("yummyBites_cart", JSON.stringify(cart))
                            localStorage.setItem("yummyBites_orderType", orderType)
                            router.push("/checkout")
                          }
                        }}
                        disabled={cart.length === 0}
                      >
                        Proceed to Checkout
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
