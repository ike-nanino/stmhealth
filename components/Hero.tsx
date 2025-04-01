"use client"

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: '/assets/images/massage.jpg',
      title: 'Professional Legal Solutions',
      text: 'Expert legal services tailored to your needs',
    },
    {
      src: '/assets/images/physiotherapy.jpg',
      title: '24/7 Legal Support',
      text: 'Round-the-clock assistance for urgent matters',
    },
    {
      src: '/assets/images/kinesiology.jpg',
      title: 'Experienced Attorneys',
      text: 'Decades of combined legal experience',
    },
  ];

  // Auto-sliding functionality
  const autoSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const slideInterval = setInterval(autoSlide, 7000); // Change slide every 5 seconds
    
    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [autoSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Improved indicator dots for slide tracking
  const SlideIndicators = () => (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === index ? "bg-white scale-125" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden h-[600px] md:h-[850px] lg:h-screen pt-0">
      <AnimatePresence initial={false} custom={currentSlide}>
        {images.map((img, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{  x: 100 }} // Always slide from right
              animate={{ x: 0 }}
              exit={{  x: -100 }} // Always exit to left
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Text Overlay with improved animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">     
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                      {img.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white">{img.text}</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
                      Learn More
                    </button>
               
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows with improved styling */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-4 rounded-full hover:bg-black/70 transition-colors text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-4 rounded-full hover:bg-black/70 transition-colors text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Slide indicators */}
      <SlideIndicators />
    </section>
  );
};

export default Hero;