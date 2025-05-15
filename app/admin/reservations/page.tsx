import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { CalendarIcon, MoreHorizontal, Plus, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ReservationsPage() {
  // Sample reservations data
  const reservations = [
    {
      id: "RES-001",
      customer: "David Miller",
      phone: "(555) 123-4567",
      date: "2023-05-15",
      time: "19:00",
      guests: 4,
      table: "T12",
      status: "Confirmed",
    },
    {
      id: "RES-002",
      customer: "Jennifer Lee",
      phone: "(555) 234-5678",
      date: "2023-05-15",
      time: "20:30",
      guests: 2,
      table: "T05",
      status: "Confirmed",
    },
    {
      id: "RES-003",
      customer: "Thomas Anderson",
      phone: "(555) 345-6789",
      date: "2023-05-15",
      time: "18:15",
      guests: 6,
      table: "T08",
      status: "Confirmed",
    },
    {
      id: "RES-004",
      customer: "Sarah Johnson",
      phone: "(555) 456-7890",
      date: "2023-05-16",
      time: "19:30",
      guests: 3,
      table: "T10",
      status: "Pending",
    },
    {
      id: "RES-005",
      customer: "Michael Brown",
      phone: "(555) 567-8901",
      date: "2023-05-16",
      time: "20:00",
      guests: 5,
      table: "T15",
      status: "Confirmed",
    },
    {
      id: "RES-006",
      customer: "Emily Davis",
      phone: "(555) 678-9012",
      date: "2023-05-16",
      time: "18:30",
      guests: 2,
      table: "T03",
      status: "Cancelled",
    },
    {
      id: "RES-007",
      customer: "Robert Wilson",
      phone: "(555) 789-0123",
      date: "2023-05-17",
      time: "19:15",
      guests: 4,
      table: "T09",
      status: "Confirmed",
    },
    {
      id: "RES-008",
      customer: "Lisa Anderson",
      phone: "(555) 890-1234",
      date: "2023-05-17",
      time: "20:45",
      guests: 2,
      table: "T07",
      status: "Pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Reservations</h1>
        <Button asChild>
          <Link href="/admin/reservations/new">
            <Plus className="mr-2 h-4 w-4" /> New Reservation
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Reservations</CardTitle>
          <CardDescription>View and manage all table reservations in one place.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search reservations..." className="pl-8 w-full" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reservations</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="today">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Calendar View
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell className="font-medium">{reservation.id}</TableCell>
                    <TableCell>
                      <div>
                        <div>{reservation.customer}</div>
                        <div className="text-xs text-muted-foreground">{reservation.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {reservation.date} at {reservation.time}
                    </TableCell>
                    <TableCell>{reservation.guests}</TableCell>
                    <TableCell>{reservation.table}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          reservation.status === "Confirmed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : reservation.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Reservation</DropdownMenuItem>
                          <DropdownMenuItem>Change Table</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Cancel Reservation</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>8</strong> of <strong>24</strong> reservations
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
