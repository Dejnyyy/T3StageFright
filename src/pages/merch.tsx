import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Loading from "./Loading/loading"; // Import the Loading component
import styles from "./Loading/loading.module.css"; // CSS module for animations

const Merch = () => {
  const [isLoading, setIsLoading] = useState(true); // State for loading animation
  const [isFadingOut, setIsFadingOut] = useState(false); // State for fade-out effect

  const products = [
    {
      name: "StageFright Hoodie",
      price: 40,
      image: "/merchhood.png",
      link: "/checkout?product=StageFright%20Hoodie&price=40&image=/merchhood.png",
    },
    {
      name: "StageFright Cap",
      price: 15,
      image: "/merchcap.png",
      link: "/checkout?product=StageFright%20Cap&price=15&image=/merchcap.png",
    },
    {
      name: "StageFright Tee",
      price: 20,
      image: "/merch.png",
      link: "/checkout?product=StageFright%20Tee&price=20&image=/merch.png",
    },
    {
        name: "StageFright Black Hoodie",
        price: 40,
        image: "/blackhoodie.png",
        link: "/checkout?product=StageFright%20Black%20Hoodie&price=40&image=/blackhoodie.png",
      },
    {
        name: "StageFright Black Cap",
        price: 15,
        image: "/blackcap.png",
        link: "/checkout?product=StageFright%20Black%20Cap&price=15&image=/blackcap.png",
      },
    {
        name: "StageFright Black Tee",
        price: 20,
        image: "/blacktee.png",
        link: "/checkout?product=StageFright%20Black%20Tee&price=20&image=/blacktee.png",
      },
      {
        name: "StageFright SF Black Tee",
        price: 20,
        image: "/sfblacktee.png",
        link: "/checkout?product=StageFright%20SF%20Black%20Tee&price=20&image=/sfblacktee.png",
      },
      {
        name: "StageFright SF  Tee",
        price: 20,
        image: "/sftee.png",
        link: "/checkout?product=StageFright%20SF%20Tee&price=20&image=/sftee.png",
      },
      {
        name: "StageFright SF Black Hoodie",
        price: 40,
        image: "/sfblackhoodie.png",
        link: "/checkout?product=StageFright%20SF%20Black%20Hoodie&price=40&image=/sfblackhoodie.png",
      },
  ];

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsFadingOut(true); // Start fade-out effect
      setTimeout(() => setIsLoading(false), 1000); // After fade-out, hide loading animation
    }, 1000); 

    return () => clearTimeout(timer);
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
        <title>Stage Fright - Merch</title>
      </Head>
      <div className="bg-black text-white min-h-screen">
        {/* Rotating Logo */}
        <section className="w-full mx-auto mt-12 text-center">
          <div className="perspective">
            <Image
              width={300}
              height={300}
              src="/StageFrightNobg.png"
              alt="Stage Fright Logo"
              className="rotating-side-logo mx-auto w-1/2"
            />
          </div>
        </section>

        {/* Navigation and Header */}
        <section>
          {/* Marquee */}
          <Link href="/tour">
            <div className="fixed top-0 w-full z-40 bg-black">
              <Marquee
                gradient={false}
                speed={100}
                className="text-white font-bold"
              >
                !!! New Tour - Check out the schedule !!!
              </Marquee>
            </div>
          </Link>
           {/* Navigation Links */}
        <nav className="text-center text-xl mt-4">
          <Link href="/" className="mx-4 hover:underline">
            Home
          </Link>
          <Link href="/tour" className="mx-4 hover:underline">
            Tour
          </Link>
          <Link href="/about" className="mx-4 hover:underline">
            About
          </Link>
        </nav>
          <h1 className="text-center text-6xl font-bold mt-10 bg-clip-text text-transparent bg-center bg-cover">
            Merch
          </h1>
        </section>
        

        {/* Products Section */}
        <section>
          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-3/4 mx-auto">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border border-white hover:shadow-md hover:shadow-white transition duration-200 rounded-lg flex flex-col bg-black p-4 h-full"
                >
                  {/* Product Image */}
                  <Link href={product.image} target="_blank">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain mx-auto hover:scale-110 transition-transform"
                    />
                  </Link>
                  {/* Spacer for alignment */}
                  <div className="flex-grow"></div>
                  {/* Price and Button */}
                  <div className="flex flex-row items-center justify-between w-full mt-auto">
                    <p className="text-lg font-medium">${product.price}</p>
                    <Link
                      href={product.link}
                      className="bg-white hover:bg-gray-300 text-black px-4 py-2 rounded-lg text-sm"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-black py-6 text-center">
          <p className="text-gray-400">&copy; 2024 Stage Fright</p>
        </footer>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        body {
          background-color: black;
          color: white;
          margin: 0;
        }

        h1 {
          background: url("/background.webp") 50% 50%;
          background-size: cover;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

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
        }
      `}</style>
    </>
  );
};

export default Merch;
