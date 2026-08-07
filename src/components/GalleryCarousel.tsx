"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { C } from "@/lib/colors";

interface Photo {
  src: string;
  caption: string;
}

export default function GalleryCarousel({ photos, intervalMs = 4000 }: { photos: Photo[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!photos || photos.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [index, photos, intervalMs]);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="relative">
      <div className="relative rounded-xl overflow-hidden aspect-[16/9]" style={{ background: C.fog }}>
        <Image
          src={photos[index].src}
          alt={photos[index].caption}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority={index === 0}
        />
      </div>

      {photos[index].caption && (
        <div className="text-xs mt-2" style={{ color: C.mute }}>
          {photos[index].caption}
        </div>
      )}

      {photos.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-[calc(50%-14px)] w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(10,22,40,0.65)", color: C.white }}
          >
            <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-2 top-[calc(50%-14px)] w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(10,22,40,0.65)", color: C.white }}
          >
            <ChevronRight size={18} />
          </button>

          <div className="flex justify-center gap-2 mt-3">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className="rounded-full transition-all"
                style={{ width: i === index ? 18 : 7, height: 7, background: i === index ? C.gold500 : C.line }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
