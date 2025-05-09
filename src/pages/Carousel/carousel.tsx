import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarouselItem {
  src: string;
  alt: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const carouselItems: CarouselItem[] = [
    { src: "/merchhood.png", alt: "StageFright Hoodie" },
    { src: "/merchcap.png", alt: "StageFright Cap" },
    { src: "/merch.png", alt: "StageFright Tee" },
    { src: "/blackhoodie.png", alt: "StageFright Black Hoodie" },
    { src: "/blackcap.png", alt: "StageFright Black Cap" },
    { src: "/blacktee.png", alt: "StageFright Black Tee" },
    { src: "/sfblacktee.png", alt: "StageFright SF Black Tee" },
    { src: "/sftee.png", alt: "StageFright SF Tee" },
    { src: "/sfblackhoodie.png", alt: "StageFright SF Black Hoodie" },
  ];

  const startAutoplay = () => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < carouselItems.length - 1 ? prevIndex + 1 : 0
        );
      }, 3000); 
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const handleManualPause = () => {
    stopAutoplay(); 
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

    pauseTimerRef.current = setTimeout(() => {
      startAutoplay();
    }, 3000); 
  };

  // Handle navigation buttons
  const handlePrev = () => {
    handleManualPause(); 
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : carouselItems.length - 1));
  };

  const handleNext = () => {
    handleManualPause(); 
    setCurrentIndex((prev) => (prev < carouselItems.length - 1 ? prev + 1 : 0));
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Manage autoplay lifecycle
  useEffect(() => {
    if (!isPaused) startAutoplay();

    return () => stopAutoplay(); // Cleanup autoplay on unmount or pause
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-6xl font-bold merch-text">Merch</h1>

      {/* Carousel Section */}
      <div className="flex items-center justify-center mt-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="arrow bg-transparent text-white text-2xl p-2"
        >
          &#10094;
        </button>

        {/* Carousel Items */}
        <div
          className="overflow-hidden w-[300px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 300}px)`,
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] flex-shrink-0 text-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="arrow bg-transparent text-white text-2xl p-2"
        >
          &#10095;
        </button>
      </div>

      {/* View More Button */}
      <Link
        href="/merch"
        className="bg-white text-black rounded-full py-2 px-4 mt-4 inline-block hover:bg-gray-300"
      >
        View More
      </Link>
    </div>
  );
};

export default Carousel;
