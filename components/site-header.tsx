"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on an admin page
  const isAdminPage = pathname.startsWith("/admin")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't show the site header on admin pages
  if (isAdminPage) return null

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Order Online", href: "/order" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold text-primary font-poppins transition-all duration-300 group-hover:scale-105">
            YummyBites
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative font-poppins group",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : isScrolled
                    ? "text-foreground"
                    : "text-foreground/90",
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              {pathname === item.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon" aria-label="Account" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t animate-fadeIn">
          <div className="container py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  `block py-3 text-base font-medium transition-colors hover:text-primary font-poppins animate-fadeIn`,
                  pathname === item.href ? "text-primary font-semibold" : "text-foreground",
                  `animate-delay-${index * 100}`,
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/account"
              className="block py-3 text-base font-medium transition-colors hover:text-primary font-poppins animate-fadeIn animate-delay-500"
              onClick={() => setIsOpen(false)}
            >
              My Account
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
