import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Newspaper,
  Twitter,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";
import { SpotlightHeading } from "@/components/ui/spotlightheading";
import { VortexSection } from "@/components/ui/vortexsection";
import { FeatureCard } from "@/components/landingpage/featured-card";
import HowItWorksSection from "@/components/ui/worksection";
import { TextShimmer } from "../../components/motion-primitives/text-shimmer";
import Testimonials from "@/components/landingpage/testimonial";
import { RainbowButton } from "@/components/ui/rainbowbutton";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { RippleButton } from "@/components/magicui/ripple-button";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-bl from-black via-gray-950 to-black">
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 transition-transform group-hover:scale-105" />
          <span className="text-xl font-bold text-gray-100 transition-colors group-hover:text-gray-300">
            SimplifyAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Testimonial", "Pricing"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-all 
                         hover:scale-105 hover:font-semibold"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <RippleButton
              rippleColor="#00008B"
              className="hidden mt-5 md:flex transition-all"
            >
              {" "}
              Log in
            </RippleButton>
            ;
          </Link>
          <Link href="/signup">
            <ShinyButton>Get Started</ShinyButton>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <div>
            <SpotlightHeading />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="backdrop-blur-sm">
          <VortexSection />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                How We Make Your Life{" "}
                <span className="text-gray-400">Easier</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
                Our AI-powered tools are designed to simplify your digital life
                across multiple platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
              <FeatureCard
                icon={<Mail className="h-10 w-10 text-gray-900" />}
                title="Emails, Sorted."
                description="Summarize emails, generate AI replies, sort by urgency, and extract important dates to your calendar – all in one place."
                imgsrc="/images/Mail Mondays GIF by ailadi.gif"
              />
              <FeatureCard
                icon={<Newspaper className="h-10 w-10 text-gray-900" />}
                title="News, Tailored for You."
                description="Get concise news summaries based on your interests, with an AI chatbot to dive deeper and suggest related videos."
                imgsrc="/images/download.gif"
              />
              <FeatureCard
                icon={<Twitter className="h-10 w-10 text-gray-900" />}
                title="Twitter, Without the Noise."
                description="Stay updated with summarized content from your feed and trending topics, curated just for you."
                imgsrc="/images/Twitter X GIF by systaime.gif"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection />
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20  backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 w-full">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                <TextShimmer
                  duration={2.8}
                  className="font-mono text-5xl pb-2 "
                >
                  What People Are Saying
                </TextShimmer>
              </h2>
              <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
                Don't just take our word for it. Here's what our users have to
                say.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        <div className="flex flex-col w-screen "></div>

        {/* CTA Section */}
        <section className="py-20 ">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                Ready to Simplify Your Life?
              </h2>
              <p className="text-xl mb-8 text-gray-400">
                Join thousands of users who are already saving time and staying
                organized with SimplifyAI.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 hover:from-gray-200 
                          hover:to-gray-400 gap-2 shadow-lg hover:shadow-xl transition-transform hover:scale-105"
              >
                Get Started for Free <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className=" backdrop-blur-sm py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400" />
                <span className="text-xl font-bold text-gray-100">
                  SimplifyAI
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Your AI-powered assistant for a simpler digital life.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-100 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-100 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-100">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-100">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest features and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800/50 text-gray-100 
                            focus:outline-none focus:ring-2 focus:ring-gray-600 backdrop-blur-sm w-full"
                />
                <Button className="rounded-l-none bg-gray-700 hover:bg-gray-600 text-gray-100 transition-all">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SimplifyAI. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <footer className="bg-gray-950/80 backdrop-blur-lg py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-400" />
                <span className="text-xl font-semibold text-gray-100">
                  SimplifyAI
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Transforming complexity into simplicity through AI
              </p>
              <div className="flex gap-4">
                {[Twitter, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {["Quick Links", "Legal"].map((title, idx) => (
              <div key={title}>
                <h3 className="font-semibold text-gray-100 mb-4">{title}</h3>
                <ul className="space-y-3">
                  {[
                    idx === 0
                      ? ["About", "Features", "Pricing", "Blog", "Contact"]
                      : ["Privacy Policy", "Terms of Service", "Cookie Policy"],
                  ].map((items) =>
                    items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-100 text-sm transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-gray-100 mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get product updates and AI insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-800 bg-gray-900/50 
                     focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-100 placeholder-gray-500"
                />
                <Button
                  size="sm"
                  className="shrink-0 bg-gray-800 hover:bg-gray-700 text-gray-100 px-4"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} SimplifyAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
