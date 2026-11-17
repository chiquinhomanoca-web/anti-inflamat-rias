import { Check, MessageSquarePlus, Star, X } from 'lucide-react';
import { useState } from 'react';
import { OFFER, REVIEWS, type ReviewItem } from '../data/ptContent';

export function CustomerReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS);
  const [filterPhotosOnly, setFilterPhotosOnly] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [stars, setStars] = useState(5);

  const visibleReviews = filterPhotosOnly ? reviews.filter((r) => Boolean(r.photo)) : reviews;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;
    const newItem: ReviewItem = {
      id: `user-${Date.now()}`,
      author: authorName.trim(),
      rating: stars,
      date: '16 de novembro de 2026',
      verified: true,
      productTitle: 'Livro de Receitas Anti-inflamatórias +1000 Receitas',
      text: commentText.trim(),
    };
    setReviews((prev) => [newItem, ...prev]);
    setAuthorName('');
    setCommentText('');
    setStars(5);
    setModalOpen(false);
  };

  return (
    <section
      id="avaliacoes"
      className="w-full border-t border-[#DDE8CB] bg-[#FFFDF7] px-4 py-10 sm:px-8"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-[#DDE8CB] pb-5 sm:flex-row sm:items-center">
          <div>
            <h2
              id="reviews-heading"
              className="font-display text-[22px] font-extrabold text-[#1C1C1C]"
            >
              Avaliações de Clientes
            </h2>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[14px] text-[#4A5244]">
              <div className="flex items-center gap-0.5 text-[#EBBF20]" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#EBBF20]" />
                ))}
                <Star className="h-4 w-4 fill-[#EBBF20]/70" />
              </div>
              <span className="font-bold text-[#1C1C1C] tabular-nums">4.7 / 5</span>
              <span>com base em 240 avaliações verificadas</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setFilterPhotosOnly((v) => !v)}
              className={`cursor-pointer rounded-lg border px-3.5 py-2 text-[13px] font-bold transition ${
                filterPhotosOnly
                  ? 'border-[#3B6034] bg-[#3B6034] text-white'
                  : 'border-[#DDE8CB] bg-white text-[#2B4826] hover:border-[#5C8019]'
              }`}
            >
              {filterPhotosOnly ? 'Mostrar todas' : 'Apenas com fotografia'}
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#3B6034] bg-white px-4 py-2 text-[13px] font-bold text-[#3B6034] transition hover:bg-[#EEF4E2]"
            >
              <MessageSquarePlus className="h-4 w-4" />
              <span>Escrever avaliação</span>
            </button>
          </div>
        </div>

        {/* Masonry-like Responsive Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleReviews.map((rev) => (
            <article
              key={rev.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DDE8CB] bg-white shadow-[0_2px_10px_rgba(28,28,28,0.04)]"
            >
              <div>
                {rev.photo && (
                  <img
                    src={rev.photo}
                    alt={`Fotografia da avaliação de ${rev.author}`}
                    referrerPolicy="no-referrer"
                    className="aspect-[4/3] w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-[14.5px] font-extrabold text-[#1C1C1C]">
                      {rev.author}
                    </span>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3B6034]">
                        <Check className="h-3 w-3 stroke-[3]" /> Verificada
                      </span>
                    )}
                  </div>

                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#EBBF20]" aria-label={`${rev.rating} de 5 estrelas`}>
                      {Array.from({ length: rev.rating }).map((_, idx) => (
                        <Star key={idx} className="h-3.5 w-3.5 fill-[#EBBF20]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#7D8A70]">{rev.date}</span>
                  </div>

                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#4A5244]">{rev.text}</p>

                  {rev.reply && (
                    <div className="mt-3 rounded-xl border border-[#DDE8CB] bg-[#F8FBF2] p-3">
                      <div className="text-[11px] font-extrabold text-[#3B6034]">
                        Resposta de {OFFER.brandName} · {rev.reply.date}
                      </div>
                      <p className="mt-1 text-[12px] leading-snug text-[#4A5244]">
                        {rev.reply.text}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-[#EEF4E2] bg-[#FFFDF7] px-4 py-2 text-[11px] font-semibold text-[#5C6B55]">
                {rev.productTitle}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Escrever uma avaliação"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[440px] rounded-2xl bg-[#FFFDF7] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Fechar janela"
              className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#EEF4E2] text-[#2B4826]"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-display text-[20px] font-extrabold text-[#1C1C1C]">
              Partilha a tua opinião
            </h3>
            <p className="mt-1 text-[13px] text-[#5C6B55]">
              Livro de Receitas Anti-inflamatórias +1000 Receitas
            </p>

            <form onSubmit={handleSubmitReview} className="mt-4 space-y-3.5">
              <div>
                <label className="block text-[12.5px] font-bold text-[#1C1C1C]">Classificação</label>
                <div className="mt-1 flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setStars(n)}
                      aria-label={`${n} estrelas`}
                      className="cursor-pointer p-1"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          n <= stars ? 'fill-[#EBBF20] text-[#EBBF20]' : 'text-[#CBD5C0]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="rev-name" className="block text-[12.5px] font-bold text-[#1C1C1C]">
                  O teu nome
                </label>
                <input
                  id="rev-name"
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Ex.: Mariana S."
                  className="mt-1 w-full rounded-xl border border-[#DDE8CB] bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-[#5C8019]"
                />
              </div>

              <div>
                <label htmlFor="rev-text" className="block text-[12.5px] font-bold text-[#1C1C1C]">
                  A tua experiência
                </label>
                <textarea
                  id="rev-text"
                  rows={3}
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Conta-nos o que mais gostaste nas receitas..."
                  className="mt-1 w-full rounded-xl border border-[#DDE8CB] bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-[#5C8019]"
                />
              </div>

              <button
                type="submit"
                className="font-display w-full cursor-pointer rounded-full bg-[#3B6034] py-3 text-[15px] font-bold text-white transition hover:bg-[#2B4826]"
              >
                Publicar avaliação
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
