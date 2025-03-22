"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Mail,
  Newspaper,
  Twitter,
  User,
  Settings,
  Bell,
  Search,
  Clock,
  BarChart2,
  FileText,
  Share2,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
  Plus,
  ExternalLink,
  Menu,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type DashboardTab = "dashboard" | "history" | "settings" | "news" | "emails" | "twitter";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>("dashboard");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`flex min-h-screen flex-col ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600"></div>
              <span className="text-xl font-bold">SimplifyAI</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <nav className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Main
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="#"
                      onClick={() => setActiveTab("dashboard")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                    >
                      <BarChart2 className="h-5 w-5" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={() => setActiveTab("history")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Clock className="h-5 w-5" />
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={() => setActiveTab("settings")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Settings className="h-5 w-5" />
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Summarize
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/news"
                      onClick={() => setActiveTab("news")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Newspaper className="h-5 w-5" />
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emails"
                      onClick={() => setActiveTab("emails")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Mail className="h-5 w-5" />
                      Emails
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/twitter"
                      onClick={() => setActiveTab("twitter")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Twitter className="h-5 w-5" />
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/calendar"
                      onClick={() => setActiveTab("emails")}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Calendar className="h-5 w-5" />
                      Calender
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Support
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/help"
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <HelpCircle className="h-5 w-5" />
                      Help & Support
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Pro Plan</p>
              </div>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        </div>

        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
          {/* Header */}
          <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-10">
            <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
                <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search..." className="pl-10 w-[200px] lg:w-[300px]" />
                </div>
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-gray-500">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline-block">John Doe</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
            {activeTab === "dashboard" && (
              <>
                {/* User Profile Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle>Welcome back, John!</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="/placeholder.svg?height=96&width=96" />
                          <AvatarFallback className="text-2xl">JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div>
                            <h3 className="text-lg font-medium">Vaibhav Kumar Mahto</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Vaibhav@example.com</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="outline"
                              className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                            >
                              Pro Plan
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                            >
                              Email Connected
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                            >
                              Twitter Connected
                            </Badge>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Edit Profile</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Usage Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Monthly Summaries</span>
                            <span className="font-medium">78/100</span>
                          </div>
                          <Progress value={78} className="h-2 bg-blue-100 dark:bg-blue-950" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>API Calls</span>
                            <span className="font-medium">245/500</span>
                          </div>
                          <Progress value={49} className="h-2 bg-blue-100 dark:bg-blue-950" />
                        </div>
                        <Button
                          variant="outline"
                          className="w-full mt-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                        >
                          Upgrade Plan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Quick Access Widgets */}
                <section>
                  <h2 className="text-xl font-bold mb-4">Quick Summarize</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-40">
                        <Image src="/placeholder.svg?height=160&width=400" alt="News" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <h3 className="text-white text-lg font-bold">News</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          Summarize news articles and stay updated with the latest headlines.
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Newspaper className="mr-2 h-4 w-4" />
                          Summarize News
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-40">
                        <Image src="/placeholder.svg?height=160&width=400" alt="Email" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <h3 className="text-white text-lg font-bold">Emails</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          Summarize your emails and extract important information automatically.
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Mail className="mr-2 h-4 w-4" />
                          Summarize Emails
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-40">
                        <Image src="/placeholder.svg?height=160&width=400" alt="Twitter" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <h3 className="text-white text-lg font-bold">Twitter</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          Summarize Twitter threads and stay on top of trending topics.
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Twitter className="mr-2 h-4 w-4" />
                          Summarize Twitter
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Usage Statistics */}
                <section>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Usage Statistics</h2>
                    <Tabs defaultValue="daily">
                      <TabsList>
                        <TabsTrigger value="daily">Daily</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="h-[300px] flex items-center justify-center">
                        <div className="text-center">
                          <BarChart2 className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                          <p className="text-lg font-medium">Usage Statistics Chart</p>
                          <p className="text-sm text-gray-500">Showing your usage across different content types</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Recent Summaries */}
                <section>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Recent Summaries</h2>
                    <div className="flex items-center gap-2">
                      <Input placeholder="Search summaries..." className="w-[200px] h-9" />
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Card>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-800">
                              <th className="text-left p-4 font-medium">Type</th>
                              <th className="text-left p-4 font-medium">Title</th>
                              <th className="text-left p-4 font-medium">Date</th>
                              <th className="text-left p-4 font-medium">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                type: "News",
                                icon: <Newspaper className="h-4 w-4" />,
                                title: "Global Tech Conference Highlights",
                                date: "Today, 10:30 AM",
                              },
                              {
                                type: "Email",
                                icon: <Mail className="h-4 w-4" />,
                                title: "Project Update from Marketing Team",
                                date: "Yesterday, 4:15 PM",
                              },
                              {
                                type: "Twitter",
                                icon: <Twitter className="h-4 w-4" />,
                                title: "Thread on AI Advancements",
                                date: "Mar 8, 2:45 PM",
                              },
                              {
                                type: "News",
                                icon: <Newspaper className="h-4 w-4" />,
                                title: "Economic Forecast for Q2",
                                date: "Mar 7, 9:20 AM",
                              },
                              {
                                type: "Email",
                                icon: <Mail className="h-4 w-4" />,
                                title: "Client Meeting Agenda",
                                date: "Mar 6, 11:05 AM",
                              },
                            ].map((item, index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                              >
                                <td className="p-4">
                                  <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-2 rounded-full">
                                      {item.icon}
                                    </div>
                                    <span>{item.type}</span>
                                  </div>
                                </td>
                                <td className="p-4 font-medium">{item.title}</td>
                                <td className="p-4 text-gray-500 dark:text-gray-400">{item.date}</td>
                                <td className="p-4">
                                  <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm">
                                      <FileText className="h-4 w-4" />
                                      <span className="sr-only">View</span>
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <Share2 className="h-4 w-4" />
                                      <span className="sr-only">Share</span>
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-800">
                        <Button variant="ghost" size="sm">
                          Previous
                        </Button>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Page 1 of 3</div>
                        <Button variant="ghost" size="sm">
                          Next
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Customization and Integrations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Customization Options */}
                  <section>
                    <h2 className="text-xl font-bold mb-4">Customization</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="summary-length">Summary Length</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred summary length</p>
                          </div>
                          <select
                            id="summary-length"
                            className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <option>Short</option>
                            <option>Medium</option>
                            <option>Long</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="auto-summarize">Auto Summarize</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Automatically summarize new content</p>
                          </div>
                          <Switch id="auto-summarize" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive email notifications for new summaries
                            </p>
                          </div>
                          <Switch id="email-notifications" />
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Save Preferences</Button>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Connected Accounts */}
                  <section>
                    <h2 className="text-xl font-bold mb-4">Connected Accounts</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-2 rounded-full">
                              <Mail className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-medium">Email</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                            Connected
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-2 rounded-full">
                              <Twitter className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-medium">Twitter</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">@johndoe</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                            Connected
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-2 rounded-full">
                              <Newspaper className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-medium">News API</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Custom news sources</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                          >
                            Connect
                          </Button>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Plus className="mr-2 h-4 w-4" />
                          Add New Connection
                        </Button>
                      </CardContent>
                    </Card>
                  </section>
                </div>

                {/* Trending and Suggested */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Trending News */}
                  <section>
                    <h2 className="text-xl font-bold mb-4">Trending News</h2>
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                          {[
                            "Tech Giants Announce New AI Collaboration",
                            "Global Climate Summit Reaches Historic Agreement",
                            "Financial Markets React to Interest Rate Changes",
                            "Healthcare Innovation Breakthrough Announced",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center text-blue-700 dark:text-blue-400">
                                <Newspaper className="h-5 w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium truncate">{item}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {index === 0
                                    ? "2 hours ago"
                                    : index === 1
                                      ? "5 hours ago"
                                      : index === 2
                                        ? "Yesterday"
                                        : "2 days ago"}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm" className="flex-shrink-0">
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                          <Button
                            variant="ghost"
                            className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950"
                          >
                            View All Trending News
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Suggested Summaries */}
                  <section>
                    <h2 className="text-xl font-bold mb-4">Suggested for You</h2>
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                          {[
                            {
                              title: "How AI is Transforming Content Creation",
                              type: "Article",
                              icon: <FileText className="h-5 w-5" />,
                            },
                            {
                              title: "Quarterly Business Review Thread",
                              type: "Twitter",
                              icon: <Twitter className="h-5 w-5" />,
                            },
                            {
                              title: "Project Deadline Updates",
                              type: "Email",
                              icon: <Mail className="h-5 w-5" />,
                            },
                            {
                              title: "Industry Trends Report 2025",
                              type: "Article",
                              icon: <FileText className="h-5 w-5" />,
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center text-blue-700 dark:text-blue-400">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium truncate">{item.title}</h3>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    {item.type}
                                  </Badge>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">Based on your history</span>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-shrink-0 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                              >
                                Summarize
                              </Button>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                          <Button
                            variant="ghost"
                            className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950"
                          >
                            View All Suggestions
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
