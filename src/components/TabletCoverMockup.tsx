import { IMAGES } from '../data/ptContent';

interface TabletCoverMockupProps {
  compact?: boolean;
  showBadge?: boolean;
}

export function TabletCoverMockup({ compact = false, showBadge = false }: TabletCoverMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[330px] select-none">
      {showBadge && (
        <div
          className="font-display absolute -top-3 -right-3 z-20 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full border-[3px] border-[#FFFDF7] bg-[#5C8019] text-center text-white shadow-lg"
          aria-hidden="true"
        >
          <span className="text-[19px] leading-none font-extrabold tabular-nums">+1000</span>
          <span className="mt-0.5 text-[9.5px] leading-tight font-bold">
            receitas
            <br />
            na app
          </span>
        </div>
      )}

      {/* iPad Frame */}
      <div className="rounded-[26px] border-[8px] border-[#1A1A1A] bg-[#1A1A1A] p-[2px] shadow-[0_20px_44px_rgba(20,40,18,0.22)]">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] bg-[#D9F0DC]">
          <img
            src={IMAGES.foodBowlsCover}
            alt="Capa do Livro de Receitas Anti-inflamatórias +1000 Receitas"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          {/* Subtle mint radial scrim in center so Portuguese typography stays ultra sharp */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(215, 240, 224, 0.94) 0%, rgba(215, 240, 224, 0.85) 28%, rgba(215, 240, 224, 0) 54%)',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span
              className={`font-display font-black tracking-tight text-[#1E472A] tabular-nums ${
                compact ? 'text-[38px] leading-none' : 'text-[44px] leading-none'
              }`}
            >
              +1000
            </span>
            <span
              className={`font-display mt-1 font-extrabold text-[#1E472A] ${
                compact ? 'text-[22px] leading-[1.08]' : 'text-[26px] leading-[1.08]'
              }`}
            >
              Receitas
              <br />
              Anti-inflamatórias
            </span>
            <span
              className={`mt-2 max-w-[190px] font-semibold text-[#2E5438] ${
                compact ? 'text-[10.5px] leading-snug' : 'text-[11.5px] leading-snug'
              }`}
            >
              Sem açúcar, sem glúten e baixas em hidratos de carbono
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
