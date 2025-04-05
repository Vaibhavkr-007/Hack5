"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";

import { ArrowRight, BookOpen } from "lucide-react";
import { TextShimmerWave } from "../../../components/motion-primitives/text-shimmer-wave";
export function SpotlightHeading() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Simplify <br /> Your Life with <br />
          <TextShimmerWave
            className=" [--base-color:var(--color-gray-400) [--base-gradient-color:#808080] dark:[--base-color:#FFFFFF] dark:[--base-gradient-color:#CCCCCC]"
            duration={1}
            spread={1}
            zDistance={1}
            scaleDistance={1.1}
            rotateYDistance={20}
          >
            SimplifyAI
          </TextShimmerWave>
        </h1>
        <p className="mt-5 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
          Your AI-powered assistant for emails, news, and social media. Stay
          organized, informed, and stress-free.
        </p>
        <div className="flex flex-col items-center justify-center  mt-10 sm:flex-row gap-4 ">
          <Link href="/signup">
            <button
              className="btn-gradient bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 
                text-gray-100 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 
                px-8 py-3.5 rounded-xl font-semibold tracking-wide 
                hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.15)]
                transition-all duration-300 hover:-translate-y-0.5 
                flex items-center gap-3 group"
            >
              <span>Start Free Journey</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </button>
          </Link>

          <button
            className="btn-outline border-2 border-gray-600/70 text-gray-300 
              bg-gray-900/30 hover:bg-gradient-to-br hover:from-gray-800/20 hover:to-gray-900/40 
              px-7 py-2.5 rounded-xl font-medium hover:text-gray-100 
              hover:border-gray-400/50 hover:shadow-[0_8px_20px_-12px_rgba(156,163,175,0.15)]
              transition-all duration-300 flex items-center gap-2 
              backdrop-blur-sm hover:backdrop-blur"
          >
            <BookOpen className="h-5 w-5 opacity-80" />
            <span>Explore Features</span>
          </button>
        </div>
      </div>
    </div>
  );
}
