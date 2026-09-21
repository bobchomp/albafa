import Image from "next/image";

export default function PlayerCard({
  src,
  name,
  position,
}: {
  src: string;
  name: string;
  position: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-cream/60">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-base font-bold text-navy">{name}</p>
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
          {position}
        </p>
      </div>
    </div>
  );
}
