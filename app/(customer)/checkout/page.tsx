"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, CreditCard, MapPin, ShoppingBag, Truck, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock order data (in a real app, this would come from your cart/state management)
const orderItems = [
  { id: "item1", name: "Classic Cheeseburger", price: 12.99, quantity: 1 },
  { id: "item2", name: "Caesar Salad", price: 8.99, quantity: 1 },
  { id: "item3", name: "Fresh Lemonade", price: 3.99, quantity: 2 },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<"details" | "payment" | "confirmation">("details")
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery")
  const [paymentMethod, setPaymentMethod] = useState<"credit-card" | "paypal">("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate order totals
  const subtotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax
  const deliveryFee = deliveryMethod === "delivery" ? 3.99 : 0
  const total = subtotal + tax + deliveryFee

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
    window.scrollTo(0, 0)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setCurrentStep("confirmation")
      window.scrollTo(0, 0)
    }, 1500)
  }

  const handleNewOrder = () => {
    router.push("/order")
  }

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-poppins mb-4">Checkout</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Complete your order and enjoy delicious food from YummyBites.
          </p>
        </div>
      </ScrollAnimation>

      {/* Checkout Steps */}
      <ScrollAnimation type="fadeIn" delay={0.1}>
        <div className="flex justify-center mb-12">
          <div className="flex items-center max-w-3xl w-full">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === "details" ? "bg-primary text-white" : "bg-primary text-white"
                } font-poppins`}
              >
                1
              </div>
              <span className="text-sm mt-2 font-roboto">Details</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep === "details" ? "bg-muted" : "bg-primary"}`}></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === "payment" || currentStep === "confirmation"
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                } font-poppins`}
              >
                2
              </div>
              <span className="text-sm mt-2 font-roboto">Payment</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep === "confirmation" ? "bg-primary" : "bg-muted"}`}></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === "confirmation" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                } font-poppins`}
              >
                3
              </div>
              <span className="text-sm mt-2 font-roboto">Confirmation</span>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Checkout Form */}
        <div className="lg:col-span-2">
          {currentStep === "details" && (
            <ScrollAnimation type="fadeIn" delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Delivery Details</CardTitle>
                  <CardDescription className="font-roboto">
                    Tell us where and when you'd like to receive your order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDetailsSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="font-poppins">Delivery Method</Label>
                        <RadioGroup
                          defaultValue="delivery"
                          className="flex flex-col space-y-2 mt-2"
                          onValueChange={(value) => setDeliveryMethod(value as "delivery" | "pickup")}
                        >
                          <div className="flex items-center space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="delivery" id="delivery" />
                            <div className="flex items-center flex-1">
                              <Truck className="h-5 w-5 mr-3 text-primary" />
                              <Label htmlFor="delivery" className="flex-1 cursor-pointer font-poppins">
                                Delivery
                                <p className="text-sm text-muted-foreground font-roboto">
                                  Delivered to your address in 30-45 minutes
                                </p>
                              </Label>
                              <Badge variant="outline" className="ml-auto font-roboto">
                                $3.99
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <div className="flex items-center flex-1">
                              <ShoppingBag className="h-5 w-5 mr-3 text-primary" />
                              <Label htmlFor="pickup" className="flex-1 cursor-pointer font-poppins">
                                Pickup
                                <p className="text-sm text-muted-foreground font-roboto">
                                  Ready for pickup in 15-20 minutes
                                </p>
                              </Label>
                              <Badge variant="outline" className="ml-auto font-roboto">
                                Free
                              </Badge>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-poppins">
                            Full Name
                          </Label>
                          <Input id="name" placeholder="John Doe" required className="font-roboto" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-poppins">
                            Phone Number
                          </Label>
                          <Input id="phone" placeholder="(123) 456-7890" required className="font-roboto" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-poppins">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="font-roboto"
                        />
                      </div>

                      {deliveryMethod === "delivery" && (
                        <div className="space-y-4 animate-fadeIn">
                          <div className="space-y-2">
                            <Label htmlFor="address" className="font-poppins">
                              Delivery Address
                            </Label>
                            <Input id="address" placeholder="123 Main St" required className="font-roboto" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city" className="font-poppins">
                                City
                              </Label>
                              <Input id="city" placeholder="New York" required className="font-roboto" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state" className="font-poppins">
                                State
                              </Label>
                              <Input id="state" placeholder="NY" required className="font-roboto" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zip" className="font-poppins">
                                ZIP Code
                              </Label>
                              <Input id="zip" placeholder="10001" required className="font-roboto" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="instructions" className="font-poppins">
                              Delivery Instructions (Optional)
                            </Label>
                            <Input
                              id="instructions"
                              placeholder="Apartment number, gate code, etc."
                              className="font-roboto"
                            />
                          </div>
                        </div>
                      )}

                      {deliveryMethod === "pickup" && (
                        <div className="p-4 bg-muted rounded-md animate-fadeIn">
                          <div className="flex items-start gap-2">
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
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" asChild>
                        <Link href="/order" className="font-poppins flex items-center">
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Order
                        </Link>
                      </Button>
                      <Button type="submit" className="font-poppins btn-hover-effect">
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          )}

          {currentStep === "payment" && (
            <ScrollAnimation type="fadeIn" delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Payment Method</CardTitle>
                  <CardDescription className="font-roboto">Choose how you'd like to pay for your order</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <Tabs
                      defaultValue="credit-card"
                      onValueChange={(value) => setPaymentMethod(value as "credit-card" | "paypal")}
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="credit-card" className="font-poppins">
                          Credit Card
                        </TabsTrigger>
                        <TabsTrigger value="paypal" className="font-poppins">
                          PayPal
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="credit-card" className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name" className="font-poppins">
                            Name on Card
                          </Label>
                          <Input id="card-name" placeholder="John Doe" required className="font-roboto" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-number" className="font-poppins">
                            Card Number
                          </Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" required className="font-roboto" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry" className="font-poppins">
                              Expiry Date
                            </Label>
                            <Input id="expiry" placeholder="MM/YY" required className="font-roboto" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc" className="font-poppins">
                              CVC
                            </Label>
                            <Input id="cvc" placeholder="123" required className="font-roboto" />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="paypal" className="mt-4">
                        <div className="text-center py-8">
                          <div className="mb-4 text-primary">
                            <svg
                              className="w-16 h-16 mx-auto"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.02 5H16.9C17.45 5 17.97 5.25 18.33 5.67C18.7 6.08 18.85 6.62 18.75 7.17L17.5 12.59C17.35 13.38 16.67 13.95 15.87 13.95H8.44C7.57 13.95 6.81 13.3 6.73 12.43L6.16 5.9C6.12 5.39 5.68 5 5.17 5H4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.25 19C16.25 19.69 15.69 20.25 15 20.25C14.31 20.25 13.75 19.69 13.75 19C13.75 18.31 14.31 17.75 15 17.75C15.69 17.75 16.25 18.31 16.25 19Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.25 19C8.25 19.69 7.69 20.25 7 20.25C6.31 20.25 5.75 19.69 5.75 19C5.75 18.31 6.31 17.75 7 17.75C7.69 17.75 8.25 18.31 8.25 19Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 8H17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 11H16"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 14H15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="text-lg font-medium font-poppins mb-2">Pay with PayPal</p>
                          <p className="text-muted-foreground font-roboto mb-6">
                            You'll be redirected to PayPal to complete your payment securely.
                          </p>
                          <Button type="button" className="font-poppins btn-hover-effect">
                            Continue to PayPal
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="coupon" className="font-poppins">
                        Promo Code (Optional)
                      </Label>
                      <div className="flex gap-2">
                        <Input id="coupon" placeholder="Enter promo code" className="font-roboto" />
                        <Button type="button" variant="outline" className="font-poppins">
                          Apply
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep("details")}
                        className="font-poppins flex items-center"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Details
                      </Button>
                      <Button type="submit" className="font-poppins btn-hover-effect" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          )}

          {currentStep === "confirmation" && (
            <ScrollAnimation type="fadeIn" delay={0.2}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-poppins">Order Confirmed!</CardTitle>
                  <CardDescription className="font-roboto">
                    Your order has been received and is being prepared.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-medium font-poppins mb-2">Order Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-left text-muted-foreground font-roboto">Order Number:</div>
                      <div className="text-right font-medium font-roboto">YB-{Math.floor(Math.random() * 10000)}</div>
                      <div className="text-left text-muted-foreground font-roboto">Date:</div>
                      <div className="text-right font-roboto">{new Date().toLocaleDateString()}</div>
                      <div className="text-left text-muted-foreground font-roboto">Method:</div>
                      <div className="text-right font-roboto capitalize">{deliveryMethod}</div>
                      <div className="text-left text-muted-foreground font-roboto">Payment:</div>
                      <div className="text-right font-roboto capitalize">
                        {paymentMethod === "credit-card" ? "Credit Card" : "PayPal"}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium font-poppins mb-3 text-left">Order Summary</h3>
                    <div className="space-y-2">
                      {orderItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="font-roboto">
                            {item.quantity} x {item.name}
                          </span>
                          <span className="font-roboto">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-3" />
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-roboto">Subtotal</span>
                        <span className="font-roboto">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-roboto">Tax</span>
                        <span className="font-roboto">${tax.toFixed(2)}</span>
                      </div>
                      {deliveryMethod === "delivery" && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground font-roboto">Delivery Fee</span>
                          <span className="font-roboto">${deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-medium mt-2">
                        <span className="font-poppins">Total</span>
                        <span className="font-poppins">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {deliveryMethod === "delivery" && (
                    <div className="bg-muted p-4 rounded-md text-left">
                      <h3 className="font-medium font-poppins mb-2">Delivery Information</h3>
                      <p className="text-sm font-roboto">
                        Your order will be delivered to your address in approximately 30-45 minutes. You'll receive a
                        text message when your delivery is on the way.
                      </p>
                    </div>
                  )}

                  {deliveryMethod === "pickup" && (
                    <div className="bg-muted p-4 rounded-md text-left">
                      <h3 className="font-medium font-poppins mb-2">Pickup Information</h3>
                      <p className="text-sm font-roboto">
                        Your order will be ready for pickup in approximately 15-20 minutes at:
                        <br />
                        <strong>123 Restaurant Street, Foodie City, FC 12345</strong>
                        <br />
                        You'll receive a text message when your order is ready.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button onClick={handleNewOrder} className="w-full font-poppins btn-hover-effect">
                    Place Another Order
                  </Button>
                  <Button variant="outline" asChild className="w-full font-poppins">
                    <Link href="/account/orders">View Order History</Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <ScrollAnimation type="slideInRight" threshold={0.1}>
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="font-roboto">
                        <span className="font-medium">{item.quantity}x</span> {item.name}
                      </div>
                      <div className="font-roboto">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-roboto">Subtotal</span>
                      <span className="font-roboto">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-roboto">Tax</span>
                      <span className="font-roboto">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-roboto">Delivery Fee</span>
                      <span className="font-roboto">${deliveryFee.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-medium">
                    <span className="font-poppins">Total</span>
                    <span className="font-poppins">${total.toFixed(2)}</span>
                  </div>

                  {currentStep !== "confirmation" && (
                    <div className="pt-4">
                      <div className="flex items-center text-sm mb-2">
                        <CreditCard className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground font-roboto">Secure Payment</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Truck className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground font-roboto">
                          {deliveryMethod === "delivery" ? "Fast Delivery (30-45 min)" : "Quick Pickup (15-20 min)"}
                        </span>
                      </div>
                    </div>
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
