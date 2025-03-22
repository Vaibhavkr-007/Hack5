// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Send } from "lucide-react";
// import { getNewsById } from "./news-db-connection";

// // Define types for the API response
// interface ApiResponse {
//   candidates: Array<{
//     content: {
//       parts: Array<{ text: string }>;
//       role: string;
//     };
//     finishReason: string;
//     avgLogprobs: number;
//   }>;
//   usageMetadata: {
//     promptTokenCount: number;
//     candidatesTokenCount: number;
//     totalTokenCount: number;
//     promptTokensDetails: Array<{ modality: string; tokenCount: number }>;
//     candidatesTokensDetails: Array<{ modality: string; tokenCount: number }>;
//   };
//   modelVersion: string;
// }

// interface Message {
//   id: string;
//   content: string;
//   sender: "user" | "bot";
//   timestamp: Date;
// }

// interface ChatbotProps {
//   newsId: string;
// }

// export default function Chatbot({ newsId }: ChatbotProps) {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       content: "Hi there! I can answer questions about this article. What would you like to know?",
//       sender: "bot",
//       timestamp: new Date(),
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const fetchNewsContent = async () => {
//     console.log("fetchNewsContent() called!");
//     try {
//       const news = await getNewsById(newsId);
//       console.log("Fetched news data:");

//       if (!news || typeof news !== "object") {
//         console.error("Invalid news data:", news);
//         return null;
//       }

//       return news?.content || null;
//     } catch (error) {
//       console.error("Error fetching news:", error);
//       return null;
//     }
//   };

//   const getBotResponse = async (question: string, newsContent: string) => {
//     try {
//       const apiUrl = "https://xzqh51pndl.execute-api.eu-north-1.amazonaws.com/default";
//       const requestBody = { news_article: newsContent, user_query: question };
//       const res = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": "your-api-key-here", // Replace with your actual API key
//         },
//         body: JSON.stringify(requestBody),
//       });

//       console.log("API Response status:", res.status);

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`Failed to get chatbot response: ${res.status} - ${errorText}`);
//       }

//       const data: ApiResponse = await res.json();
//       console.log("Raw API response:", data);

//       let responseBody;
//       try {
//         responseBody = JSON.parse(data.body);
//         console.log("Parsed API response:", responseBody);
//       } catch (error) {
//         throw new Error("Invalid JSON response format from API.");
//       }

//       if (!responseBody?.candidates?.[0]?.content?.parts?.[0]?.text) {
//         throw new Error("Invalid API response format");
//       }

//       return responseBody.candidates[0].content.parts[0].text;
//     } catch (error) {
//       console.error("Error getting chatbot response:", error);
//       return "Sorry, I couldn't fetch an answer at the moment.";
//     }
//   };

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     console.log("User message:", input);

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       content: input,
//       sender: "user",
//       timestamp: new Date(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     const newsContent = await fetchNewsContent();
//     if (!newsContent) {
//       console.error("Failed to retrieve news content.");
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now().toString(), content: "Failed to retrieve news content.", sender: "bot", timestamp: new Date() },
//       ]);
//       setIsLoading(false);
//       return;
//     }

//     const botResponse = await getBotResponse(input, newsContent);

//     const botMessage: Message = {
//       id: (Date.now() + 1).toString(),
//       content: botResponse,
//       sender: "bot",
//       timestamp: new Date(),
//     };

//     console.log("Bot response:", botMessage.content);
//     setMessages((prev) => [...prev, botMessage]);
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-[500px]">
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
//             <div className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2 max-w-[80%]`}>
//               {message.sender === "bot" && (
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot" />
//                   <AvatarFallback>AI</AvatarFallback>
//                 </Avatar>
//               )}
//               <div className={`p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
//                 <p className="text-sm">{message.content}</p>
//                 <p className="text-xs opacity-70 mt-1">
//                   {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//                 </p>
//               </div>
//               {message.sender === "user" && (
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
//                   <AvatarFallback>U</AvatarFallback>
//                 </Avatar>
//               )}
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="flex justify-start">
//             <div className="flex flex-row gap-2 max-w-[80%]">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot" />
//                 <AvatarFallback>AI</AvatarFallback>
//               </Avatar>
//               <div className="p-3 rounded-lg bg-gray-100 flex items-center">
//                 <p>Typing...</p>
//               </div>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <form onSubmit={handleSendMessage} className="p-4 border-t">
//         <div className="flex gap-2">
//           <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question..." disabled={isLoading} />
//           <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
//             <Send className="h-4 w-4" />
//             <span className="sr-only">Send message</span>
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }







"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { getNewsById } from "./news-db-connection"; // Assuming this is fetching the news content
import { fetchBotResponse } from "./news-db-connection";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatbotProps {
  newsId: string;
}

export default function Chatbot({ newsId }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I can answer questions about this article. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchNewsContent = async () => {
    try {
      const news = await getNewsById(newsId);
      if (!news || typeof news !== "object") {
        console.error("Invalid news data:", news);
        return null;
      }
      return news?.content || null;
    } catch (error) {
      console.error("Error fetching news:", error);
      return null;
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const newsContent = await fetchNewsContent();
    if (!newsContent) {
      console.error("Failed to retrieve news content.");
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), content: "Failed to retrieve news content.", sender: "bot", timestamp: new Date() },
      ]);
      setIsLoading(false);
      return;
    }

    const botResponse = await fetchBotResponse(newsContent, input); // Using the external API function

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2 max-w-[80%]`}>
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div className={`p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              {message.sender === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex flex-row gap-2 max-w-[80%]">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-lg bg-gray-100 flex items-center">
                <p>Typing...</p>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question..." disabled={isLoading} />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
