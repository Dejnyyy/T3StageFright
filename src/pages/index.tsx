import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

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

  useEffect(() => {
    const onScroll = () => {
      const table = document.getElementById("tour-table");
      const rect = table?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsTableVisible(true);
      } else {
        setIsTableVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Stage Fright</title>
      </Head>
      <div className="bg-black text-white">
        
      <Link href="/tour">
  <div className="fixed top-0 w-full z-40 bg-black">
    <div className="overflow-hidden whitespace-nowrap">
      <p className="animate-scroll text-white font-bold">
        !!! New Tour - Check out the schedule !!! &nbsp;&nbsp;&nbsp;
        !!! New Tour - Check out the schedule !!!
      </p>
    </div>
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
          <div
            id="tour-table"
            className={`transition-opacity duration-500 ${
              isTableVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <table className="min-w-full table-auto text-white bg-black  border-separate border-spacing-y-2">
                <thead className="">
                    <tr className="">
                        <th className="px-4 py-2 text-left uppercase text-sm md:text-base">Date</th>
                        <th className="px-4 py-2 text-left uppercase text-sm md:text-base">City</th>
                        <th className="px-4 py-2 text-left uppercase text-sm md:text-base">Venue</th>
                        <th className="px-4 py-2 text-left uppercase text-sm md:text-base">Tickets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-800 transition-colors">
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">November 16-17</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">Las Vegas, NV</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">ComplexCon</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base text-blue-500">
                            <a href="#" className="underline">Tickets</a>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-800 transition-colors">
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">December 14</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">Miami Gardens, FL</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">Rolling Loud</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base text-blue-500">
                            <a href="#" className="underline">Tickets</a>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-800 transition-colors">
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">December 20</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">Gallipolis, OH</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">Gallipolis City Park</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base text-blue-500">
                            <a href="#" className="underline">Tickets</a>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-800 transition-colors">
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">December 28</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">Hunington, WV</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base">AT&T Stadium</td>
                        <td className="px-4 py-2 border-t border-gray-700 text-sm md:text-base text-blue-500">
                            <a href="#" className="underline">Tickets</a>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-12 text-center">
          <h1 className="text-6xl">About</h1>
          <h2 className="text-2xl mt-4">Stage Fright</h2>
          <p className="mt-2">Your favorite local rock band</p>
        </section>
      </div>
    </>
  );
};

export default Home;
