"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  Settings,
  ShoppingBag,
  Calendar,
  Bell,
  CreditCard,
  LogOut,
  Edit,
  ChevronRight,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    address: "123 Main St, Apt 4B, New York, NY 10001",
    avatar: "/placeholder.svg?height=100&width=100",
    joinDate: "January 2023",
  }

  // Mock order history
  const orders = [
    {
      id: "ORD-1234",
      date: "May 15, 2023",
      total: "$45.97",
      status: "Delivered",
      items: [
        { name: "Classic Cheeseburger", quantity: 2 },
        { name: "Caesar Salad", quantity: 1 },
        { name: "Fresh Lemonade", quantity: 2 },
      ],
    },
    {
      id: "ORD-1235",
      date: "May 8, 2023",
      total: "$32.50",
      status: "Delivered",
      items: [
        { name: "Margherita Pizza", quantity: 1 },
        { name: "Garlic Bread", quantity: 1 },
        { name: "Tiramisu", quantity: 1 },
      ],
    },
    {
      id: "ORD-1236",
      date: "April 29, 2023",
      total: "$28.99",
      status: "Delivered",
      items: [
        { name: "Grilled Salmon", quantity: 1 },
        { name: "Fresh Lemonade", quantity: 1 },
      ],
    },
  ]

  // Mock reservations
  const reservations = [
    {
      id: "RES-5678",
      date: "May 20, 2023",
      time: "7:30 PM",
      guests: 4,
      status: "Confirmed",
    },
    {
      id: "RES-5679",
      date: "April 15, 2023",
      time: "6:00 PM",
      guests: 2,
      status: "Completed",
    },
    {
      id: "RES-5680",
      date: "March 28, 2023",
      time: "8:00 PM",
      guests: 6,
      status: "Completed",
    },
  ]

  return (
    <div className="container py-24 mt-16">
      <ScrollAnimation type="fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-poppins mb-4">My Account</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            Manage your profile, view your order history, and track your reservations.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <ScrollAnimation type="slideInLeft" threshold={0.1} className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="text-lg font-poppins">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold font-poppins">{user.name}</h2>
                <p className="text-sm text-muted-foreground font-roboto">Member since {user.joinDate}</p>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="w-full justify-start font-poppins"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "orders" ? "default" : "ghost"}
                  className="w-full justify-start font-poppins"
                  onClick={() => setActiveTab("orders")}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "reservations" ? "default" : "ghost"}
                  className="w-full justify-start font-poppins"
                  onClick={() => setActiveTab("reservations")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Reservations
                </Button>
                <Button
                  variant={activeTab === "payment" ? "default" : "ghost"}
                  className="w-full justify-start font-poppins"
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button
                  variant={activeTab === "notifications" ? "default" : "ghost"}
                  className="w-full justify-start font-poppins"
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className="w-full justify-start font-poppins"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Separator className="my-2" />
                <Button variant="ghost" className="w-full justify-start text-destructive font-poppins">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <ScrollAnimation type="fadeIn" delay={0.2} threshold={0.1}>
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Profile Information</CardTitle>
                  <CardDescription className="font-roboto">View and update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-poppins">
                        Full Name
                      </Label>
                      <Input id="name" defaultValue={user.name} className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-poppins">
                        Email Address
                      </Label>
                      <Input id="email" type="email" defaultValue={user.email} className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-poppins">
                        Phone Number
                      </Label>
                      <Input id="phone" defaultValue={user.phone} className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob" className="font-poppins">
                        Date of Birth
                      </Label>
                      <Input id="dob" type="date" className="font-roboto" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="address" className="font-poppins">
                      Delivery Address
                    </Label>
                    <Input id="address" defaultValue={user.address} className="font-roboto" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="font-poppins">
                        City
                      </Label>
                      <Input id="city" defaultValue="New York" className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="font-poppins">
                        State
                      </Label>
                      <Input id="state" defaultValue="NY" className="font-roboto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip" className="font-poppins">
                        ZIP Code
                      </Label>
                      <Input id="zip" defaultValue="10001" className="font-roboto" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="font-poppins btn-hover-effect">Save Changes</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Order History</CardTitle>
                  <CardDescription className="font-roboto">View your past orders and their details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {orders.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium font-poppins mb-2">No Orders Yet</h3>
                      <p className="text-muted-foreground font-roboto mb-4">
                        You haven't placed any orders yet. Start ordering delicious food!
                      </p>
                      <Button asChild className="font-poppins btn-hover-effect">
                        <Link href="/order">Browse Menu</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <Card key={order.id} className="overflow-hidden">
                          <div className="bg-muted p-4 flex justify-between items-center">
                            <div>
                              <p className="font-medium font-poppins">{order.id}</p>
                              <p className="text-sm text-muted-foreground font-roboto">{order.date}</p>
                            </div>
                            <div className="flex items-center">
                              <Badge
                                variant={order.status === "Delivered" ? "default" : "outline"}
                                className="mr-4 font-roboto"
                              >
                                {order.status}
                              </Badge>
                              <span className="font-medium font-poppins">{order.total}</span>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                  <span className="font-roboto">
                                    {item.quantity}x {item.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-end mt-4">
                              <Button variant="ghost" size="sm" className="font-poppins">
                                View Details <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="font-poppins">
                    Load More Orders
                  </Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "reservations" && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Reservations</CardTitle>
                  <CardDescription className="font-roboto">Manage your table reservations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reservations.length === 0 ? (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium font-poppins mb-2">No Reservations</h3>
                      <p className="text-muted-foreground font-roboto mb-4">
                        You haven't made any reservations yet. Book a table for your next visit!
                      </p>
                      <Button asChild className="font-poppins btn-hover-effect">
                        <Link href="/reservations">Book a Table</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {reservations.map((reservation) => (
                        <Card key={reservation.id} className="overflow-hidden">
                          <div className="bg-muted p-4 flex justify-between items-center">
                            <div>
                              <p className="font-medium font-poppins">{reservation.id}</p>
                              <div className="flex items-center text-sm text-muted-foreground font-roboto">
                                <Calendar className="h-3.5 w-3.5 mr-1" />
                                {reservation.date}
                              </div>
                            </div>
                            <div>
                              <Badge
                                variant={reservation.status === "Confirmed" ? "default" : "outline"}
                                className="font-roboto"
                              >
                                {reservation.status}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex items-start">
                                <Clock className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium font-poppins">Time</p>
                                  <p className="text-sm font-roboto">{reservation.time}</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <User className="h-4 w-4 mr-2 text-primary mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium font-poppins">Party Size</p>
                                  <p className="text-sm font-roboto">{reservation.guests} guests</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end mt-4 space-x-2">
                              {reservation.status === "Confirmed" && (
                                <Button variant="outline" size="sm" className="font-poppins">
                                  Modify
                                </Button>
                              )}
                              <Button variant="ghost" size="sm" className="font-poppins">
                                View Details <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild variant="outline" className="font-poppins">
                    <Link href="/reservations">Make New Reservation</Link>
                  </Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "payment" && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Payment Methods</CardTitle>
                  <CardDescription className="font-roboto">Manage your saved payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Card className="overflow-hidden">
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center mr-4">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium font-poppins">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground font-roboto">Expires 12/25</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-4 font-roboto">
                            Default
                          </Badge>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center mr-4">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium font-poppins">Mastercard ending in 5678</p>
                            <p className="text-sm text-muted-foreground font-roboto">Expires 10/24</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Button variant="outline" className="w-full font-poppins">
                    <CreditCard className="mr-2 h-4 w-4" /> Add New Payment Method
                  </Button>
                </CardContent>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Notification Preferences</CardTitle>
                  <CardDescription className="font-roboto">Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium font-poppins">Order Updates</p>
                        <p className="text-sm text-muted-foreground font-roboto">
                          Receive notifications about your order status
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-roboto">
                          Email
                        </Badge>
                        <Badge variant="outline" className="font-roboto">
                          SMS
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium font-poppins">Reservation Reminders</p>
                        <p className="text-sm text-muted-foreground font-roboto">
                          Get reminded about upcoming reservations
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-roboto">
                          Email
                        </Badge>
                        <Badge variant="outline" className="font-roboto">
                          SMS
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium font-poppins">Promotions & Offers</p>
                        <p className="text-sm text-muted-foreground font-roboto">
                          Stay updated on special deals and promotions
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-roboto">
                          Email
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium font-poppins">Newsletter</p>
                        <p className="text-sm text-muted-foreground font-roboto">
                          Receive our monthly newsletter with recipes and events
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-roboto">
                          Email
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="font-poppins btn-hover-effect">Save Preferences</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Account Settings</CardTitle>
                  <CardDescription className="font-roboto">
                    Manage your account settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="language" className="font-poppins">
                        Language
                      </Label>
                      <select
                        id="language"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                      </select>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium font-poppins">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password" className="font-poppins">
                            Current Password
                          </Label>
                          <Input id="current-password" type="password" className="font-roboto" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password" className="font-poppins">
                            New Password
                          </Label>
                          <Input id="new-password" type="password" className="font-roboto" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password" className="font-poppins">
                            Confirm New Password
                          </Label>
                          <Input id="confirm-password" type="password" className="font-roboto" />
                        </div>
                        <Button className="font-poppins">Update Password</Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium text-destructive font-poppins">Danger Zone</h3>
                      <p className="text-sm text-muted-foreground font-roboto mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive" className="font-poppins">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
