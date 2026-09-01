"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";

const images = [
  "/Assets/Images/gallery_image.jpg",
  "/Assets/Images/cj9.jpg",
  "/Assets/Images/08.jpg",
  "/Assets/Images/cj1.jpg",
  "/Assets/Images/cj2.jpg",
  "/Assets/Images/cj3.jpg",
  "/Assets/Images/cj4.jpg",
  "/Assets/Images/cj5.jpg",
  "/Assets/Images/cj6.jpg",
  "/Assets/Images/cj7.jpg",
  "/Assets/Images/cj8.jpg",
];

const getImageWidth = () => {
  if (typeof window === "undefined") return 600 + 48;
  if (window.innerWidth < 640) return 320 + 24;
  if (window.innerWidth < 1024) return 480 + 32;
  return 600 + 48;
};

const Gallery = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [imageWidth, setImageWidth] = useState(getImageWidth());

  useEffect(() => {
    const handleResize = () => setImageWidth(getImageWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [offset, offset - images.length * imageWidth],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, offset, controls, imageWidth]);

  const handleMouseEnter = (idx: number) => {
    setIsPaused(true);
    setOffset(-idx * imageWidth);
    controls.set({ x: -idx * imageWidth });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouch = (idx: number) => {
    handleMouseEnter(idx);
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-violet-500/10 dark:from-rose-500/20 dark:via-pink-500/10 dark:to-violet-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-400/10 via-transparent to-transparent dark:from-rose-400/20" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(244,63,94,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28 relative">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-violet-500">
                Gallery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl"
            >
              Explore our collection of memorable moments — from workshops and hackathons to community gatherings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-border backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">{images.length}</strong> photos in collection
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full text-background">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Gallery Carousel */}
      <div className="py-12 md:py-20">
        <div className="flex justify-center">
          <div className="overflow-hidden w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto rounded-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-xl bg-white dark:bg-[#0a0a0f]">
            <motion.div
              className="flex py-4"
              style={{ width: "max-content" }}
              animate={controls}
            >
              {[...images, ...images].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex-shrink-0 mx-3 sm:mx-4 lg:mx-6"
                  style={{
                    width:
                      imageWidth === 320 + 24
                        ? 320
                        : imageWidth === 480 + 32
                        ? 480
                        : 600,
                    height:
                      imageWidth === 320 + 24
                        ? 180
                        : imageWidth === 480 + 32
                        ? 270
                        : 340,
                  }}
                  whileHover={{
                    scale: 1.06,
                    zIndex: 2,
                  }}
                  onMouseEnter={() => handleMouseEnter(idx % images.length)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => handleTouch(idx % images.length)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${(idx % images.length) + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-4 sm:p-6 rounded-xl">
                    <p className="text-white text-xs sm:text-sm font-medium">
                      Photo {(idx % images.length) + 1} of {images.length}
                    </p>
                    <span className="text-white/70 text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
