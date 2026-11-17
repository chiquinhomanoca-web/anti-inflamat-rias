import { Check, Search, Heart, BookOpen, Printer, Smartphone, Infinity as InfinityIcon, RefreshCw, Lock } from 'lucide-react';
import { useState } from 'react';
import { EXTRA_CATEGORIES, IMAGES, OFFER } from '../data/ptContent';
import { TabletCoverMockup } from './TabletCoverMockup';

interface EditorialBannersTopProps {
  onScrollToOffer: () => void;
}

const SAMPLE_RECIPES = [
  { name: 'Salmão no Forno com Espargos e Limão', tag: '200 Jantares Leves', mins: '18 min', ing: 'salmão' },
  { name: 'Bowl de Salmão, Abacate e Quinoa', tag: '200 Almoços', mins: '15 min', ing: 'salmão' },
  { name: 'Tarteletes de Salmão com Courgette', tag: 'Receitas Virais', mins: '20 min', ing: 'salmão' },
  { name: 'Omelete de Brócolos e Queijo de Cabra', tag: '200 Jantares Leves', mins: '12 min', ing: 'brócolos' },
  { name: 'Frango com Limão, Brócolos e Azeite', tag: '200 Almoços', mins: '18 min', ing: 'brócolos' },
  { name: 'Creme de Brócolos e Amêndoas com Curcuma', tag: '100 Receitas Vegan', mins: '20 min', ing: 'brócolos' },
];

function SageBgWrapper({
  children,
  blobPos = 'top-right',
}: {
  children: React.ReactNode;
  blobPos?: 'top-right' | 'top-left' | 'both';
}) {
  return (
    <section className="relative mx-auto w-full max-w-[640px] overflow-hidden bg-[#FFFDF7] px-5 py-10 sm:px-8 sm:py-12">
      {(blobPos === 'top-right' || blobPos === 'both') && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#DCECC8]/55"
        />
      )}
      {(blobPos === 'top-left' || blobPos === 'both') && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#DCECC8]/50"
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function EyebrowBadge({ children }: { children: string }) {
  return (
    <div className="mb-3 flex justify-center">
      <span className="font-display inline-block rounded-full bg-[#3B6034] px-4 py-1.5 text-[11px] font-extrabold tracking-[0.08em] text-white uppercase">
        {children}
      </span>
    </div>
  );
}

function CheckIconCircle() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5C8019] text-white">
      <Check className="h-3.5 w-3.5 stroke-[3]" />
    </span>
  );
}

