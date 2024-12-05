import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Loading from "./Loading/loading";
import styles from "./Loading/loading.module.css";
import CalendlyWidget from "./CalendlyWidget";
import ContactForm from "./ContactForm";
import Carousel from "./Carousel";

interface TourData {
  date: string;
  city: string;
  venue: string;
  tickets: string;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const [isFadingOut, setIsFadingOut] = useState(false); 
  const [isTableVisible, setIsTableVisible] = useState(false); 
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const tourData: TourData[] = [
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

  const handlePlay = (audio: HTMLAudioElement) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setCurrentAudio(audio);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const tableSection = document.getElementById("tour-table");
      if (tableSection) {
        const rect = tableSection.getBoundingClientRect();
        setIsTableVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  if (isLoading) {
    return (
      <div
        className={`${styles["fade-out"]} ${
          isFadingOut ? styles["fade-out-active"] : ""
        } text-center fade-in`}
      >
        <Loading />
      </div>
    );
  }

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
        <section className="w-full mx-auto pt-12 text-center">
          <div className="perspective">
            <Image
              width={300}
              height={300}
              src="/StageFrightNobg.png"
              alt="Stage Fright Logo"
              className="rotating-side-logo mx-auto sm:w-1/2 w-3/4"
            />
          </div>
        </section>

        {/* Navigation Links */}
        <nav className="text-center text-xl mt-4">
          <Link href="/about" className="mx-4 hover:underline">
            About
          </Link>
          <Link href="/tour" className="mx-4 hover:underline">
            Tour
          </Link>
          <Link href="/merch" className="mx-4 hover:underline">
            Merch
          </Link>
        </nav>
        <div className="text-center text-xl mt-4">
  <button
    className="mx-4 hover:underline cursor-pointer text-white bg-transparent border-none"
    onClick={() => {
      document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact Us
  </button>
</div>

        {/* Carousel Section */}
        <Carousel />


        {/* Tour Table */}
        <section className="mt-12">
          <h1 className="text-6xl font-bold text-center merch-text">Tour Tickets</h1>
          <div
            id="tour-table"
            className={`transition-opacity duration-700 md:w-3/4 mx-auto ${
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
                {tourData.map((tour: TourData, index: number) => (
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
         
         
         {/* Hero Section */}
         <section className="text-center py-16 border-b border-gray-700">
           <h1 className="text-6xl -mt-8 mb-8 merch-text font-bold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
             About Us
           </h1>
           {/* Rotating Logo */}
          
           <p className="text-center italic text-gray-400 hover:text-white">&quot;Catch the vibe, live the energy!&quot;</p>
         </section>
 
        <section className="py-16 px-8 border-b border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl merch-text font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Stage Fright started with four friends and a dream: to create music
              that moves people. From our garages to packed arenas, we&apos;ve stayed
              true to our passion for delivering electrifying rock performances.
              Every song we write and every show we perform is a celebration of
              energy, emotion, and connection with our fans.
            </p>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              With catchy vibe, unforgettable lyrics, and a stage presence
              that ignites crowds, Stage Fright is here to remind you why rock
              will always be alive.
            </p>
          </div>
        </section>
        <section className="py-16 text-center border-b border-gray-700">
          <h2 className="text-6xl merch-text font-bold">Our Songs</h2>
          <p className="text-gray-300 mt-4 text-lg italic">
            Experience the sound of Stage Fright - electrifying, raw, and unforgettable!
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {/* Song 1 */}
            <div className="w-64 bg-black border hover:shadow-white duration-300 ease-in-out border-gray-700 rounded-lg shadow-lg hover:scale-105 transition-all">
              <Image
                src="/vibesunleashed.webp"
                alt="Song 1 Album Cover"
                width={300}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">&quot;Rock Anthem&quot;</h3>
                <p className="text-gray-400 italic mt-2">
                  From the album: Vibes Unleashed
                </p>
                <audio
                  controls
                  className="mt-4 w-full bg-black text-white rounded-full"
                  onPlay={(e) => handlePlay(e.currentTarget)}
                >
                  <source src="/audio.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Song 2 */}
            <div className="w-64 bg-black border hover:shadow-white duration-300 ease-in-out border-gray-700 rounded-lg shadow-lg hover:scale-105 transition-all">
              <Image
                src="/heartbeathigh.webp"
                alt="Song 2 Album Cover"
                width={300}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">&quot;Electric Pulse&quot;</h3>
                <p className="text-gray-400 italic mt-2">
                  From the album: Heartbeat High
                </p>
                <audio
                  controls
                  className="mt-4 w-full bg-black text-white rounded-full"
                  onPlay={(e) => handlePlay(e.currentTarget)}
                >
                  <source src="/audio2.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Song 3 */}
            <div className="w-64 bg-black border hover:shadow-white duration-300 ease-in-out border-gray-700 rounded-lg shadow-lg hover:scale-105 transition-all">
              <Image
                src="/liveenergy.webp"
                alt="Song 3 Album Cover"
                width={300}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">&quot;Stage Rush&quot;</h3>
                <p className="text-gray-400 italic mt-2">
                  From the album: Live Energy SF
                </p>
                <audio
                  controls
                  className="mt-4 w-full bg-black text-white rounded-full"
                  onPlay={(e) => handlePlay(e.currentTarget)}
                >
                  <source src="/audio3.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </section>

        <h2 className="text-6xl mt-8 font-bold merch-text text-center">
          Book Us
        </h2>
         {/* Calendly Embed Section */}
        <CalendlyWidget url="https://calendly.com/stagefright" />
        <div className="w-full mx-auto border-t border-gray-700"></div>

        <h2 className="text-6xl font-bold merch-text mt-12 text-center" id="contactus">
          Contact Us
        </h2>
        
          {/* Contact Form Section */}
          <ContactForm />
        {/* Footer */}
        <footer className="bg-black py-6 text-center">
          <p className="text-gray-400">&copy; 2024 Stage Fright</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
