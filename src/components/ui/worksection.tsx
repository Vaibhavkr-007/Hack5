"use client"
import { motion } from "framer-motion";
import { Link2, BrainCircuit, Clock } from "lucide-react";

interface HowItWorksStepProps {
  number: 1 | 2 | 3;
  title: string;
  description: string;
}

const HowItWorksSection = () => {
  const HowItWorksStep = ({ number, title, description }: HowItWorksStepProps) => {
    const icons = {
      1: <Link2 className="w-6 h-6" />,
      2: <BrainCircuit className="w-6 h-6" />,
      3: <Clock className="w-6 h-6" />,
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6, delay: number * 0.1 }}
        className="relative pl-20 group"
      >
        {/* Animated timeline connector */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-white/10 to-transparent group-last:to-transparent" />

        {/* Number badge with ping animation */}
        <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/5 to-white/15 border border-white/10 backdrop-blur-lg group-hover:scale-105 transition-all duration-300">
          <span className="text-2xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            {number}
          </span>
          <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-ping" />
        </div>

        {/* Content card with hover animation */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="pl-8 relative overflow-hidden"
        >
          <div className="p-8 bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="mb-6 text-white/80">{icons[number]}</div>
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-400/80 leading-relaxed">{description}</p>
          </div>
          <div className="absolute inset-0 rounded-xl border-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="how-it-works"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-gray-950"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Streamlined Simplicity
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400/90 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your workflow in three elegant steps. Designed for clarity, built for impact.
          </motion.p>
        </motion.div>

        {/* Steps container with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-24">
            <HowItWorksStep
              number={1}
              title="Secure Integration"
              description="Connect your digital ecosystem through our military-grade encrypted gateway"
            />
            <HowItWorksStep
              number={2}
              title="Cognitive Processing"
              description="Advanced neural networks analyze and structure your information flow"
            />
            <HowItWorksStep
              number={3}
              title="Effortless Mastery"
              description="Reclaim your cognitive space with intelligent automation"
            />
          </div>
        </motion.div>
      </div>

      {/* Background animations */}
      <div className="absolute inset-0 -z-10">
        {/* Floating blobs */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", delay: 5 }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />

        {/* Particle system */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              translateY: [0, -100],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
    </section>
  );
};

export default HowItWorksSection;