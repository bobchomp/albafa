import Image from "next/image";

export default function RegionCard({
  src,
  ga,
  en,
}: {
  src: string;
  ga: string;
  en: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
      <div className="relative aspect-square w-full">
        <Image
          src={src}
          alt={ga}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-bold text-navy">
          <span className="lang-ga">{ga}</span>
          <span className="lang-en">{en}</span>
        </p>
      </div>
    </div>
  );
}
