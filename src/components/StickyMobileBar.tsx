import { useEffect, useState } from 'react';
import { OFFER } from '../data/ptContent';

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 z-40 flex items-center justify-between gap-3 border-t border-[#DDE8CB] bg-[#FFFDF7] px-4 py-2.5 shadow-[0_-6px_18px_rgba(28,28,28,0.08)] transition-transform duration-200 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-[115%]'
      }`}
    >
      <div className="flex min-w-0 flex-col gap-0.5 leading-tight">
        <div className="flex items-baseline gap-2">
          <s className="text-[12.5px] text-[#8A8F86] tabular-nums">{OFFER.compareAtDisplay}</s>
          <b className="font-display text-[20px] font-extrabold text-[#1C1C1C] tabular-nums">
            {OFFER.priceDisplay}
          </b>
        </div>
        <span className="truncate text-[11.5px] text-[#4A5244]">
          Plano único · acesso vitalício + atualizações
        </span>
      </div>

      <a
        href={OFFER.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display shrink-0 rounded-full bg-[#3B6034] px-6 py-3 text-[15px] font-extrabold text-white focus-visible:outline-3 focus-visible:outline-[#F6C744]"
      >
        Quero
      </a>
    </div>
  );
}
