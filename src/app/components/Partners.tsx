import Image from "next/image";

const partners = [
  { src: "/images/partner-bbc-alba.webp", alt: "BBC Alba", w: 300, h: 145 },
  {
    src: "/images/partner-highland-council.webp",
    alt: "Highland Council",
    w: 300,
    h: 143,
  },
  {
    src: "/images/partner-speakgaelic.webp",
    alt: "SpeakGaelic",
    w: 300,
    h: 200,
  },
  {
    src: "/images/partner-msh-highlands.webp",
    alt: "MSH Highlands",
    w: 500,
    h: 110,
  },
  { src: "/images/partner-bng.webp", alt: "bng", w: 300, h: 111 },
];

const sponsors = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/sponsor-${i + 1}.webp`,
  alt: `Squad sponsor ${i + 1}`,
}));

export default function Partners() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
          Com-pàirtichean | Partners
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((p) => (
            <Image
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              className="h-14 w-auto object-contain opacity-90 sm:h-16"
            />
          ))}
        </div>

        <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
          Sponsairean an Sguad | Squad Sponsors
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {sponsors.map((s) => (
            <Image
              key={s.alt}
              src={s.src}
              alt={s.alt}
              width={300}
              height={115}
              className="h-14 w-auto object-contain opacity-85 sm:h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
