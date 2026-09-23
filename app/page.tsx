import { Island } from "@phosphor-icons/react/dist/ssr";
import { AnimatedHeroText } from "@/components/animated-hero-text";
import { LoadingScreen } from "@/components/loading-screen";
import { WaitlistForm } from "@/components/waitlist-form";

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
            <WaitlistForm />
          </div>
        </section>

        <footer className="font-season-sans p-6 text-sm text-white/70 md:px-12 md:py-8">
          <p>&copy; {currentYear} Voya. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