export function EditorialBannersTop({ onScrollToOffer }: EditorialBannersTopProps) {
  const [appQuery, setAppQuery] = useState('salmão');

  const filteredAppRecipes = SAMPLE_RECIPES.filter(
    (r) =>
      r.ing.toLowerCase().includes(appQuery.trim().toLowerCase()) ||
      r.name.toLowerCase().includes(appQuery.trim().toLowerCase()),
  );

  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* BANNER 01 - HERO */}
      <SageBgWrapper blobPos="both">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="font-display flex h-7 w-7 items-center justify-center rounded-full bg-[#5C8019] text-[12px] font-extrabold text-white">
              RS
            </span>
            <span className="font-display text-[15px] font-bold text-[#1C1C1C]">
              {OFFER.brandName}
            </span>
          </div>

          <h1 className="font-display max-w-[540px] text-[28px] leading-[1.12] font-extrabold tracking-tight text-[#1C1C1C] [text-wrap:balance] sm:text-[36px]">
            Queres comer saudável mas{' '}
            <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
              nunca sabes o que cozinhar?
            </span>
          </h1>

          <p className="mt-4 max-w-[500px] text-[15.5px] leading-relaxed font-medium text-[#1C1C1C] sm:text-[16.5px]">
            <strong>+1000 receitas anti-inflamatórias, sem glúten e sem açúcar adicionado</strong>,
            prontas em 15–20 minutos e com ingredientes do supermercado.
          </p>
          <p className="mt-2 max-w-[480px] text-[13.5px] leading-relaxed text-[#5C6B55]">
            Todas na tua app, com pesquisa por ingrediente. Validadas pela nutricionista{' '}
            {OFFER.nutritionistName}.
          </p>

          {/* Hero Visual: Woman photo + Tablet Mockup side-by-side */}
          <div className="mt-7 grid w-full grid-cols-12 items-center gap-3 sm:gap-5">
            <div className="col-span-5 flex justify-center">
              <div className="aspect-[3/4] w-full max-w-[205px] overflow-hidden rounded-[999px] border-4 border-white shadow-lg">
                <img
                  src={IMAGES.heroWomanKitchen}
                  alt="Mulher a cozinhar de forma saudável na sua cozinha com a app no telemóvel"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-7">
              <TabletCoverMockup compact showBadge />
            </div>
          </div>

          <div className="mt-7 text-center">
            <p className="font-display text-[20px] leading-snug font-extrabold text-[#1C1C1C] sm:text-[23px]">
              Sem dietas. Sem ingredientes raros.
            </p>
            <p className="font-display mt-0.5 text-[21px] font-extrabold text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4 sm:text-[24px]">
              Apenas comida real.
            </p>
          </div>
        </div>
      </SageBgWrapper>

      {/* SECTION: A APP POR DENTRO (Full 1400px showcase) */}
      <section className="w-full border-y border-[#DDE8CB]/70 bg-[#FFFDF7] px-4 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-[1260px]">
          <EyebrowBadge>A APP POR DENTRO</EyebrowBadge>
          <h2 className="font-display mx-auto max-w-[680px] text-center text-[26px] leading-[1.14] font-extrabold text-[#1C1C1C] [text-wrap:balance] sm:text-[36px]">
            Assim se vê o que compras:{' '}
            <span className="text-[#3B6034]">uma app, não um PDF solto</span>
          </h2>
          <p className="mt-2 text-center text-[14px] text-[#5C6B55]">
            Capturas reais da app {OFFER.brandName} · Tudo incluído no plano único de {OFFER.priceDisplay}
          </p>

          {/* 4 Phone Mockups Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone 1: A tua biblioteca */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[260px] rounded-[34px] border-[7px] border-[#1A1A1A] bg-white p-3 shadow-[0_14px_32px_rgba(28,28,28,0.12)]">
                <div className="mx-auto mb-2.5 h-3.5 w-16 rounded-full bg-[#1A1A1A]" />
                <div className="flex items-center justify-between border-b border-[#EEF4E2] pb-2 text-[10px] font-bold text-[#3B6034]">
                  <span>Biblioteca</span>
                  <span>♥ Favoritas</span>
                  <span className="rounded-full bg-[#3B6034] px-2 py-0.5 text-white">App</span>
                </div>
                <p className="font-display mt-2.5 text-[12px] font-extrabold text-[#1C1C1C]">
                  A tua biblioteca
                </p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-[#DDE8CB] bg-[#E3F4D4]/60 p-2 text-center">
                    <div className="font-display text-[13px] font-black text-[#2B4826]">+1000</div>
                    <div className="text-[9px] font-bold text-[#3B6034]">Anti-inflamatórias</div>
                    <span className="mt-1 inline-block rounded bg-[#5C8019] px-1.5 py-0.5 text-[8px] font-bold text-white">
                      Aberto
                    </span>
                  </div>
                  <div className="rounded-xl border border-[#DDE8CB] bg-[#FFF6DC] p-2 text-center">
                    <div className="font-display text-[13px] font-black text-[#2B4826]">30</div>
                    <div className="text-[9px] font-bold text-[#3B6034]">Natal sem açúcar</div>
                    <span className="mt-1 inline-block rounded bg-[#3B6034] px-1.5 py-0.5 text-[8px] font-bold text-white">
                      Oferta
                    </span>
                  </div>
                  <div className="rounded-xl border border-[#DDE8CB] bg-[#F6FAEF] p-2 text-center">
                    <div className="font-display text-[12px] font-black text-[#2B4826]">200</div>
                    <div className="text-[9px] font-semibold text-[#4A5244]">Almoços rápidos</div>
                  </div>
                  <div className="rounded-xl border border-[#DDE8CB] bg-[#F6FAEF] p-2 text-center">
                    <div className="font-display text-[12px] font-black text-[#2B4826]">200</div>
                    <div className="text-[9px] font-semibold text-[#4A5244]">Jantares leves</div>
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-[#F6FAEF] p-2 text-[9.5px] text-[#4A5244]">
                  Novas receitas adicionadas todos os meses automaticamente.
                </div>
              </div>
              <h3 className="font-display mt-3.5 text-[15px] font-extrabold text-[#2B4826]">
                A tua biblioteca
              </h3>
              <p className="mt-0.5 max-w-[240px] text-center text-[12.5px] text-[#5C6B55]">
                Todos os teus livros no telemóvel, tablet ou computador
              </p>
            </div>

            {/* Phone 2: Pesquisa por ingrediente (Interactive!) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[260px] rounded-[34px] border-[7px] border-[#1A1A1A] bg-white p-3 shadow-[0_14px_32px_rgba(28,28,28,0.12)]">
                <div className="mx-auto mb-2.5 h-3.5 w-16 rounded-full bg-[#1A1A1A]" />
                <p className="font-display text-[11px] font-extrabold text-[#1C1C1C]">
                  Livro Anti-inflamatório +1000
                </p>
                <p className="mt-0.5 text-[9.5px] text-[#5C6B55]">
                  Apetece-te cozinhar algo hoje? Experimenta escrever:
                </p>
                <div className="mt-2 flex items-center gap-1.5 rounded-full border border-[#5C8019] bg-[#F8FBF2] px-2.5 py-1.5">
                  <Search className="h-3 w-3 shrink-0 text-[#5C8019]" />
                  <input
                    type="text"
                    value={appQuery}
                    onChange={(e) => setAppQuery(e.target.value)}
                    aria-label="Pesquisar ingrediente na demonstração da app"
                    placeholder="salmão ou brócolos..."
                    className="w-full bg-transparent text-[11px] font-semibold text-[#1C1C1C] outline-none"
                  />
                </div>
                <div className="mt-1.5 flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setAppQuery('salmão')}
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold transition-colors ${
                      appQuery === 'salmão'
                        ? 'bg-[#3B6034] text-white'
                        : 'bg-[#EEF4E2] text-[#3B6034]'
                    }`}
                  >
                    salmão
                  </button>
                  <button
                    type="button"
                    onClick={() => setAppQuery('brócolos')}
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold transition-colors ${
                      appQuery === 'brócolos'
                        ? 'bg-[#3B6034] text-white'
                        : 'bg-[#EEF4E2] text-[#3B6034]'
                    }`}
                  >
                    brócolos
                  </button>
                </div>
                <div className="mt-2 space-y-1.5">
                  {(filteredAppRecipes.length > 0 ? filteredAppRecipes : SAMPLE_RECIPES.slice(0, 3))
                    .slice(0, 3)
                    .map((r) => (
                      <div
                        key={r.name}
                        className="rounded-lg border border-[#DDE8CB] bg-[#FFFDF7] px-2 py-1.5"
                      >
                        <div className="truncate text-[10px] font-bold text-[#1C1C1C]">{r.name}</div>
                        <div className="text-[8.5px] text-[#5C8019]">
                          {r.tag} · {r.mins}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <h3 className="font-display mt-3.5 text-[15px] font-extrabold text-[#2B4826]">
                Pesquisa por ingrediente
              </h3>
              <p className="mt-0.5 max-w-[240px] text-center text-[12.5px] text-[#5C6B55]">
                Escreves «salmão» e aparecem-te dezenas de receitas prontas
              </p>
            </div>

            {/* Phone 3: Cada receita, passo a passo */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[260px] rounded-[34px] border-[7px] border-[#1A1A1A] bg-white p-3 shadow-[0_14px_32px_rgba(28,28,28,0.12)]">
                <div className="mx-auto mb-2.5 h-3.5 w-16 rounded-full bg-[#1A1A1A]" />
                <div className="rounded-lg bg-[#2B4826] px-2.5 py-1.5 text-[9.5px] font-bold text-white">
                  Bifes de Frango c/ Brócolos e Ervas
                </div>
                <div className="mt-2 flex gap-2">
                  <img
                    src={IMAGES.foodMealsLunchDinner}
                    alt="Exemplo de prato na app"
                    referrerPolicy="no-referrer"
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="text-[8.5px] leading-snug text-[#4A5244]">
                    <p className="font-bold text-[#1C1C1C]">Ingredientes:</p>
                    <p>• 2 peitos de frango</p>
                    <p>• 150 g batata-doce</p>
                    <p>• Espinafres e quinoa</p>
                  </div>
                </div>
                <div className="mt-2 rounded-lg border border-[#DDE8CB] bg-[#F8FBF2] p-2 text-[8.5px] leading-relaxed text-[#1C1C1C]">
                  <p className="font-bold text-[#3B6034]">Preparação (15 min):</p>
                  <p>1. Tempera com azeite virgem extra, limão e ervas aromáticas.</p>
                  <p>2. Grelha 4 min de cada lado e serve com a quinoa morna.</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-[8.5px] font-bold text-[#5C8019]">
                  <span>✓ Sem glúten</span>
                  <span>✓ Sem açúcar</span>
                </div>
              </div>
              <h3 className="font-display mt-3.5 text-[15px] font-extrabold text-[#2B4826]">
                Cada receita, passo a passo
              </h3>
              <p className="mt-0.5 max-w-[240px] text-center text-[12.5px] text-[#5C6B55]">
                Ingredientes, passos e valores nutricionais, com fotografia
              </p>
            </div>

            {/* Phone 4: Favoritas e imprimir */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[260px] rounded-[34px] border-[7px] border-[#1A1A1A] bg-white p-3 shadow-[0_14px_32px_rgba(28,28,28,0.12)]">
                <div className="mx-auto mb-2.5 h-3.5 w-16 rounded-full bg-[#1A1A1A]" />
                <div className="flex items-center justify-between">
                  <p className="font-display text-[11px] font-extrabold text-[#1C1C1C]">
                    As minhas favoritas
                  </p>
                  <span className="flex items-center gap-1 rounded bg-[#EEF4E2] px-1.5 py-0.5 text-[8.5px] font-bold text-[#3B6034]">
                    <Printer className="h-2.5 w-2.5" /> PDF
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[
                    { title: 'Pastéis de Curgette', img: IMAGES.foodViralZucchini },
                    { title: 'Mousse de Cacau e Bagas', img: IMAGES.foodDessertsSnacks },
                    { title: 'Frango e Batata-doce', img: IMAGES.foodMealsLunchDinner },
                    { title: 'Creme de Abóbora', img: IMAGES.foodBowlsCover },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="relative overflow-hidden rounded-lg border border-[#DDE8CB] bg-[#FFFDF7] p-1"
                    >
                      <img
                        src={card.img}
                        alt={card.title}
                        referrerPolicy="no-referrer"
                        className="h-14 w-full rounded object-cover"
                      />
                      <Heart className="absolute top-2 right-2 h-3 w-3 fill-[#D93A2B] text-[#D93A2B]" />
                      <p className="mt-1 truncate text-[8.5px] font-bold text-[#1C1C1C]">
                        {card.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-display mt-3.5 text-[15px] font-extrabold text-[#2B4826]">
                Favoritas e imprimir
              </h3>
              <p className="mt-0.5 max-w-[240px] text-center text-[12.5px] text-[#5C6B55]">
                Guarda as que mais gostas e imprime as que quiseres
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onScrollToOffer}
              className="font-display cursor-pointer rounded-full bg-[#3B6034] px-9 py-4 text-[17px] font-extrabold tracking-[0.01em] text-white shadow-[0_6px_18px_rgba(59,96,52,0.28)] transition hover:bg-[#2F4F2A] focus-visible:outline-3 focus-visible:outline-[#F6C744]"
            >
              Quero · ver o preço ({OFFER.priceDisplay})
            </button>
          </div>
        </div>
      </section>

      {/* BANNER 02 - DENTRO DO LIVRO */}
      <SageBgWrapper blobPos="top-right">
        <EyebrowBadge>DENTRO DO LIVRO DE RECEITAS</EyebrowBadge>
        <h2 className="font-display text-center text-[28px] leading-tight font-extrabold text-[#1C1C1C] sm:text-[32px]">
          O que vais encontrar?
        </h2>

        <div className="mt-7 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-5">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
                <img
                  src={IMAGES.foodMealsLunchDinner}
                  alt="Prato equilibrado de almoço anti-inflamatório"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-7">
              <div className="font-display text-[36px] leading-none font-black text-[#3B6034] tabular-nums">
                200
              </div>
              <div className="font-display mt-0.5 text-[15px] font-extrabold tracking-wide text-[#1C1C1C] uppercase">
                ALMOÇOS
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#4A5244]">
                Pratos que <strong>saciam de verdade</strong>: carnes, peixes, leguminosas e legumes
                com ingredientes do supermercado de sempre.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-7 text-left">
              <div className="font-display text-[36px] leading-none font-black text-[#3B6034] tabular-nums">
                200
              </div>
              <div className="font-display mt-0.5 text-[15px] font-extrabold tracking-wide text-[#1C1C1C] uppercase">
                JANTARES LEVES
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#4A5244]">
                Para terminar o dia <strong>sem sensação de peso</strong> e sem passar uma hora na
                cozinha.
              </p>
            </div>
            <div className="col-span-5">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
                <img
                  src={IMAGES.foodViralZucchini}
                  alt="Jantar leve anti-inflamatório"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-5">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
                <img
                  src={IMAGES.foodDessertsSnacks}
                  alt="Pequenos-almoços e lanches saudáveis"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-7">
              <div className="font-display text-[36px] leading-none font-black text-[#3B6034] tabular-nums">
                135
              </div>
              <div className="font-display mt-0.5 text-[15px] font-extrabold tracking-wide text-[#1C1C1C] uppercase">
                PEQUENOS-ALMOÇOS E LANCHES
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#4A5244]">
                Para começar o dia com energia, <strong>sem pastelaria industrial nem açúcar</strong>.
              </p>
            </div>
          </div>
        </div>
      </SageBgWrapper>

      {/* BANNER 03 - RECEITAS VIRAIS & TODAS AS CATEGORIAS */}
      <SageBgWrapper blobPos="both">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-5">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
              <img
                src={IMAGES.foodViralZucchini}
                alt="Pastéis saudáveis virais dos nossos vídeos"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-7">
            <h3 className="font-display text-[28px] leading-[1.05] font-black text-[#3B6034]">
              Receitas virais
            </h3>
            <div className="font-display mt-1 text-[13px] font-extrabold tracking-wide text-[#1C1C1C] uppercase">
              AS DOS NOSSOS VÍDEOS
            </div>
            <p className="mt-1.5 text-[13.5px] leading-snug text-[#4A5244]">
              Aquela receita que viste nas redes, finalmente escrita passo a passo.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 items-center gap-4">
          <div className="col-span-7 text-center sm:text-left">
            <div className="font-display text-[36px] leading-none font-black text-[#3B6034] tabular-nums">
              50
            </div>
            <div className="font-display mt-0.5 text-[14px] font-extrabold tracking-wide text-[#1C1C1C] uppercase">
              PARA A MENOPAUSA
            </div>
            <p className="mt-1.5 text-[13.5px] leading-snug text-[#4A5244]">
              Pensadas para esta fase e revistas pela nutricionista {OFFER.nutritionistName}.
            </p>
          </div>
          <div className="col-span-5">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
              <img
                src={IMAGES.foodMealsLunchDinner}
                alt="Receitas pensadas para a menopausa"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="font-display mt-7 text-center text-[17px] font-extrabold text-[#1C1C1C]">
          ...e ainda:
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {EXTRA_CATEGORIES.map((cat) => (
            <span
              key={cat.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#DDE8CB] bg-white px-3.5 py-1.5 text-[12.5px] font-bold text-[#1C1C1C] shadow-xs"
            >
              <span aria-hidden="true">{cat.icon}</span>
              <span>{cat.label}</span>
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-[#5C8019] px-5 py-5 text-center text-white shadow-md">
          <div className="font-display text-[24px] font-black tracking-tight sm:text-[27px]">
            = +1000 receitas anti-inflamatórias
          </div>
          <p className="mt-1 text-[13px] font-medium text-[#EEF4E2]">
            Todas sem glúten e sem açúcar adicionado · E todos os meses, novas grátis
          </p>
        </div>
      </SageBgWrapper>

      {/* BANNER 04 - SEM ABDICAR DE NADA */}
      <SageBgWrapper blobPos="top-left">
        <EyebrowBadge>SEM ABDICAR DE NADA</EyebrowBadge>
        <h2 className="font-display text-center text-[25px] leading-[1.15] font-extrabold text-[#1C1C1C] [text-wrap:balance] sm:text-[30px]">
          Sobremesas? Petiscos? Jantares com sabor?{' '}
          <span className="text-[#3B6034]">Sim — sem glúten nem açúcar.</span>
        </h2>
        <p className="mt-2.5 text-center text-[14px] text-[#4A5244]">
          Comer anti-inflamatório não é comer sem graça nem passar fome. É comer bem com receitas que{' '}
          <strong>realmente te fazem sentir bem</strong>.
        </p>

        <div className="relative mt-6 overflow-hidden rounded-3xl border-4 border-white shadow-lg">
          <img
            src={IMAGES.foodDessertsSnacks}
            alt="Sobremesas sem açúcar e petiscos saudáveis anti-inflamatórios"
            referrerPolicy="no-referrer"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-extrabold text-[#1C1C1C] shadow">
            Doce sem açúcar 🍓
          </div>
          <div className="absolute right-3 bottom-3 rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-extrabold text-[#1C1C1C] shadow">
            Petisco que não inflama 🥕
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {[
            <>
              Sobremesas e batidos <strong>sem açúcar adicionado</strong> para o desejo de doce
            </>,
            <>
              Snacks e petiscos <strong>sem ultraprocessados</strong>
            </>,
            <>
              Pratos <strong>para toda a família</strong>, também para os mais pequenos
            </>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-[#1C1C1C]">
              <CheckIconCircle />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SageBgWrapper>

      {/* BANNER 05 - IDENTIFICAS-TE? */}
      <SageBgWrapper blobPos="top-right">
        <EyebrowBadge>IDENTIFICAS-TE?</EyebrowBadge>
        <h2 className="font-display text-center text-[25px] leading-[1.15] font-extrabold text-[#1C1C1C] [text-wrap:balance] sm:text-[30px]">
          Querer comer saudável não chega se todos os dias{' '}
          <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
            acabas a improvisar
          </span>
        </h2>

        <div className="mt-6 rounded-2xl border border-[#DDE8CB] bg-white p-5 shadow-[0_6px_22px_rgba(28,28,28,0.06)]">
          <ul className="space-y-3.5">
            {[
              <>
                Ficas <strong>inchada depois de comer</strong> e não sabes o que mudar
              </>,
              <>
                Comes <strong>sempre o mesmo</strong> por falta de ideias
              </>,
              <>
                Queres tirar o <strong>glúten e o açúcar</strong> sem comer comida aborrecida
              </>,
              <>
                Abres o frigorífico, <strong>não sabes o que fazer</strong> e acabas por comer qualquer
                coisa
              </>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14.5px] leading-snug text-[#1C1C1C]">
                <CheckIconCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 grid grid-cols-12 items-center gap-4">
          <div className="col-span-5">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
              <img
                src={IMAGES.heroWomanKitchen}
                alt="Organização alimentar prática em casa"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-7">
            <p className="font-display text-[19px] leading-snug font-extrabold text-[#1C1C1C]">
              O problema não é a tua força de vontade:{' '}
              <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-2 underline-offset-2">
                é não teres as receitas à mão.
              </span>
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#4A5244]">
              Este livro de receitas dá-te a alternativa pronta: comida saborosa, rápida e{' '}
              <strong>sem glúten nem açúcar adicionado</strong>, para cada momento do dia.
            </p>
          </div>
        </div>
      </SageBgWrapper>

      {/* BANNER 06 - ASSIM TÃO FÁCIL */}
      <SageBgWrapper blobPos="both">
        <EyebrowBadge>ASSIM TÃO FÁCIL</EyebrowBadge>
        <h2 className="font-display text-center text-[26px] leading-[1.14] font-extrabold text-[#1C1C1C] sm:text-[31px]">
          Hoje compras,
          <br />
          <span className="text-[#3B6034]">hoje jantas diferente</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 items-center gap-5 sm:grid-cols-12">
          {/* Mini Phone Mockup */}
          <div className="mx-auto w-full max-w-[230px] rounded-[28px] border-[6px] border-[#1A1A1A] bg-white p-3 shadow-xl sm:col-span-5">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#3B6034]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5C8019] text-[8px] text-white">
                RS
              </span>
              Os meus livros
            </div>
            <p className="font-display mt-2 text-[11px] font-extrabold text-[#1C1C1C]">
              Apetece-te comer algo hoje?
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-full border border-[#5C8019] px-2.5 py-1 text-[10.5px] text-[#4A5244]">
              <Search className="h-3 w-3 text-[#5C8019]" />
              <span>brócolos</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {[
                'Omelete de Brócolos e Queijo de Cabra',
                'Frango com Limão, Brócolos e Azeite',
                'Creme de Brócolos e Amêndoas',
                'Sopa de Brócolos e Abacate',
                'Salteado de Tofu, Brócolos e Gengibre',
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-lg border border-[#DDE8CB] bg-[#F8FBF2] px-2 py-1 text-[9px] font-bold text-[#1C1C1C]"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 3 Numbered Steps */}
          <div className="space-y-3 sm:col-span-7">
            {[
              {
                n: '1',
                title: 'Compra segura em 1 minuto',
                desc: `Plano único de ${OFFER.priceDisplay} por cartão, MB WAY, Multibanco, PayPal, Apple Pay ou Google Pay.`,
              },
              {
                n: '2',
                title: 'Entra na tua app no instante',
                desc: 'Recebes um email com o teu acesso. Telemóvel, tablet ou computador, sem complicações.',
              },
              {
                n: '3',
                title: 'Escreve o que tens no frigorífico',
                desc: 'Brócolos e dois ovos? Pesquisa e aparecem logo as receitas. E, se quiseres, também em PDF.',
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex items-start gap-3 rounded-2xl border border-[#DDE8CB] bg-white p-3.5 shadow-xs"
              >
                <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3B6034] text-[13px] font-extrabold text-white">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-[14.5px] font-extrabold text-[#1C1C1C]">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-[#4A5244]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pill Highlights */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DDE8CB] bg-white px-4 py-1.5 text-[13px] font-bold text-[#1C1C1C] shadow-xs">
            <InfinityIcon className="h-4 w-4 text-[#5C8019]" />
            <span>Acesso vitalício</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DDE8CB] bg-white px-4 py-1.5 text-[13px] font-bold text-[#1C1C1C] shadow-xs">
            <RefreshCw className="h-4 w-4 text-[#5C8019]" />
            <span>Receitas novas todos os meses GRÁTIS</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DDE8CB] bg-white px-4 py-1.5 text-[13px] font-bold text-[#1C1C1C] shadow-xs">
            <Lock className="h-4 w-4 text-[#5C8019]" />
            <span>Pagamento único de {OFFER.priceDisplay} · sem subscrição</span>
          </div>
        </div>
      </SageBgWrapper>

      {/* BANNER 07 - APOIO PROFISSIONAL: NUTRICIONISTA CATARINA */}
      <SageBgWrapper blobPos="top-right">
        <EyebrowBadge>APOIO PROFISSIONAL</EyebrowBadge>
        <h2 className="font-display text-center text-[25px] leading-[1.15] font-extrabold text-[#1C1C1C] [text-wrap:balance] sm:text-[30px]">
          Cada receita, revista por{' '}
          <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
            uma nutricionista inscrita na Ordem
          </span>
        </h2>

        <div className="mt-6 grid grid-cols-12 items-center gap-4">
          <div className="relative col-span-6 sm:col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white shadow-md">
              <img
                src={IMAGES.nutritionistCatarina}
                alt={`Nutricionista ${OFFER.nutritionistName} — Cédula Profissional`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="font-display absolute -right-2 -bottom-3 flex h-[68px] w-[68px] flex-col items-center justify-center rounded-full border-[3px] border-white bg-[#3B6034] text-center text-white shadow-md">
              <Check className="h-4 w-4 stroke-[3]" />
              <span className="text-[8.5px] leading-tight font-bold">
                Revisto
                <br />e validado
              </span>
            </div>
          </div>

          <div className="col-span-6 pl-1 sm:col-span-7">
            <h3 className="font-display text-[26px] font-black text-[#1C1C1C] sm:text-[30px]">
              {OFFER.nutritionistName}
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-[#4A5244]">
              {OFFER.nutritionistFullTitle}
            </p>
            <span className="mt-2.5 inline-block rounded-full bg-[#DCECC8] px-3.5 py-1 text-[12px] font-bold text-[#2B4826]">
              {OFFER.nutritionistHandle}
            </span>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-[#DDE8CB] bg-white p-5 shadow-xs">
          <ul className="space-y-3">
            {[
              <>
                As <strong>+1000 receitas revistas e validadas</strong> uma a uma pela{' '}
                {OFFER.nutritionistName}
              </>,
              <>
                As <strong>receitas novas de cada mês</strong> passam por ela antes de serem publicadas
              </>,
              <>
                Abordagem integrativa: <strong>digestão, energia e hormonas</strong>
              </>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-[#1C1C1C]">
                <CheckIconCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-5 text-center text-[13.5px] italic leading-relaxed text-[#3B6034]">
          «Alimentar-se bem não deveria ser complicado: deveria ser uma ferramenta para te sentires
          melhor.»
        </blockquote>
      </SageBgWrapper>

      {/* BANNER 08 - A TUA NOVA NORMALIDADE */}
      <SageBgWrapper blobPos="top-left">
        <EyebrowBadge>A TUA NOVA NORMALIDADE</EyebrowBadge>
        <h2 className="font-display text-center text-[25px] leading-[1.15] font-extrabold text-[#1C1C1C] [text-wrap:balance] sm:text-[30px]">
          Assim se sente ter{' '}
          <span className="text-[#3B6034] underline decoration-[#5C8019] decoration-[3px] underline-offset-4">
            a alimentação resolvida
          </span>
        </h2>

        <div className="mt-6 grid grid-cols-12 items-center gap-4">
          <div className="col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-[999px] border-4 border-white shadow-md">
              <img
                src={IMAGES.lifestyleWomanEating}
                alt="Cliente feliz a desfrutar de refeição anti-inflamatória"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-7">
            <ul className="space-y-3.5">
              {[
                <>
                  <strong>Sabes o que comer</strong> todos os dias sem pensar demasiado
                </>,
                <>
                  <strong>Digestões mais leves</strong>, sem o peso dos ultraprocessados
                </>,
                <>
                  <strong>Energia estável</strong> após as refeições, sem quebras
                </>,
                <>
                  <strong>Comes variado</strong> e ninguém em casa sente falta de nada
                </>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#1C1C1C]">
                  <CheckIconCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#DCECC8]/70 px-5 py-4 text-center">
          <p className="text-[13.5px] leading-relaxed font-medium italic text-[#1C1C1C]">
            «Quase todos os dias faço uma das muitíssimas receitas… Além disso sinto-me menos inchada :-)»
          </p>
          <p className="mt-1.5 text-[12px] font-bold text-[#3B6034]">
            — Sofia G., cliente do livro de receitas
          </p>
        </div>
        <p className="mt-2.5 text-center text-[10.5px] text-[#7D8A70]">
          Cada corpo é diferente: os resultados e sensações variam de pessoa para pessoa.
        </p>
      </SageBgWrapper>
    </div>
  );
}
