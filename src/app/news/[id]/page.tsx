import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Chatbot from "@/components/news/chatbot";
import { getNewsById } from "@/components/news/news-db-connection";
import ShareButtons from "@/components/news/share-buttons";

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const {id} = await params
  const news = await getNewsById(id);

  if (!news) {
    return <div className="container mx-auto py-12 text-center">News article not found</div>;
  }

  const categories = Array.isArray(news.categories) ? news.categories.join(", ") : news.categories;
  const formattedDate = new Date(news.publishedAt).toLocaleDateString();

  return (
    <main className="container mx-auto py-6 px-4">
      {/* Back to News Link */}
      <Link href="/" className="inline-flex items-center mb-6 text-gray-500 hover:text-blue-500">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to news
      </Link>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main News Content */}
        <div className="w-full lg:w-[70%]">
          <article className="text-gray-700">
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <p className="text-sm text-gray-600 mb-2">Categories: {categories || "General"}</p>

            {/* Author & Share Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Author" />
                  <AvatarFallback>AU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{news.author || "Unknown Author"}</p>
                  <p className="text-xs text-gray-500">{formattedDate}</p>
                </div>
              </div>
              <ShareButtons url={`/news/${news._id.toString()}`} title={news.title} /> {/* ✅ Fix here */}
            </div>

            {/* News Image */}
            <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
              <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="object-cover w-full h-full" />
              <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {news.categories?.[0] || "General"}
              </span>
            </div>

            {/* News Content */}
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </article>
        </div>

        {/* Sidebar with Chatbot */}
        <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Ask about this article</h2>
            <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading chatbot...</div>}>
              <Chatbot newsId={news._id.toString()} /> {/* ✅ Fix here */}
            </Suspense>
          </Card>
        </div>
      </div>
    </main>
  );
}






// NewsDetailPageClient.tsx (Client Component)

// Add 'use client' directive at the top
// 'use client'

// import { Suspense, useState, useEffect } from "react";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
// import Chatbot from "@/components/news/chatbot";
// import ShareButtons from "@/components/news/share-buttons";
// import { Button } from "@/components/ui/button";

// export default function NewsDetailPageClient({ news }: { news: any }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioUrl, setAudioUrl] = useState<string | null>(null);
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const categories = Array.isArray(news.categories) ? news.categories.join(", ") : news.categories;
//   const formattedDate = new Date(news.publishedAt).toLocaleDateString();

//   const handleListen = async () => {
//     if (!news.summary) return;

//     setIsLoading(true);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/text-to-speech', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: news.summary }),
//       });

//       const data = await response.json();

//       // Ensure the response has the audio file path
//       if (data?.audio_file_path) {
//         const audioPath = data.audio_file_path;
//         const audioUrl = `http://127.0.0.1:5000${audioPath}`;

//         // Set audio URL state
//         setAudioUrl(audioUrl);

//         // Create and play the audio element
//         const newAudio = new Audio(audioUrl);
//         setAudio(newAudio);

//         // Event listener for errors
//         newAudio.onerror = () => {
//           console.error('Error loading audio file:', audioUrl);
//           alert('Error loading the audio. Please try again later.');
//         };

//         // Play the audio
//         newAudio.play();

//         // Set playing state
//         setIsPlaying(true);
//       } else {
//         console.error('Failed to get audio file path:', data);
//         alert('Failed to retrieve audio for the summary.');
//       }
//     } catch (error) {
//       console.error('Error during text-to-speech request:', error);
//       alert('An error occurred while generating the audio. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleStop = () => {
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0; // Reset the audio to the start
//       setIsPlaying(false); // Stop playing state
//     }
//   };

//   return (
//     <main className="container mx-auto py-6 px-4">
//       {/* Back to News Link */}
//       <Link href="/" className="inline-flex items-center mb-6 text-gray-500 hover:text-blue-500">
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to news
//       </Link>

//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Main News Content */}
//         <div className="w-full lg:w-[70%]">
//           <article className="text-gray-700">
//             <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
//             <p className="text-sm text-gray-600 mb-2">Categories: {categories || "General"}</p>

//             {/* Author & Share Section */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Author" />
//                   <AvatarFallback>AU</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="text-sm font-medium">{news.author || "Unknown Author"}</p>
//                   <p className="text-xs text-gray-500">{formattedDate}</p>
//                 </div>
//               </div>
//               <ShareButtons url={`/news/${news._id.toString()}`} title={news.title} />
//             </div>

//             {/* News Image */}
//             <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
//               <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="object-cover w-full h-full" />
//               <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//                 {news.categories?.[0] || "General"}
//               </span>
//             </div>

//             {/* News Content */}
//             <div dangerouslySetInnerHTML={{ __html: news.content }} />

//             {/* Listen and Stop Buttons */}
//             <div className="flex gap-4 mt-6">
//               <Button
//                 onClick={handleListen}
//                 className={`w-full ${isPlaying ? "w-1/2" : "w-full"}`}
//                 disabled={isLoading || isPlaying}
//               >
//                 {isLoading ? "Loading..." : isPlaying ? "Listening..." : "Listen"}
//               </Button>

//               {isPlaying && (
//                 <Button onClick={handleStop} className="w-full mt-4">
//                   Stop
//                 </Button>
//               )}
//             </div>
//           </article>
//         </div>

