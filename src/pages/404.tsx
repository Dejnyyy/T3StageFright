// pages/404.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — STAGE·FRIGHT</title>
        <meta name="robots" content="canonical" />
      </Head>

      <main className="flex min-h-[calc(100vh-32px)] flex-col items-center bg-black text-white">
        {/* Brand / Logo */}
        <header className="pt-10 text-center sm:pt-14">
          {/* Pokud máš vlastní font, přidej className 'font-stagefright' */}
          <Link
            href="/"
            className="inline-block select-none text-5xl font-black sm:text-7xl lg:text-8xl"
            aria-label="Go to homepage"
          >
            <Image
              src={"/StageFrightNobg.png"}
              alt="stage fright logo"
              width={600}
              height={400}
            ></Image>
          </Link>
        </header>

        {/* Content */}
        <section className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 text-center sm:px-8 sm:py-16">
          <p className="text-sm uppercase tracking-[0.25em] opacity-60">
            Error
          </p>

          <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
            Page not found
          </h2>

          {/* „Merch“ akcent v duchu screenshotu */}
          <p className="mt-3 text-base opacity-80 sm:text-lg">
            The page you’re looking for has left the stage. Try this instead:
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm transition hover:bg-white hover:text-black sm:text-base"
            >
              ← Back Home
            </Link>
          </div>
        </section>

        <footer className="w-full py-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Mady by{" "}
          <a className="underline" href="https://dejny.eu">
            Dejny
          </a>
          . All rights reserved.
        </footer>
      </main>

      {/* Local styles for shimmer animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </>
  );
}
