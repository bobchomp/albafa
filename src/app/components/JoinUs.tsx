import SignupForm from "./SignupForm";

export default function JoinUs() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          Thig Còmhla Rinn <span className="text-navy/40">|</span> Join Us
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
          Dùisg an fhionn-sgeul agus thig air ar turas.
          <br />
          Awaken the legend and join our journey.
        </p>
        <SignupForm />
      </div>
    </section>
  );
}
