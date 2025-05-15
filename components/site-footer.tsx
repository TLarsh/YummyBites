import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">YummyBites</h3>
          <p className="text-muted-foreground">
            Delicious food, delivered to your doorstep. Experience the taste of excellence.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/menu" className="text-muted-foreground hover:text-primary">
                Our Menu
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="text-muted-foreground hover:text-primary">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/order" className="text-muted-foreground hover:text-primary">
                Order Online
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span>11:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Contact Us</h4>
          <address className="not-italic space-y-2 text-muted-foreground">
            <p>123 Restaurant Street</p>
            <p>Foodie City, FC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>
              Email:{" "}
              <a href="mailto:info@yummybites.com" className="hover:text-primary">
                info@yummybites.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-muted-foreground/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} YummyBites. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
