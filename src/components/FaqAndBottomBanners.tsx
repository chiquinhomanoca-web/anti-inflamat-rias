import { Check, Star, X } from 'lucide-react';
import { useState } from 'react';
import { FAQ_ITEMS, OFFER } from '../data/ptContent';
import { TabletCoverMockup } from './TabletCoverMockup';

interface FaqAndBottomBannersProps {
  onScrollToOffer: () => void;
}

export function FaqAndBottomBanners({ onScrollToOffer }: FaqAndBottomBannersProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* FAQ SECTION (.rec-faq) */}
      <section
        id="perguntas-frequentes"
        aria-label="Perguntas frequentes"
        className="w-full border-2 border-[#5C8019] bg-gradient-to-b from-[#FFFDF7] to-white px-3 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:px-6"
      >
        <div className="mx-auto max-w-[780px]">
          <div className="px-2 pb-2.5">
            <div className="text-[12px] font-extrabold tracking-[0.06em] text-[#5C8019] uppercase">
              O mais perguntado
            </div>
            <h2 className="font-display text-[22px] font-black text-[#1C1C1C] sm:text-[25px]">
              Perguntas frequentes
            </h2>
            <p className="mt-0.5 text-[13.5px] text-[#4A5244]">
              Esclarecemos as dúvidas comuns antes de comprar
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="relative overflow-hidden rounded-[14px] border-[1.5px] border-[#DDE8CB] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-colors hover:border-[#ACCC8B]"
                >
                  <div
                    aria-hidden="true"
                    className="h-[4px] w-full bg-gradient-to-r from-[#5C8019] to-[#ACCC8B] opacity-30"
                  />
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left text-[15px] font-extrabold text-[#1C1C1C] focus-visible:outline-2 focus-visible:outline-[#3B6034]"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={`relative h-[22px] w-[22px] shrink-0 rounded-[8px] transition-colors ${
                        isOpen ? 'bg-[#5C8019] text-white' : 'bg-[#EEF4E2] text-[#1C1C1C]'
                      }`}
                    >
                      <span className="absolute top-[10px] left-[6px] h-[2px] w-[10px] rounded bg-current" />
                      <span
                        className={`absolute top-[6px] left-[10px] h-[10px] w-[2px] rounded bg-current transition-transform ${
                          isOpen ? 'scale-y-0' : 'scale-y-100'
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="space-y-2 px-4 pt-0 pb-4 text-[14px] leading-relaxed text-[#4A5244]">
                      {item.a.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANNER 09 - OPINIÕES */}
      <section className="relative mx-auto w-full max-w-[640px] overflow-hidden bg-[#FFFDF7] px-5 py-10 sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#DCECC8]/55"
        />
        <div className="relative z-10">
          <div className="mb-3 flex justify-center">
            <span className="font-display inline-block rounded-full bg-[#3B6034] px-4 py-1.5 text-[11px] font-extrabold tracking-[0.08em] text-white uppercase">
              Opiniões
            </span>
          </div>
          <h2 className="font-display text-center text-[27px] leading-tight font-extrabold text-[#1C1C1C] sm:text-[31px]">
            O que dizem{' '}
            <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
              as nossas clientes
            </span>
          </h2>

          <div className="mt-6 space-y-4">
            {[
              {
                init: 'M',
                name: 'Maria S.',
                quote:
                  '«Pedi-vos no Instagram que criassem uma app para tudo ser mais intuitivo… e devo dizer que é super cómoda. Entrar e aceder às receitas assim é o melhor.»',
              },
              {
                init: 'L',
                name: 'Lúcia G.',
                quote:
                  '«Quase todos os dias faço uma das muitíssimas receitas: ficam deliciosas, são fáceis e sem ingredientes complicados. E a equipa vai atualizando o livro. Tem muito mais valor do que custa.»',
              },
              {
                init: 'S',
                name: 'Sofia G.',
                quote:
                  '«Tenho vários livros, e o que mais uso de longe é o das 1000 receitas. Estou encantada.»',
              },
            ].map((rev) => (
              <div
                key={rev.name}
                className="rounded-2xl border border-[#DDE8CB] bg-white p-4 shadow-[0_4px_16px_rgba(28,28,28,0.05)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF4E2] text-[14px] font-extrabold text-[#3B6034]">
                      {rev.init}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-extrabold text-[#1C1C1C]">{rev.name}</div>
                      <div className="text-[11px] text-[#5C6B55]">Livro +1000 Receitas</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E3F4D4] px-2.5 py-1 text-[10.5px] font-bold text-[#2B4826]">
                    <Check className="h-3 w-3 stroke-[3]" /> Compra verificada
                  </span>
                </div>
                <div className="mt-2 flex gap-0.5 text-[#EBBF20]" aria-label="5 de 5 estrelas">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-[#EBBF20]" />
                  ))}
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#4A5244]">{rev.quote}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] text-[#7D8A70]">
            Avaliações reais de clientes, extraídas das nossas opiniões verificadas.
          </p>
        </div>
      </section>

      {/* BANNER 10 - COMPARA */}
      <section className="relative mx-auto w-full max-w-[640px] overflow-hidden bg-[#FFFDF7] px-5 py-10 sm:px-8">
        <div className="mb-3 flex justify-center">
          <span className="font-display inline-block rounded-full bg-[#3B6034] px-4 py-1.5 text-[11px] font-extrabold tracking-[0.08em] text-white uppercase">
            Compara
          </span>
        </div>
        <h2 className="font-display text-center text-[25px] leading-[1.15] font-extrabold text-[#1C1C1C] [text-wrap:balance] sm:text-[30px]">
          Comer anti-inflamatório, por tua conta ou{' '}
          <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
            resolvido?
          </span>
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Left: Without */}
          <div className="rounded-2xl border border-dashed border-[#C9CEC3] bg-[#F2F1EC] p-5">
            <h3 className="font-display text-center text-[15px] font-extrabold text-[#1C1C1C]">
              Procurar receitas soltas na internet
            </h3>
            <ul className="mt-4 space-y-3 text-[13px] text-[#4A5244]">
              {[
                'Não sabes se têm glúten ou açúcar escondido',
                'Ingredientes raros e caros',
                'Ninguém as reviu nem validou',
                'Acabas por comer sempre o mesmo',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D93A2B] text-white">
                    <X className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Easy Option */}
          <div className="relative rounded-2xl border-2 border-[#5C8019] bg-white p-5 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="font-display inline-block rounded-full bg-[#3B6034] px-3 py-1 text-[10px] font-extrabold tracking-[0.06em] text-white uppercase whitespace-nowrap">
                A opção fácil
              </span>
            </div>
            <h3 className="font-display mt-1 text-center text-[15px] font-extrabold text-[#1C1C1C]">
              Com o Livro Anti-inflamatório +1000
            </h3>
            <ul className="mt-4 space-y-3 text-[13px] text-[#1C1C1C]">
              {[
                <>
                  <strong>+1000 receitas</strong> sem glúten nem açúcar adicionado
                </>,
                <>
                  Ingredientes do <strong>supermercado habitual</strong>
                </>,
                <>
                  Validadas pela <strong>nutricionista {OFFER.nutritionistName}</strong>
                </>,
                <>
                  <strong>Pesquisa por ingrediente</strong> na tua app
                </>,
                <>
                  <strong>Fotografia de cada prato</strong> pronto
                </>,
                <>
                  <strong>Receitas novas todo o mês</strong>, grátis
                </>,
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5C8019] text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#3B6034] px-5 py-5 text-center text-white shadow-lg">
          <p className="text-[13px] font-medium text-[#E3F4D4]">Tudo isto num</p>
          <div className="font-display mt-0.5 text-[24px] font-black sm:text-[28px]">
            Pagamento único de {OFFER.priceDisplay}
          </div>
          <p className="mt-1 text-[12px] text-[#DCECC8]">
            Acesso vitalício · Atualizações incluídas · Sem subscrição
          </p>
        </div>
      </section>

      {/* BANNER 11 - TUDO O QUE LEVAS HOJE */}
      <section className="relative mx-auto w-full max-w-[640px] overflow-hidden bg-[#FFFDF7] px-5 pt-8 pb-12 sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#DCECC8]/55"
        />
        <div className="relative z-10">
          <div className="mb-3 flex justify-center">
            <span className="font-display inline-block rounded-full bg-[#3B6034] px-4 py-1.5 text-[11px] font-extrabold tracking-[0.08em] text-white uppercase">
              Tudo o que levas hoje
            </span>
          </div>
          <h2 className="font-display text-center text-[26px] leading-tight font-extrabold text-[#1C1C1C] sm:text-[31px]">
            Estreia receitas novas{' '}
            <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
              esta mesma noite
            </span>
          </h2>

          <div className="mt-7 grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <TabletCoverMockup compact />
            </div>
            <div className="sm:col-span-7">
              <ul className="space-y-3 text-[13.5px] leading-snug text-[#1C1C1C]">
                {[
                  <>
                    <strong>+1000 receitas</strong> em 16 capítulos temáticos, com fotografia de cada
                    prato (+ oferta de 30 Sobremesas de Natal)
                  </>,
                  <>
                    <strong>A tua app</strong> com pesquisa por ingrediente: telemóvel, tablet e
                    computador
                  </>,
                  <>
                    <strong>PDF descarregável</strong> para utilizar sem ligação à internet
                  </>,
                  <>
                    <strong>Receitas novas todos os meses</strong>, grátis para sempre
                  </>,
                  <>
                    <strong>Acesso vitalício</strong> e suporte por email sempre que precisares
                  </>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5C8019] text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <a
              href={OFFER.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-block rounded-full bg-[#5C8019] px-9 py-4 text-[17px] font-extrabold text-white shadow-[0_8px_22px_rgba(92,128,25,0.32)] transition hover:bg-[#3B6034] focus-visible:outline-3 focus-visible:outline-[#F6C744]"
            >
              Conseguir hoje por {OFFER.priceDisplay} →
            </a>
            <p className="mt-2.5 text-[12px] text-[#5C6B55]">
              Plano único · Pagamento único · Sem subscrição · Acesso imediato
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
