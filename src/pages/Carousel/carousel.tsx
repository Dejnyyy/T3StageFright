import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for carousel items
interface CarouselItem {
  src: string;
  alt: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of the cloned first item
  const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during transition
  const [isPaused, setIsPaused] = useState(false); // Pause autoplay on hover or interaction
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Array of items to display in the carousel
  const originalItems: CarouselItem[] = [
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

  // Add clones for seamless looping
  const carouselItems: CarouselItem[] = [
    originalItems[originalItems.length - 1], // Clone last item at the start
    ...originalItems,
    originalItems[0], // Clone first item at the end
  ];

  const startAutoplay = () => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 3000); // Change slides every 3 seconds
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const handleNext = () => {
    if (isAnimating) return; // Prevent multiple clicks
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent multiple clicks
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isPaused) startAutoplay();

    return () => stopAutoplay(); // Cleanup autoplay on unmount or pause
  }, [isPaused]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        // Seamlessly loop back to the real first/last item without animation
        setIsAnimating(false);
        if (currentIndex === 0) {
          setCurrentIndex(carouselItems.length - 2); // Jump to last real item
        } else if (currentIndex === carouselItems.length - 1) {
          setCurrentIndex(1); // Jump to first real item
        }
      }, 500); // Transition duration in milliseconds
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAnimating]);

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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 300}px)`,
              transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
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
