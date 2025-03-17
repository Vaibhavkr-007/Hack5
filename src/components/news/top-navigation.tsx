"use client"

import { useState } from "react"
import { Calendar, Mail, Twitter, Newspaper, Home, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DashboardTab = "home" | "calendar" | "twitter" | "news" | "email"

interface TopNavigationProps {
  activeTab: DashboardTab
  onTabChange: (tab: DashboardTab) => void
}

export default function TopNavigation({ activeTab, onTabChange }: TopNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "twitter", label: "Twitter", icon: Twitter },
    { id: "news", label: "News", icon: Newspaper },
    { id: "email", label: "Email", icon: Mail },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-500">Dashboard</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === item.id ? "text-blue-500 bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => onTabChange(item.id as DashboardTab)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>

          {/* User menu and mobile menu button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Bell className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 pb-4 border-t border-gray-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`flex items-center w-full px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === item.id ? "text-blue-500 bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    onTabChange(item.id as DashboardTab)
                    setMobileMenuOpen(false)
                  }}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

