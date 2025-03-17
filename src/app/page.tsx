import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Newspaper,
  Twitter,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/landingpage/testimonial";
import FeatureCard from "@/components/landingpage/featured-card";
import HowItWorksStep from "@/components/landingpage/how-it-works";
import img1 from "@/../public/images/remote.png";
import img2 from "@/../public/images/before.jpg";
import img3 from "@/../public/images/after.jpg";
import newsImage from "@/../public/images/news.jpg";
import twitterImage from "@/../public/images/twitter-720970_1280.png";
import emailImage from "@/../public/images/email.png";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-600"></div>
          <span className="text-xl font-bold">SimplifyAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-blue-600"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-blue-600"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-blue-600"
          >
            Pricing
          </Link>
        </nav>


        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>

      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-blue-700">
                  Simplify Your Life with SimplifyAI
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-[600px]">
                  Your AI-powered assistant for emails, news, and social media.
                  Stay organized, informed, and stress-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href='/signup'>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                    >
                      Get Started for Free <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={img1}
                  alt="SimplifyAI Dashboard"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
                Your Life, Simplified
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
                In a world overflowing with information, SimplifyAI is here to
                help you cut through the noise. From managing your inbox to
                staying updated on global news and social media, our AI-powered
                tools are designed to save you time and energy. Focus on what
                matters most – we'll handle the rest.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={img2}
                  alt="Cluttered inbox"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    Before SimplifyAI
                  </span>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={img3}
                  alt="Organized inbox"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    After SimplifyAI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
                How We Make Your Life Easier
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
                Our AI-powered tools are designed to simplify your digital life
                across multiple platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Mail className="h-10 w-10 text-blue-600" />}
                title="Emails, Sorted."
                description="Summarize emails, generate AI replies, sort by urgency, and extract important dates to your calendar – all in one place."
                imageSrc=""
              />
              <FeatureCard
                icon={<Newspaper className="h-10 w-10 text-blue-600" />}
                title="News, Tailored for You."
                description="Get concise news summaries based on your interests, with an AI chatbot to dive deeper and suggest related videos."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <FeatureCard
                icon={<Twitter className="h-10 w-10 text-blue-600" />}
                title="Twitter, Without the Noise."
                description="Stay updated with summarized content from your feed and trending topics, curated just for you."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
                Simple, Smart, and Seamless
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
                Getting started with SimplifyAI is easy. Just follow these
                simple steps.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-[22px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                <div className="space-y-12">
                  <HowItWorksStep
                    number={1}
                    title="Connect Your Accounts"
                    description="Link your email, news preferences, and Twitter."
                  />
                  <HowItWorksStep
                    number={2}
                    title="Let AI Do the Work"
                    description="Our system analyzes, summarizes, and organizes everything for you."
                  />
                  <HowItWorksStep
                    number={3}
                    title="Enjoy a Simpler Life"
                    description="Spend less time managing chaos and more time living your life."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
                What People Are Saying
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
                Don't just take our word for it. Here's what our users have to
                say.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Life?
            </h2>
            <p className="text-xl mb-8 max-w-[600px] mx-auto">
              Join thousands of users who are already saving time and staying
              organized with SimplifyAI.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
            >
              Get Started for Free <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                <span className="text-xl font-bold">SimplifyAI</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Your AI-powered assistant for a simpler digital life.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscribe</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Stay updated with our latest features and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} SimplifyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
