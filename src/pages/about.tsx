import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading/loading";
import styles from "./Loading/loading.module.css";

const About = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const [isFadingOut, setIsFadingOut] = useState(false); 

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsFadingOut(true); 
      setTimeout(() => setIsLoading(false), 1000); 
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
        <title>Stage Fright - About</title>
      </Head>
      <div className="bg-black text-white min-h-screen fade-in">
       {/* Rotating Logo */}
       <div className="perspective">
            <Image
              width={300}
              height={300}
              src="/StageFrightNobg.png"
              alt="Stage Fright Logo"
              className="rotating-side-logo mx-auto w-1/2 mt-8"
            />
          </div>
          {/* Navigation Links */}
          <nav className="text-center text-xl mt-4">
          <Link href="/" className="mx-4 hover:underline">
            Home
          </Link>
          <Link href="/tour" className="mx-4 hover:underline">
            Tour
          </Link>
          <Link href="/merch" className="mx-4 hover:underline">
            Merch
          </Link>
        </nav>
       

        {/* About Section */}
        <section className="py-16 px-8 border-b border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl merch-text font-bold mb-8">Our Story</h2>
            <p className="text-center italic text-gray-400 hover:text-white">&quot;Catch the vibe, live the energy!&quot;</p>
          
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

        <section className="py-16 text-center">
          <h2 className="text-6xl merch-text font-bold">Tour Dates</h2>
          
          <Link
            href="/tour"
            className="inline-block mt-8 px-4 py-2 bg-white text-black text-lg rounded-full shadow-md hover:bg-gray-300 transition"
          >
            Explore
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-black py-6 text-center">
          <p className="text-gray-400">&copy; 2024 Stage Fright</p>
        </footer>
      </div>
    </>
  );
};

export default About;
