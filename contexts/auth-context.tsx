"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  name: string
  email: string
} | null

type AuthContextType = {
  user: User
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (name: string, email: string, password: string) => Promise<boolean>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated on initial load
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated")
      const userData = localStorage.getItem("user")

      if (auth === "true" && userData) {
        setUser(JSON.parse(userData))
        setIsAuthenticated(true)
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const signIn = async (email: string, password: string): Promise<boolean> => {
    // In a real app, you would make an API call to authenticate
    // For demo purposes, we'll just simulate a successful login with demo credentials
    if (email === "demo@example.com" && password === "password") {
      const user = { name: "Demo User", email }
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("user", JSON.stringify(user))

      setUser(user)
      setIsAuthenticated(true)
      return true
    }

    return false
  }

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, you would make an API call to register
    // For demo purposes, we'll just simulate a successful registration
    const user = { name, email }
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("user", JSON.stringify(user))

    setUser(user)
    setIsAuthenticated(true)
    return true
  }

  const signOut = () => {
    // Clear auth state
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("user")

    setUser(null)
    setIsAuthenticated(false)

    // Redirect to home page
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
