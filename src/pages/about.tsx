import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Stage Fright - About</title>
      </Head>
      <div className="bg-black text-white min-h-screen">
       
      <Link href="/">
      <h2 className="fixed top-4 left-4">Back</h2>
      </Link>
        {/* Hero Section */}
        <section className="text-center py-16 border-b border-gray-700">
        <h1 className="text-5xl -mt-8 mb-8 font-extrabold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            About Us
          </h1>
         {/* Rotating Logo */}
         <div className="perspective">
            <Image
            width={300}
            height={300}
              src="/StageFrightNobg.png"
              alt="Stage Fright Logo"
              className="rotating-side-logo mx-auto w-1/2"
            />
          </div>
          <p className="text-center italic text-gray-400 hover:text-white">"Catch the vibe, live the energy!"</p>
        </section>

        {/* About Section */}
        <section className="py-16 px-8 border-b border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Stage Fright started with four friends and a dream: to create music
              that moves people. From local gigs to packed arenas, we've stayed
              true to our passion for delivering electrifying rock performances.
              Every song we write and every show we perform is a celebration of
              energy, emotion, and connection with our fans.
            </p>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              With powerful riffs, unforgettable lyrics, and a stage presence
              that ignites crowds, Stage Fright is here to remind you why rock
              will always be alive.
            </p>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold">Tour Dates</h2>
          
          <Link
            href="/tour"
            className="inline-block mt-8 px-4 py-2 bg-white text-black text-lg font-bold rounded-full shadow-md hover:bg-gray-300 transition"
          >
            Explore
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-black py-6 text-center">
          <p className="text-gray-400">© 2024 Stage Fright</p>
         
        </footer>
      </div>
    </>
  );
};

export default About;
