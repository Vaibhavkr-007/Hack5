import { ReactNode } from "react";
import { Tilt } from "../../../components/motion-primitives/tilt";
import Image from "next/image";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  imgsrc: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  imgsrc,
}: FeatureCardProps) {
  return (
    <Tilt rotationFactor={4}>
      <div className="group relative h-[550px] max-w-[460px] overflow-hidden rounded-[2rem] border border-zinc-950/10 shadow-2xl transition-all duration-300 hover:shadow-3xl dark:border-zinc-50/10">
        <div className="absolute inset-0 z-0">
        <Image
            src={imgsrc}
            alt="Ghost in the shell - Kôkaku kidôtai"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/30 to-zinc-900/70" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center p-8">
        
          <div className="mt-8 text-center">
            <h3 className="font-sans text-4xl font-bold text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              {title}
            </h3>
            <div className="mx-auto my-4 h-[2px] w-16 bg-white/50 transition-all group-hover:w-24 group-hover:bg-white/80" />
          </div>

          <div className="mt-auto w-full">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/10 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-zinc-100/95 to-zinc-50/80 p-3 shadow-lg transition-transform duration-300 hover:scale-110 text-black">
                {icon}
              </div>
              <p className="text-center text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
