"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
  rating: number;
}

const reviews = [
  {
    name: "Sarah Thompson",
    username: "@sarahdesigns",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/sarah",
    rating: 5,
  },
  {
    name: "Vaibhav kumar Mahoto",
    username: "@vb",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/michael",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    username: "@emmareacts",
    body: "I'm blown away by the performance and reliability. It's become an indispensable tool for our daily workflows.",
    img: "https://avatar.vercel.sh/emma",
    rating: 5,
  },
  {
    name: "Puneet koundal",
    username: "@sparkie",
    body: "The is the best ai tool i have ever used",
    img: "https://avatar.vercel.sh/david",
    rating: 5,
  },
  {
    name: "David Park",
    username: "@davidux",
    body: "The best investment we've made in our tech stack. The ROI was immediate and continues to deliver value daily.",
    img: "https://avatar.vercel.sh/david",
    rating: 5,
  },
  {
    name: "Michael Chen",
    username: "@michaeltech",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/michael",
    rating: 5,
  }
];
const Rating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex items-center gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < stars ? 'text-amber-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold  bg-clip-text text-transparent mb-16"
        >
          Client Voices
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.username}
              variants={cardVariants}
              transition={{ 
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: index * 0.15
              }}
              className="relative group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-lg rounded-3xl shadow-2xl" />
              <div className="relative p-8 h-full border border-gray-800 rounded-3xl transition-all hover:border-gray-600">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-gray-700"
                  >
                    <Image
                      src={review.img}
                      alt={review.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-100">
                      {review.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{review.username}</p>
                    <Rating stars={review.rating} />
                  </div>
                </div>
                
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-gray-300 leading-relaxed italic"
                >
                  “{review.body}”
                </motion.p>

                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="text-6xl font-serif">”</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;