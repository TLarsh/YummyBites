import Link from "next/link"
import { ArrowUpRight, Calendar, DollarSign, ShoppingBag, TrendingUp, Users, Utensils } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

export default function AdminDashboard() {
  // Sample data for charts
  const salesData = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 6890 },
    { name: "Sat", sales: 8390 },
    { name: "Sun", sales: 7490 },
  ]

  // Sample recent orders
  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Smith",
      date: "2023-05-15 14:30",
      amount: "$78.50",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      customer: "Sarah Johnson",
      date: "2023-05-15 13:45",
      amount: "$42.25",
      status: "Processing",
    },
    {
      id: "ORD-003",
      customer: "Michael Brown",
      date: "2023-05-15 12:15",
      amount: "$65.00",
      status: "Preparing",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      date: "2023-05-15 11:30",
      amount: "$29.99",
      status: "Delivered",
    },
    {
      id: "ORD-005",
      customer: "Robert Wilson",
      date: "2023-05-15 10:45",
      amount: "$53.75",
      status: "Delivered",
    },
  ]

  // Sample upcoming reservations
  const upcomingReservations = [
    {
      id: "RES-001",
      customer: "David Miller",
      date: "2023-05-15 19:00",
      guests: 4,
      table: "T12",
    },
    {
      id: "RES-002",
      customer: "Jennifer Lee",
      date: "2023-05-15 20:30",
      guests: 2,
      table: "T05",
    },
    {
      id: "RES-003",
      customer: "Thomas Anderson",
      date: "2023-05-15 18:15",
      guests: 6,
      table: "T08",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex gap-2">
          <Button>Export Reports</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+12.4%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reservations</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+289</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1,324</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+5.7%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Weekly Sales Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/orders" className="flex items-center gap-1">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Upcoming Reservations */}
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Reservations</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/reservations" className="flex items-center gap-1">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Table</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingReservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell className="font-medium">{reservation.id}</TableCell>
                    <TableCell>{reservation.customer}</TableCell>
                    <TableCell>{reservation.date}</TableCell>
                    <TableCell>{reservation.guests}</TableCell>
                    <TableCell>{reservation.table}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button asChild variant="outline" className="h-auto py-4 px-6">
            <Link href="/admin/orders/new" className="flex flex-col items-center">
              <ShoppingBag className="h-6 w-6 mb-2" />
              <span>New Order</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 px-6">
            <Link href="/admin/reservations/new" className="flex flex-col items-center">
              <Calendar className="h-6 w-6 mb-2" />
              <span>New Reservation</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 px-6">
            <Link href="/admin/menu/new" className="flex flex-col items-center">
              <Utensils className="h-6 w-6 mb-2" />
              <span>Add Menu Item</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 px-6">
            <Link href="/admin/promotions/new" className="flex flex-col items-center">
              <TrendingUp className="h-6 w-6 mb-2" />
              <span>New Promotion</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