//         {/* Sidebar with Chatbot */}
//         <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
//           <Card className="p-4">
//             <h2 className="text-xl font-semibold mb-4">Ask about this article</h2>
//             <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading chatbot...</div>}>
//               <Chatbot newsId={news._id.toString()} />
//             </Suspense>
//           </Card>
//         </div>
//       </div>
//     </main>
//   );
// }







// "use client"
// import { Suspense } from "react";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
// import Chatbot from "@/components/news/chatbot";
// import { getNewsById } from "@/components/news/news-db-connection";
// import ShareButtons from "@/components/news/share-buttons";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation"
// import { useNewsStore } from "@/lib/store"
// import { useState } from "react"

// export default  function NewsDetailPage({ params }: { params: { id: string } }) {
//   const {id} = await params
//   const news = await getNewsById(id);
//     const router = useRouter()
//     const { selectedNews } = useNewsStore()
//     const [isLoading, setIsLoading] = useState(false)
//     const [audioUrl, setAudioUrl] = useState<string | null>(null)
//     const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
//     const [isPlaying, setIsPlaying] = useState(false) // Track if audio is playing
  
//   //   const handleListen = async () => {
//   //     if (!selectedNews?.summary) return
  
//   //     setIsLoading(true)
  
//   //     try {
//   //       const response = await fetch('http://127.0.0.1:5000/text-to-speech', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({ text: selectedNews.summary }),
//   //       })
  
//   //       const data = await response.json()
  
//   //       // Ensure the response has the audio file path
//   //       if (data?.audio_file_path) {
//   //         const audioPath = data.audio_file_path
  
//   //         // Construct the full URL to access the audio file
//   //         const audioUrl = `http://127.0.0.1:5000${audioPath}`
  
//   //         // Set the audio URL state
//   //         setAudioUrl(audioUrl)
  
//   //         // Create a new Audio object and play the file
//   //         const newAudio = new Audio(audioUrl)
//   //         setAudio(newAudio)
  
//   //         // Event listener for errors
//   //         newAudio.onerror = () => {
//   //           console.error('Error loading audio file:', audioUrl)
//   //           alert('Error loading the audio. Please try again later.')
//   //         }
  
//   //         // Play the audio
//   //         newAudio.play()
  
//   //         // Set audio playing state to true
//   //         setIsPlaying(true)
//   //       } else {
//   //         console.error('Failed to get audio file path:', data)
//   //         alert('Failed to retrieve audio for the summary.')
//   //       }
//   //     } catch (error) {
//   //       console.error('Error during text-to-speech request:', error)
//   //       alert('An error occurred while generating the audio. Please try again later.')
//   //     } finally {
//   //       setIsLoading(false)
//   //     }
//   //   }
//   // const handleStop = () => {
//   //   if (audio) {
//   //     audio.pause()  // Pause the audio
//   //     audio.currentTime = 0  // Reset the playback to the start
//   //     setAudio(null)  // Clear the audio reference
//   //     setIsPlaying(false)  // Update the playing state
//   //   }
//   // }
//   if (!news) {
//     return <div className="container mx-auto py-12 text-center">News article not found</div>;
//   }

//   const categories = Array.isArray(news.categories) ? news.categories.join(", ") : news.categories;
//   const formattedDate = new Date(news.publishedAt).toLocaleDateString();

//   return (
//     <main className="container mx-auto py-6 px-4">
//       {/* Back to News Link */}
//       <Link href="/" className="inline-flex items-center mb-6 text-gray-500 hover:text-blue-500">
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to news
//       </Link>

//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Main News Content */}
//         <div className="w-full lg:w-[70%]">
//           <article className="text-gray-700">
//             <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
//             <p className="text-sm text-gray-600 mb-2">Categories: {categories || "General"}</p>

//             {/* Author & Share Section */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Author" />
//                   <AvatarFallback>AU</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="text-sm font-medium">{news.author || "Unknown Author"}</p>
//                   <p className="text-xs text-gray-500">{formattedDate}</p>
//                 </div>
//               </div>
//               <ShareButtons url={`/news/${news._id.toString()}`} title={news.title} /> {/* ✅ Fix here */}
//             </div>

//             {/* News Image */}
//             <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
//               <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="object-cover w-full h-full" />
//               <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//                 {news.categories?.[0] || "General"}
//               </span>
//             </div>

//             {/* News Content */}
//             <div dangerouslySetInnerHTML={{ __html: news.content }} />
//           </article>
//         </div>

//         {/* Sidebar with Chatbot */}
//         <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
//           <Card className="p-4">
//              {/* <div className="flex gap-4">
//                       <Button 
//                         onClick={handleListen}
//                         className={`w-full mt-4 ${isPlaying ? 'w-1/2' : ''}`} 
//                         disabled={isLoading || isPlaying} // Disable if already playing
//                       >
//                         {isLoading ? 'Loading...' : 'Listen'}
//                       </Button>
            
//                       {isPlaying && (
//                         <Button 
//                           onClick={handleStop}
//                           className="w-1/2 mt-4"
//                         >
//                           Stop
//                         </Button>
//                       )}
//                     </div> */}
//             <h2 className="text-xl font-semibold mb-4">Ask about this article</h2>
//             <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading chatbot...</div>}>
//               <Chatbot newsId={news._id.toString()} /> {/* ✅ Fix here */}
//             </Suspense>
//           </Card>
//         </div>
//       </div>
//     </main>
//   );
// }


