import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const carouselItems = [
    { src: "/merchhood.png", alt: "StageFright Hoodie" },
    { src: "/merchcap.png", alt: "StageFright Cap" },
    { src: "/merch.png", alt: "StageFright Tee" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : carouselItems.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < carouselItems.length - 1 ? prev + 1 : 0
    );
  };

  const tourData = [
    {
      date: "November 16-17",
      city: "Las Vegas, NV",
      venue: "ComplexCon",
      tickets: "/checkout?product=Ticket%20LasVegas&price=50&image=/bg.png",
    },
    {
      date: "December 14",
      city: "Miami Gardens, FL",
      venue: "Rolling Loud",
      tickets: "/checkout?product=Ticket%20Miami&price=50&image=/bg.png",
    },
    {
      date: "December 20",
      city: "Gallipolis, OH",
      venue: "Gallipolis City Park",
      tickets: "/checkout?product=Ticket%20Gallipolis&price=50&image=/bg.png",
    },
    {
      date: "December 28",
      city: "Hunington, WV",
      venue: "AT&T Stadium",
      tickets: "/checkout?product=Ticket%20Hunington&price=50&image=/bg.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const tableSection = document.getElementById("tour-table");
      const rect = tableSection?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsTableVisible(true);
      } else {
        setIsTableVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Stage Fright</title>
      </Head>
      <div className="bg-black text-white">
        {/* Marquee */}
        <Link href="/tour">
          <div className="fixed top-0 w-full z-40 bg-black">
            <Marquee gradient={false} speed={100} className="text-white font-bold">
              !!! New Tour - Check out the schedule !!!
            </Marquee>
          </div>
        </Link>

        {/* Rotating Logo */}
        <section className="w-full mx-auto mt-4 text-center">
          <div className="perspective">
            <img
              src="/StageFrightNobg.png"
              alt="Stage Fright Logo"
              className="rotating-side-logo mx-auto w-1/2"
            />
          </div>
        </section>

        {/* Navigation Links */}
        <nav className="text-center text-xl mt-4">
          <a href="/about" className="mx-4">
            About
          </a>
          <a href="/tour" className="mx-4">
            Tour
          </a>
          <a href="/merch" className="mx-4">
            Merch
          </a>
        </nav>

        {/* Merch Section */}
        <section className="mt-12 text-center">
          <h1 className="text-5xl merch-text">Merch</h1>
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handlePrev}
              className="arrow bg-transparent text-white text-2xl p-2"
            >
              &#10094;
            </button>
            <div className="overflow-hidden w-[300px]">
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
            <button
              onClick={handleNext}
              className="arrow bg-transparent text-white text-2xl p-2"
            >
              &#10095;
            </button>
          </div>
          <a
            href="/merch"
            className="bg-white text-black rounded-xl shadow-lg py-2 px-4 mt-4 inline-block hover:bg-gray-300"
          >
            View More
          </a>
        </section>

        {/* Tour Table */}
        <section className="mt-12 text-center">
          <h1 className="text-6xl merch-text">Tour Tickets</h1>
          <div
            id="tour-table"
            className={`transition-opacity duration-700 ${
              isTableVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <table className="min-w-full table-auto text-white bg-black border-separate border-spacing-y-2 mt-6">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left uppercase text-sm md:text-base">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left uppercase text-sm md:text-base">
                    City
                  </th>
                  <th className="px-4 py-2 text-left uppercase text-sm md:text-base">
                    Venue
                  </th>
                  <th className="px-4 py-2 text-left uppercase text-sm md:text-base">
                    Tickets
                  </th>
                </tr>
              </thead>
              <tbody>
                {tourData.map((tour, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">
                      {tour.date}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">
                      {tour.city}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">
                      {tour.venue}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base text-blue-500">
                      <Link href={tour.tickets} className="underline">
                        Buy Ticket
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-12 text-center">
          <h1 className="text-6xl merch-text">About</h1>
          <h2 className="text-2xl mt-4">Stage Fright</h2>
          <p className="mt-2">Your favorite local rock band</p>
        </section>
      </div>
    </>
  );
};

export default Home;
