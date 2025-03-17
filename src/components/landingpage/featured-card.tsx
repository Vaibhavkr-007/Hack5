import type { ReactNode } from "react"
import Image from "next/image"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  imageSrc: string
}

export default function FeatureCard({ icon, title, description, imageSrc }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      </div>
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </div>
  )
}

