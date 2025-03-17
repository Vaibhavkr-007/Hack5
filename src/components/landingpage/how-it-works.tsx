interface HowItWorksStepProps {
    number: number
    title: string
    description: string
  }
  
  export default function HowItWorksStep({ number, title, description }: HowItWorksStepProps) {
    return (
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
            {number}
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    )
  }
  
  