import {
  Check,
  Lock,
  Search,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Undo2,
  ZoomIn,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { IMAGES, OFFER } from '../data/ptContent';
import { TabletCoverMockup } from './TabletCoverMockup';

interface ProductOfferSectionProps {
  onAddToCart: () => void;
  onOpenAppModal: () => void;
}

export function ChristmasGiftCover({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[#D9F0DC] select-none ${
        small ? 'h-[82px] w-[62px] shrink-0' : 'aspect-[3/4] w-full max-w-[280px] mx-auto rounded-2xl shadow-lg'
      }`}
    >
      <img
        src={IMAGES.christmasDessertsCover}
        alt="Capa do livro de oferta 30 Sobremesas de Natal sem açúcar"
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(215, 240, 224, 0.94) 0%, rgba(215, 240, 224, 0.85) 30%, rgba(215, 240, 224, 0) 58%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-1.5 text-center">
        <span
          className={`font-display font-black text-[#1E472A] tabular-nums ${
            small ? 'text-[14px] leading-none' : 'text-[38px] leading-none'
          }`}
        >
          30
        </span>
        <span
          className={`font-display font-extrabold text-[#1E472A] ${
            small ? 'mt-0.5 text-[7px] leading-[1.08]' : 'mt-1 text-[19px] leading-[1.1]'
          }`}
        >
          Sobremesas de Natal
          <br />
          sem açúcar
        </span>
      </div>
    </div>
  );
}

export function ProductOfferSection({ onAddToCart, onOpenAppModal }: ProductOfferSectionProps) {
  const [activeSlide, setActiveSlide] = useState<'main' | 'gift'>('main');
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section
      id="oferta-recetario"
      className="w-full bg-[#3B6034] px-3 py-8 sm:px-6 sm:py-12"
      aria-labelledby="product-main-title"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        {/* LEFT: Sticky Media Gallery (52% -> 6 cols) */}
        <div className="lg:sticky lg:top-6 lg:col-span-6">
          <div className="relative overflow-hidden rounded-[26px] bg-white p-6 shadow-[0_18px_40px_rgba(10,30,10,0.22)] sm:p-10">
            <button
              type="button"
              onClick={() => setZoomOpen(true)}
              aria-label="Ampliar imagem do produto"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#DDE8CB] bg-white/90 text-[#2B4826] shadow-xs transition hover:bg-[#EEF4E2]"
            >
              <ZoomIn className="h-4 w-4" />
            </button>

            <div className="py-2">
              {activeSlide === 'main' ? (
                <TabletCoverMockup />
              ) : (
                <div className="py-4">
                  <ChristmasGiftCover />
                </div>
              )}
            </div>

            {/* Thumbnail switcher */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveSlide('main')}
                className={`cursor-pointer rounded-xl border-2 px-3 py-1.5 text-[12px] font-bold transition ${
                  activeSlide === 'main'
                    ? 'border-[#3B6034] bg-[#EEF4E2] text-[#2B4826]'
                    : 'border-[#DDE8CB] bg-white text-[#5C6B55] hover:border-[#5C8019]'
                }`}
              >
                +1000 Receitas (App + PDF)
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide('gift')}
                className={`cursor-pointer rounded-xl border-2 px-3 py-1.5 text-[12px] font-bold transition ${
                  activeSlide === 'gift'
                    ? 'border-[#3B6034] bg-[#EEF4E2] text-[#2B4826]'
                    : 'border-[#DDE8CB] bg-white text-[#5C6B55] hover:border-[#5C8019]'
                }`}
              >
                Oferta: 30 Sobremesas de Natal
              </button>
            </div>
            <div className="mt-2 text-center text-[12px] font-medium text-[#5C6B55] tabular-nums">
              {activeSlide === 'main' ? '1 / 2' : '2 / 2'}
            </div>
          </div>
        </div>

        {/* RIGHT: Purchase Card (48% -> 6 cols) */}
        <div className="lg:col-span-6">
          <div className="rounded-[26px] bg-[#FFFDF7] p-5 text-[#1C1C1C] shadow-[0_18px_40px_rgba(10,30,10,0.28)] sm:p-7">
            {/* Rating Link */}
            <a
              href="#avaliacoes"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1C1C1C] hover:underline"
            >
              <div className="flex items-center gap-0.5 text-[#EBBF20]" aria-label="4.7 de 5 estrelas">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#EBBF20] text-[#EBBF20]" />
                ))}
                <Star className="h-4 w-4 fill-[#EBBF20]/70 text-[#EBBF20]" />
              </div>
              <span className="tabular-nums">4.7</span>
              <span className="text-[13px] font-medium text-[#5C6B55]">(240 avaliações)</span>
            </a>

            {/* Product Title */}
            <h2
              id="product-main-title"
              className="font-display mt-2.5 text-[28px] leading-[1.08] font-extrabold tracking-[-0.01em] text-[#2B4826] sm:text-[34px]"
            >
              Livro de Receitas Anti-inflamatórias +1000 Receitas
            </h2>

            {/* MÊS BLACK · OFERTA Box */}
            <div className="mt-4 flex items-center gap-3.5 rounded-[14px] bg-[#111111] p-3.5 text-white">
              <ChristmasGiftCover small />
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-[#E8C35A] px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-[0.08em] text-[#111111] uppercase">
                  MÊS BLACK · OFERTA
                </span>
                <p className="font-display mt-1.5 text-[15.5px] leading-snug font-bold text-white">
                  Leva grátis <b className="text-[#E8C35A]">30 Sobremesas de Natal sem açúcar</b>
                </p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-[#D9D9D9]">
                  Turrões, bolachas, tartes e sobremesas de colher, sem glúten. Incluído no teu plano
                  único: chega à tua app com a tua compra.
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.04em] text-[#E8C35A] uppercase">
                  Só até quinta-feira, 26 de novembro
                </p>
              </div>
            </div>

            {/* Price Block — SINGLE 9,90 € OFFER PLAN */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="font-display text-[44px] leading-none font-extrabold tracking-[-0.02em] text-[#2B4826] tabular-nums sm:text-[46px]">
                {OFFER.priceDisplay}
              </span>
              <s className="font-display text-[20px] font-semibold text-[#8A9184] tabular-nums">
                {OFFER.compareAtDisplay}
              </s>
              <span className="font-display rounded-[8px] bg-[#D93A2B] px-2.5 py-1.5 text-[14px] leading-none font-extrabold text-white tabular-nums">
                {OFFER.discountLabel}
              </span>
            </div>

            {/* Single Offer Indicator */}
            <div className="mt-3 flex items-center gap-2.5 text-[12.5px] leading-snug font-bold tracking-[0.05em] text-[#3B6034] uppercase">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#5C8019] shadow-[0_0_0_4px_#E3F4D4]"
              />
              <span>Plano único de oferta · Pagamento único, não é subscrição</span>
            </div>

            {/* Social Proof Avatars */}
            <div className="mt-3.5 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[
                  { bg: 'bg-[#3B6034]', init: 'MC' },
                  { bg: 'bg-[#5C8019]', init: 'SG' },
                  { bg: 'bg-[#2B4826]', init: 'AP' },
                  { bg: 'bg-[#4E7524]', init: 'LR' },
                ].map((av) => (
                  <span
                    key={av.init}
                    className={`font-display flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#FFFDF7] text-[11px] font-extrabold text-white shadow-xs ${av.bg}`}
                  >
                    {av.init}
                  </span>
                ))}
              </div>
              <p className="text-[14px] leading-snug text-[#1C1C1C]">
                <b className="text-[#5C8019] tabular-nums">+60.000 pessoas</b> já cozinham com as
                nossas receitas
              </p>
            </div>

            <hr className="my-3.5 border-0 border-t-[1.5px] border-dashed border-[#DDE8CB]" />

            <p className="text-[15px] leading-relaxed text-[#5C6B55]">
              Pequenos-almoços, almoços, jantares, sobremesas e batidos. Tudo na tua app, com pesquisa
              por ingrediente, e também em PDF. Teu para sempre.
            </p>

            {/* Feature Checkmarks Box */}
            <ul className="mt-3.5 space-y-2.5 rounded-[16px] border-[1.5px] border-[#DDE8CB] bg-white p-4">
              <li className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[14px] leading-snug">
                <Check className="mt-0.5 h-[18px] w-[18px] stroke-[3] text-[#5C8019]" />
                <span>
                  <strong>+1000 receitas anti-inflamatórias</strong>: almoços, jantares,
                  pequenos-almoços, sobremesas, batidos e mais
                </span>
              </li>
              <li className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[14px] leading-snug">
                <Check className="mt-0.5 h-[18px] w-[18px] stroke-[3] text-[#5C8019]" />
                <span>
                  Todas <strong>sem glúten e sem açúcar adicionado</strong>, prontas em 15–20 min
                </span>
              </li>
              <li className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[14px] leading-snug">
                <Check className="mt-0.5 h-[18px] w-[18px] stroke-[3] text-[#5C8019]" />
                <span>Na tua app com pesquisa por ingrediente (e em PDF para imprimir)</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[14px] leading-snug">
                <Check className="mt-0.5 h-[18px] w-[18px] stroke-[3] text-[#5C8019]" />
                <span>
                  Validadas pela nutricionista <strong>{OFFER.nutritionistName}</strong> (inscrita na
                  Ordem)
                </span>
              </li>
              <li className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[14px] leading-snug">
                <Check className="mt-0.5 h-[18px] w-[18px] stroke-[3] text-[#5C8019]" />
                <span>
                  Receitas novas todos os meses{' '}
                  <span className="ml-1 inline-block rounded-[5px] bg-[#5C8019] px-1.5 py-0.5 text-[10px] font-extrabold tracking-wider text-white uppercase">
                    Grátis
                  </span>
                </span>
              </li>
              <li className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[14px] leading-snug">
                <Check className="mt-0.5 h-[18px] w-[18px] stroke-[3] text-[#5C8019]" />
                <div>
                  <span>
                    Vantagem de cliente: todos os novos livros que lançarmos, a metade do preço{' '}
                    <span className="ml-1 inline-block rounded-[5px] bg-[#D93A2B] px-1.5 py-0.5 text-[10px] font-extrabold tracking-wider text-white uppercase">
                      Vitalício
                    </span>
                  </span>
                  <small className="mt-0.5 block text-[12px] text-[#5C6B55]">
                    Em cada lançamento enviamos o teu código por email.
                  </small>
                </div>
              </li>
            </ul>

            {/* Single Offer Plan Box (replacing multi-tier upsells cleanly as requested) */}
            <div className="relative mt-6 rounded-[16px] border-2 border-dashed border-[#5C8019] bg-[#F8FBF2] px-3.5 pt-5 pb-3.5">
              <div className="absolute -top-3 left-3.5">
                <span className="inline-block rounded-full bg-[#2B4826] px-3 py-1 text-[11px] font-extrabold tracking-[0.07em] text-white uppercase">
                  Plano único de oferta
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-[12px] border-[1.5px] border-[#5C8019] bg-white p-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#5C8019] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[14.5px] font-extrabold text-[#2B4826]">
                      Acesso Completo Vitalício + Oferta de Natal
                    </div>
                    <div className="text-[12px] text-[#5C6B55]">
                      +1000 Receitas na App e PDF + 30 Sobremesas de Natal + Atualizações mensais
                    </div>
                  </div>
                </div>
                <div className="shrink-0 text-right leading-tight">
                  <s className="block text-[12px] font-bold text-[#D93A2B] tabular-nums">
                    {OFFER.compareAtDisplay}
                  </s>
                  <b className="font-display text-[19px] font-extrabold text-[#2B4826] tabular-nums">
                    {OFFER.priceDisplay}
                  </b>
                </div>
              </div>
            </div>

            {/* Primary CTA Link — opens checkout in new tab */}
            <a
              href={OFFER.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-4 flex min-h-[60px] w-full items-center justify-center gap-2 rounded-full bg-[#2B4826] px-6 py-4 text-[18px] font-bold text-white shadow-[0_10px_22px_rgba(43,72,38,0.32)] transition hover:bg-[#223A1E] focus-visible:outline-3 focus-visible:outline-[#F6C744] sm:text-[19px]"
            >
              <span>Comprar agora — {OFFER.priceDisplay}</span>
            </a>

            <p className="mt-2.5 text-center text-[12.5px] leading-snug text-[#5B6157]">
              Produto digital: recebes no momento na tua app. Tens 14 dias para devolver enquanto não
              descarregares o PDF.
            </p>
            <p className="mt-1 text-center text-[14.5px] font-bold text-[#D93A2B]">
              Poupas {OFFER.savingsDisplay} hoje · Pagamento único
            </p>

            {/* 6 Trust Tiles */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                {
                  icon: Smartphone,
                  title: 'No instante',
                  sub: 'na tua app',
                },
                {
                  icon: Lock,
                  title: 'Pagamento único',
                  sub: 'sem subscrição',
                },
                {
                  icon: Sparkles,
                  title: 'Vitalício',
                  sub: 'acesso para sempre',
                },
                {
                  icon: Search,
                  title: 'Pesquisa',
                  sub: 'por ingrediente',
                },
                {
                  icon: Undo2,
                  title: '14 dias',
                  sub: 'para devolver',
                },
                {
                  icon: RefreshCw,
                  title: 'Grátis',
                  sub: 'receitas todo o mês',
                },
              ].map((tile) => (
                <div
                  key={tile.title}
                  className="flex flex-col items-center justify-start rounded-[12px] border-[1.5px] border-[#DDE8CB] bg-white px-2 py-2.5 text-center"
                >
                  <tile.icon className="mb-1 h-5 w-5 text-[#5C8019]" />
                  <b className="font-display text-[13.5px] leading-tight font-bold text-[#2B4826]">
                    {tile.title}
                  </b>
                  <span className="text-[11.5px] leading-tight text-[#5C6B55]">{tile.sub}</span>
                </div>
              ))}
            </div>

            {/* Secure Payment Methods */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="flex items-center gap-1.5 text-[12px] font-bold tracking-[0.1em] text-[#5C6B55] uppercase">
                <ShieldCheck className="h-4 w-4 text-[#5C8019]" />
                <span>Pagamento 100 % seguro</span>
              </p>
              <ul className="flex flex-wrap justify-center gap-1.5" aria-label="Métodos de pagamento">
                {[
                  'VISA',
                  'Mastercard',
                  'AMEX',
                  'MB WAY',
                  'Multibanco',
                  'PayPal',
                  'Apple Pay',
                  'Google Pay',
                ].map((pm) => (
                  <li
                    key={pm}
                    className="rounded border border-[#DDE8CB] bg-white px-2 py-1 text-[10.5px] font-extrabold text-[#2B4826]"
                  >
                    {pm}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ Anchor Link */}
            <a
              href="#perguntas-frequentes"
              className="font-display mt-4 block rounded-full border-2 border-[#2B4826] py-3 text-center text-[15px] font-bold text-[#2B4826] transition hover:bg-[#EEF4E2]"
            >
              Dúvidas? Ver perguntas frequentes ↓
            </a>

            {/* Mini App Access Strip */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-[10px] border border-[#DDE8CB] bg-[#FFFDF7] px-3.5 py-2.5 text-[12.5px] text-[#4A5244]">
              <span>
                📱 <strong className="text-[#1C1C1C]">Já és cliente?</strong> Os teus livros estão na
                app
              </span>
              <button
                type="button"
                onClick={onOpenAppModal}
                className="cursor-pointer border-b-2 border-[#ACCC8B] pb-0.5 font-extrabold text-[#3B6034] transition hover:border-[#3B6034]"
              >
                Entrar →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pré-visualização do livro de receitas"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="relative w-full max-w-[460px] rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomOpen(false)}
              aria-label="Fechar pré-visualização"
              className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EEF4E2] text-[#2B4826] hover:bg-[#DDE8CB]"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="py-2">
              {activeSlide === 'main' ? <TabletCoverMockup /> : <ChristmasGiftCover />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
