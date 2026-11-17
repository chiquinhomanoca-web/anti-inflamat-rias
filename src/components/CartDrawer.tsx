import { ExternalLink, Lock, ShoppingBag, Trash2, X } from 'lucide-react';
import { OFFER } from '../data/ptContent';
import { ChristmasGiftCover } from './ProductOfferSection';

interface CartDrawerProps {
  isOpen: boolean;
  hasItem: boolean;
  onClose: () => void;
  onRemoveItem: () => void;
  onRestoreItem: () => void;
}

export function CartDrawer({
  isOpen,
  hasItem,
  onClose,
  onRemoveItem,
  onRestoreItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-label="O teu carrinho de compras"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-[420px] flex-col justify-between bg-[#FFFDF7] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#DDE8CB] px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#3B6034]" />
            <h2 className="font-display text-[18px] font-extrabold text-[#1C1C1C]">
              O teu carrinho
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar carrinho"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#EEF4E2] text-[#2B4826] hover:bg-[#DDE8CB]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {!hasItem ? (
            <div className="py-16 text-center">
              <p className="font-display text-[17px] font-bold text-[#1C1C1C]">
                O teu carrinho está vazio
              </p>
              <p className="mt-1 text-[13.5px] text-[#5C6B55]">
                Adiciona o plano único de oferta por {OFFER.priceDisplay}.
              </p>
              <button
                type="button"
                onClick={onRestoreItem}
                className="font-display mt-5 cursor-pointer rounded-full bg-[#3B6034] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#2B4826]"
              >
                Adicionar Plano Único ({OFFER.priceDisplay})
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Main Item */}
              <div className="flex items-start gap-3 rounded-2xl border border-[#DDE8CB] bg-white p-3.5">
                <div className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[#D9F0DC] text-center">
                  <span className="font-display text-[13px] font-black text-[#1E472A]">+1000</span>
                  <span className="text-[8px] font-bold text-[#1E472A]">Receitas</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-[14.5px] leading-snug font-extrabold text-[#1C1C1C]">
                      Livro de Receitas Anti-inflamatórias +1000 Receitas
                    </h3>
                    <button
                      type="button"
                      onClick={onRemoveItem}
                      aria-label="Remover produto do carrinho"
                      className="cursor-pointer text-[#8A9184] hover:text-[#D93A2B]"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-0.5 text-[12px] text-[#5C6B55]">
                    Plano único · App + PDF · Validado pela nutricionista {OFFER.nutritionistName}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-display text-[16px] font-extrabold text-[#2B4826] tabular-nums">
                      {OFFER.priceDisplay}
                    </span>
                    <s className="text-[12.5px] text-[#8A9184] tabular-nums">
                      {OFFER.compareAtDisplay}
                    </s>
                  </div>
                </div>
              </div>

              {/* Free Gift Item */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#DDE8CB] bg-[#F8FBF2] p-3">
                <ChristmasGiftCover small />
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded bg-[#E8C35A] px-2 py-0.5 text-[9.5px] font-extrabold text-[#111] uppercase">
                    Oferta Mês Black
                  </span>
                  <p className="font-display mt-1 text-[13px] font-bold text-[#1C1C1C]">
                    30 Sobremesas de Natal sem açúcar
                  </p>
                  <p className="text-[12px] font-extrabold text-[#5C8019]">GRÁTIS (0,00 €)</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#DDE8CB] bg-white p-4 text-[13px] leading-relaxed text-[#4A5244]">
                <p className="font-bold text-[#2B4826]">Acesso imediato após o pagamento:</p>
                <p className="mt-1">
                  Ao clicar abaixo, o checkout seguro de <strong>{OFFER.priceDisplay}</strong> abrirá
                  numa nova página para concluíres a tua compra.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {hasItem && (
          <div className="space-y-2.5 border-t border-[#DDE8CB] bg-white p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-[14px] font-bold text-[#4A5244]">Total</span>
              <span className="font-display text-[22px] font-black text-[#2B4826] tabular-nums">
                {OFFER.priceDisplay} EUR
              </span>
            </div>
            <p className="text-[11.5px] text-[#5C6B55]">
              Impostos incluídos · Pagamento único vitalício · Acesso imediato
            </p>
            <a
              href={OFFER.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display flex w-full items-center justify-center gap-2 rounded-full bg-[#2B4826] py-3.5 text-[15.5px] font-bold text-white shadow-md transition hover:bg-[#1E351A]"
            >
              <Lock className="h-4 w-4" />
              <span>Ir para o checkout — {OFFER.priceDisplay}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
