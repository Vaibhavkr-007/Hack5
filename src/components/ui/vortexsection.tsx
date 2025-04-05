"use client";
import React from "react";
import { Vortex } from "../ui/vortex";
import Image from "next/image";
import img1 from "@/../public/images/remote.png";
import img2 from "@/../public/images/before.jpg";
import img3 from "@/../public/images/after.jpg";
export function VortexSection() {
  return (
    <div className="w-full  rounded-md  h-[50rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full"
      >
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Your Life, <span className="text-gray-400">Simplified</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-[800px] mx-auto">
              In a world overflowing with information, SimplifyAI is here to
              help you cut through the noise. From managing your inbox to
              staying updated on global news and social media, our AI-powered
              tools are designed to save you time and energy. Focus on what
              matters most – we'll handle the rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {[img2, img3].map((img, index) => (
              <div
                key={index}
                className="relative h-[300px] md:h-[400px] rounded-2xl shadow-xl overflow-hidden 
                            border border-gray-800 hover:border-gray-700 transition-all group"
              >
                <Image
                  src={img}
                  alt={index === 0 ? "Cluttered inbox" : "Organized inbox"}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent 
                                flex items-end p-6"
                >
                  <span className="text-gray-100 text-xl font-bold bg-gray-900/50 px-4 py-2 rounded-full">
                    {index === 0 ? "Before SimplifyAI" : "After SimplifyAI"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Vortex>
    </div>
  );
}
