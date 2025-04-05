"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useNewsStore } from "@/lib/store"
import { useState } from "react"

export default function SummarizedNews() {
  const router = useRouter()
  const { selectedNews } = useNewsStore()
  const [isLoading, setIsLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false) // Track if audio is playing

  const handleListen = async () => {
    if (!selectedNews?.summary) return

    setIsLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:5000/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: selectedNews.summary }),
      })

      const data = await response.json()

      // Ensure the response has the audio file path
      if (data?.audio_file_path) {
        const audioPath = data.audio_file_path

        // Construct the full URL to access the audio file
        const audioUrl = `http://127.0.0.1:5000${audioPath}`

        // Set the audio URL state
        setAudioUrl(audioUrl)

        // Create a new Audio object and play the file
        const newAudio = new Audio(audioUrl)
        setAudio(newAudio)

        // Event listener for errors
        newAudio.onerror = () => {
          console.error('Error loading audio file:', audioUrl)
          alert('Error loading the audio. Please try again later.')
        }

        // Play the audio
        newAudio.play()

        // Set audio playing state to true
        setIsPlaying(true)
      } else {
        console.error('Failed to get audio file path:', data)
        alert('Failed to retrieve audio for the summary.')
      }
    } catch (error) {
      console.error('Error during text-to-speech request:', error)
      alert('An error occurred while generating the audio. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleStop = () => {
    if (audio) {
      audio.pause()  // Pause the audio
      audio.currentTime = 0  // Reset the playback to the start
      setAudio(null)  // Clear the audio reference
      setIsPlaying(false)  // Update the playing state
    }
  }

  if (!selectedNews) {
    return (
      <Card className="h-full flex items-center justify-center p-6 text-center text-gray-500">
        <p>Select a news article to view the summary</p>
      </Card>
    )
  }

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {/* Category/Tag Badge */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
            {selectedNews.categories?.[0] || "General"}
          </span>
        </div>

        {/* News Title */}
        <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>

        {/* News Image */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img
            src={selectedNews.imageUrl || "/placeholder.svg"}
            alt={selectedNews.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Summary */}
        <div className="text-sm text-gray-700">
          <p className="mb-4">{selectedNews.summary}</p>
        </div>

        {/* Listen and Stop Buttons */}
        <div className="flex gap-4">
          <Button 
            onClick={handleListen}
            className={`w-full mt-4 ${isPlaying ? 'w-1/2' : ''}`} 
            disabled={isLoading || isPlaying} // Disable if already playing
          >
            {isLoading ? 'Loading...' : 'Listen'}
          </Button>

          {isPlaying && (
            <Button 
              onClick={handleStop}
              className="w-1/2 mt-4"
            >
              Stop
            </Button>
          )}
        </div>
      </CardContent>

      {/* Read Full Article Button */}
      <CardFooter className="px-6 pb-6 pt-0">
        <Button className="w-full" onClick={() => router.push(`/news/${selectedNews._id}`)}>
          Read Full Article
        </Button>
      </CardFooter>
    </Card>
  )
}
