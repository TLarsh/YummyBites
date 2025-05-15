"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { user, isAuthenticated, signOut } = useAuth()
  const headerRef = useRef(null)

  // Check if we're on an admin page or auth page
  const isAdminPage = pathname.startsWith("/admin")
  const isAuthPage =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up") || pathname.startsWith("/forgot-password")

  const [showHeader, setShowHeader] = useState(!(isAdminPage || isAuthPage))

  useEffect(() => {
    setShowHeader(!(isAdminPage || isAuthPage))
  }, [isAdminPage, isAuthPage])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Order Online", href: "/order" },
    { name: "Reservations", href: "/reservations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleSignOut = () => {
    signOut()
  }

  useEffect(() => {
    // Set the header height CSS variable
    const header = headerRef.current
    if (header) {
      const headerHeight = header.offsetHeight
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`)
    }

    // Prevent body scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!showHeader) return null

  return (
    <header
      ref={headerRef}
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
          <Link href="/checkout">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User Account" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {user?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-poppins">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account" className="cursor-pointer w-full font-roboto">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders" className="cursor-pointer w-full font-roboto">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive font-roboto">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" asChild className="font-poppins">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link href="/checkout">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="rounded-full h-9 w-9">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User Account" className="rounded-full h-9 w-9">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {user?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-poppins">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account" className="cursor-pointer w-full font-roboto">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders" className="cursor-pointer w-full font-roboto">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive font-roboto">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" asChild className="font-poppins text-sm h-9 px-3">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}

          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="rounded-full h-9 w-9 ml-1"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-[var(--header-height)] left-0 right-0 bottom-0 bg-background/98 backdrop-blur-md border-t z-40 animate-in slide-in-from-top duration-300 overflow-auto">
          <div className="container py-6 space-y-0 flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  `flex items-center py-4 text-base font-medium transition-colors hover:text-primary font-poppins animate-fadeIn border-b border-muted`,
                  pathname === item.href ? "text-primary font-semibold" : "text-foreground",
                  `animate-delay-${index * 50}`,
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <Link
                  href="/account"
                  className="flex items-center py-4 text-base font-medium transition-colors hover:text-primary font-poppins animate-fadeIn border-b border-muted"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="mr-3 h-4 w-4" />
                  My Account
                </Link>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsOpen(false)
                  }}
                  className="flex items-center py-4 text-base font-medium w-full text-left transition-colors hover:text-destructive text-destructive/90 font-poppins animate-fadeIn"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="flex items-center py-4 text-base font-medium transition-colors hover:text-primary font-poppins animate-fadeIn border-b border-muted"
                onClick={() => setIsOpen(false)}
              >
                <User className="mr-3 h-4 w-4" />
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
