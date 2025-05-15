import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-2xl font-bold text-primary font-poppins">YummyBites</h3>
          <p className="text-muted-foreground font-roboto">
            Delicious food, delivered to your doorstep. Experience the taste of excellence.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="animate-fadeIn animate-delay-100">
          <h4 className="font-medium text-lg mb-4 font-poppins">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/menu"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto inline-block relative group"
              >
                Our Menu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/reservations"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto inline-block relative group"
              >
                Reservations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/order"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto inline-block relative group"
              >
                Order Online
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto inline-block relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="animate-fadeIn animate-delay-200">
          <h4 className="font-medium text-lg mb-4 font-poppins">Opening Hours</h4>
          <ul className="space-y-2 text-muted-foreground font-roboto">
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

        <div className="animate-fadeIn animate-delay-300">
          <h4 className="font-medium text-lg mb-4 font-poppins">Contact Us</h4>
          <address className="not-italic space-y-2 text-muted-foreground font-roboto">
            <p>123 Restaurant Street</p>
            <p>Foodie City, FC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@yummybites.com"
                className="hover:text-primary transition-colors duration-300 inline-block relative group"
              >
                info@yummybites.com
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-muted-foreground/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-roboto">
            &copy; {new Date().getFullYear()} YummyBites. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
