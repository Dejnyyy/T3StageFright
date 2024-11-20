import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Tour = () => {
  const tourData = [
    {
      date: "November 16-17",
      city: "Las Vegas, NV",
      venue: "ComplexCon",  
      tickets: "/checkout?product=Ticket%20LasVegas&price=50&image=/bg.png", // Updated link to Checkout
    },
    {
      date: "December 14",
      city: "Miami Gardens, FL",
      venue: "Rolling Loud",
      tickets: "/checkout?product=Ticket%20Miami&price=50&image=/bg.png", // Updated link to Checkout
    },
    {
      date: "December 20",
      city: "Gallipolis, OH",
      venue: "Gallipolis City Park",
      tickets: "/checkout?product=Ticket%20Gallipolis&price=50&image=/bg.png", // Updated link to Checkout
    },
    {
      date: "December 28",
      city: "Hunington, WV",
      venue: "AT&T Stadium",
      tickets: "/checkout?product=Ticket%20Hunington&price=50&image=/bg.png", // Updated link to Checkout
    },
  ];

  return (
    <>
      <Head>
        <title>Stage Fright - Tour</title>
      </Head>
      <div className="bg-black text-white min-h-screen">
        {/* Marquee */}
        <Link href="/tour">
          <Marquee
            gradient={false}
            speed={100}
            className="fixed top-0 w-full z-40 font-bold text-white bg-black"
          >
            !!! New Tour - Check out the schedule !!!
          </Marquee>
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
        <section>
          <div className="mx-auto w-full text-center text-xl mt-4">
            <Link href="/" className="mx-4">
              Home
            </Link>
            <Link href="/tour" className="mx-4">
              Tour
            </Link>
            <Link href="/merch" className="mx-4">
              Merch
            </Link>
          </div>
          <h1 className="text-center text-7xl mt-8 bg-clip-text text-transparent bg-center bg-cover">
            Tour
          </h1>
        </section>

        {/* Tour Table */}
        <section className="overflow-x-auto mt-12">
          <div className="overflow-x-auto table-container mt-32">
            <table className="min-w-full table-auto text-white bg-black border-separate border-spacing-y-2">
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
                        Tickets
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Background Image */}
        <section className="mt-12">
          <Image
            src="/bg.png"
            alt="Stage Fright Tour"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </section>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .rotating-logo {
          animation: rotate 10s linear infinite;
          transform-style: preserve-3d;
        }

        .perspective {
          perspective: 1000px; /* Adds 3D effect */
        }

        h1 {
          background: url("/background.webp") 50% 50%;
          background-size: cover;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Tour;
