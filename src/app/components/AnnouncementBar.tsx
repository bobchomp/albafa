import DeadButton from "./DeadButton";

export default function AnnouncementBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-gold px-4 py-2 text-center text-xs font-semibold text-navy-dark sm:text-sm">
      <span>
        Fèis Ball-Coise a’ Mhòid <span className="opacity-60">|</span> Mòd
        Youth Festival
      </span>
      <DeadButton className="rounded-full bg-navy px-3 py-1 text-white">
        Clàraich | Register (free)
      </DeadButton>
    </div>
  );
}
