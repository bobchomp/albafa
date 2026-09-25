import Image from "next/image";
import DeadButton from "./DeadButton";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <Image
        src="/images/hero-wallpaper-main.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <Image
          src="/images/alba-fa-logo-outlined.webp"
          alt="Alba FA"
          width={96}
          height={96}
          className="h-20 w-20 sm:h-24 sm:w-24"
        />

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="lang-ga">Comann Ball-Coise Alba</span>
          <span className="lang-en">The Alba Football Alliance</span>
        </p>
        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="lang-ga">Guth na Gàidhlig ann am Ball-coise</span>
          <span className="lang-en">A Voice for Gaelic in Football</span>
        </h1>

        <p className="max-w-2xl text-sm text-white/80 sm:text-base">
          <span className="lang-ga">
            Chaidh Alba FA a stèidheachadh gus ball-coise a chleachdadh mar
            fheachd airson Gàidhlig na h-Alba a cheanglachadh, a bhrosnachadh
            agus a dh&rsquo;fhàs tro ghnìomhachd ball-coise coimhearsnachd.
          </span>
          <span className="lang-en">
            The Alba FA has been established to use football as a force to
            connect, inspire and grow Scottish Gaelic through community
            football activity, both nationally and internationally.
          </span>
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <DeadButton className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-dark transition hover:brightness-95">
            <span className="lang-ga">Cuidich Alba FA</span>
            <span className="lang-en">Support Alba FA</span>
          </DeadButton>
          <DeadButton className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
            <span className="lang-ga">Barrachd Ionnsachadh</span>
            <span className="lang-en">Learn More</span>
          </DeadButton>
        </div>

        <p className="mt-2 text-base font-semibold uppercase tracking-widest text-white/70 sm:text-lg">
          <span className="lang-ga">#IsSinneAlba</span>
          <span className="lang-en">#WeAreAlba</span>
        </p>
      </div>
    </section>
  );
}
