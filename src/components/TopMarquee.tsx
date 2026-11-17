import { MARQUEE_ITEMS } from '../data/ptContent';

export function TopMarquee() {
  return (
    <div
      className="w-full overflow-hidden border-y border-[#5C8019]/25 bg-[#FFFDF7] py-2.5"
      aria-label="Aviso de oferta"
    >
      <div className="rec-marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <span
            key={idx}
            className="font-display text-[14px] font-bold tracking-[0.04em] text-[#3B6034] uppercase sm:text-[15.5px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
