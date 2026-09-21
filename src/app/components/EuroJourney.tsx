import Image from "next/image";
import DeadButton from "./DeadButton";

export default function EuroJourney() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark px-4 py-20 sm:px-6 lg:px-8">
      <Image
        src="/images/scotland-landscape-bg.webp"
        alt=""
        fill
        className="object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Euro 2024
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
          <span className="lang-ga">Ar T-Slighe Euro 2024</span>
          <span className="lang-en">Our Euro 2024 Journey</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
          <span className="lang-ga">
            Airson an lèine a ghabhail os làimhe agus a’ ghairm a chuir an
            cèill.
          </span>
          <span className="lang-en">To grasp the shirt and sound the cry.</span>
        </p>

        <DeadButton className="group relative mx-auto mt-10 block w-full max-w-2xl overflow-hidden rounded-2xl">
          <Image
            src="/images/video-thumb.webp"
            alt="Alba FA — Our Euro 2024 Journey"
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy-dark shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 h-6 w-6"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </DeadButton>
      </div>
    </section>
  );
}
