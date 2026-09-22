import { Island } from "@phosphor-icons/react/dist/ssr";
import { AnimatedHeroText } from "@/components/animated-hero-text";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative h-screen max-h-screen w-full overflow-y-auto bg-[url('/bg-2.jpg')] bg-cover bg-center">
      <LoadingScreen />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/50" />

      <div className="relative z-10 flex min-h-full w-full flex-col">
        {/* Top left logo */}
        <header className="p-6 md:px-12 md:py-8">
          <span className="font-season-mix flex select-none items-center gap-2 text-2xl font-medium tracking-tight text-white md:text-3xl">
            <Island
              className="text-burnt-orange"
              size="1.05em"
              weight="fill"
              aria-hidden="true"
            />
            voya
          </span>
        </header>

        <section className="flex flex-1 items-center px-6 py-8 md:px-12 md:py-12">
          <div className="w-full max-w-4xl">
            <AnimatedHeroText />

            <div
              className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:ring-1 sm:ring-white/20 sm:backdrop-blur-md md:mt-10"
              role="group"
              aria-label="Join the Voya waitlist"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="font-season-sans min-h-12 min-w-0 flex-1 rounded-full bg-white/10 px-5 text-base text-white outline-none ring-1 ring-white/20 transition placeholder:text-white/55 focus:bg-white/15 focus:ring-2 focus:ring-white/70 sm:bg-transparent sm:ring-0 sm:focus:bg-transparent sm:focus:ring-0"
              />
              <button
                type="button"
                className="font-season-sans min-h-12 shrink-0 rounded-full bg-burnt-orange px-7 text-base font-semibold text-white transition-colors hover:bg-burnt-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
              >
                Join the waitlist
              </button>
            </div>
          </div>
        </section>

        <footer className="font-season-sans p-6 text-sm text-white/70 md:px-12 md:py-8">
          <p>&copy; {currentYear} Voya. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
