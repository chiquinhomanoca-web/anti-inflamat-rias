import { ArrowRight, Check, Mail, Smartphone, X } from 'lucide-react';
import { useState } from 'react';
import { OFFER } from '../data/ptContent';

interface AppAccessAndFooterProps {
  appModalOpen: boolean;
  onOpenAppModal: () => void;
  onCloseAppModal: () => void;
}

const LEGAL_TOPICS: Record<string, { title: string; body: string }> = {
  privacidade: {
    title: 'Política de Privacidade',
    body: 'Os teus dados pessoais (nome e endereço de email) são utilizados exclusivamente para processar a tua encomenda, enviar o acesso vitalício à app Receitas Saudáveis de Hoje e comunicar atualizações mensais de receitas. Nunca partilhamos ou vendemos os teus dados a terceiros.',
  },
  reembolso: {
    title: 'Política de Reembolso',
    body: 'Tens 14 dias de calendário para solicitar a devolução integral dos 9,90 €, desde que ainda não tenhas descarregado o ficheiro PDF completo para utilização offline. Para pedir o reembolso, envia email para suporte@receitassaudaveisdehoje.com com o número da tua encomenda.',
  },
  termos: {
    title: 'Termos de Serviço',
    body: 'O acesso à app Receitas Saudáveis de Hoje é pessoal, intransmissível e vitalício após pagamento único de 9,90 €. As receitas têm caráter informativo e nutricional, revistas pela nutricionista Catarina, não substituindo diagnóstico ou acompanhamento médico individual.',
  },
  aviso: {
    title: 'Aviso Legal',
    body: 'Receitas Saudáveis de Hoje · Apoio ao cliente em Portugal e Europa através de suporte@receitassaudaveisdehoje.com. Todos os conteúdos digitais estão protegidos por direitos de autor.',
  },
  cookies: {
    title: 'Preferências de Cookies',
    body: 'Utilizamos apenas cookies essenciais para guardar o estado do teu carrinho e garantir uma navegação rápida e segura. Podes gerir as tuas preferências a qualquer momento.',
  },
};

export function AppAccessAndFooter({
  appModalOpen,
  onOpenAppModal,
  onCloseAppModal,
}: AppAccessAndFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSaved, setNewsletterSaved] = useState(false);
  const [appLoginEmail, setAppLoginEmail] = useState('');
  const [appLoginSent, setAppLoginSent] = useState(false);
  const [legalKey, setLegalKey] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail('');
  };

  const handleAppAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appLoginEmail.trim()) return;
    setAppLoginSent(true);
  };

  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* App Access Card (.rsh-appx) */}
      <section className="px-4 py-6 sm:px-6" aria-label="Acesso à aplicação para clientes">
        <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 rounded-[14px] border border-[#DDE8CB] border-t-[5px] border-t-[#5C8019] bg-[#FFFDF7] p-5 text-center shadow-[0_2px_10px_rgba(59,96,52,0.06)] sm:flex-row sm:border-t sm:border-l-[5px] sm:border-l-[#5C8019] sm:text-left">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#E3F4D4] text-[#3B6034]">
            <Smartphone className="h-7 w-7" />
          </div>

          <div className="min-w-0 flex-1">
            <span className="inline-block rounded-full bg-[#3B6034] px-2.5 py-0.5 text-[11px] font-bold tracking-[0.05em] text-white uppercase">
              Já és cliente?
            </span>
            <h3 className="font-display mt-1.5 text-[17px] leading-snug font-extrabold text-[#1C1C1C]">
              Os teus livros esperam por ti na app
            </h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-[#4A5244]">
              Se já adquiriste o nosso livro de receitas, entra na app e acede a tudo no telemóvel,
              tablet ou computador: com pesquisa por ingrediente e novidades todos os meses.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-1.5 sm:w-auto">
            <button
              type="button"
              onClick={onOpenAppModal}
              className="font-display inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#3B6034] px-5 py-3 text-[14.5px] font-extrabold text-white transition hover:bg-[#2F4D2A] sm:w-auto"
            >
              <span>Entrar na app</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-[11.5px] text-[#7D8A70]">Acede com o email da tua compra</span>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter Section */}
      <section className="border-t border-[#DDE8CB] bg-[#3B6034] px-4 py-10 text-white sm:px-8">
        <div className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-[19px] font-extrabold text-white">Contacto</h3>
            <a
              href={`mailto:${OFFER.supportEmail}`}
              className="mt-2 inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#E3F4D4] underline underline-offset-4 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>{OFFER.supportEmail}</span>
            </a>
            <p className="mt-2 text-[13px] text-[#DCECC8]">
              Apoio ao cliente em Português · Resposta rápida para qualquer dúvida com o teu acesso.
            </p>
          </div>

          <div>
            <p className="font-display text-[15px] font-bold text-white">
              Recebe dicas e novidades de receitas anti-inflamatórias
            </p>
            {newsletterSaved ? (
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#2B4826] px-4 py-3 text-[13.5px] font-bold text-[#E3F4D4]">
                <Check className="h-4 w-4 shrink-0" />
                <span>Subscrição confirmada! Obrigado por te juntares a nós.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="O teu email"
                  aria-label="Endereço de email para novidades"
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/70 outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="font-display shrink-0 cursor-pointer rounded-xl bg-white px-5 py-2.5 text-[14px] font-extrabold text-[#2B4826] transition hover:bg-[#E3F4D4]"
                >
                  Subscrever
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B4826] px-4 py-8 pb-24 text-center text-[#DCECC8] sm:px-8 sm:pb-10">
        <div className="mx-auto max-w-[960px]">
          <div className="flex flex-wrap justify-center gap-1.5" aria-label="Métodos de pagamento">
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
              <span
                key={pm}
                className="rounded border border-white/20 bg-white/10 px-2.5 py-1 text-[10.5px] font-bold text-white"
              >
                {pm}
              </span>
            ))}
          </div>

          <p className="mt-5 text-[12.5px] text-[#DCECC8]">
            &copy; 2026, {OFFER.brandName} · Todos os direitos reservados
          </p>

          <nav
            aria-label="Ligações legais"
            className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px]"
          >
            {[
              { key: 'privacidade', label: 'Política de privacidade' },
              { key: 'reembolso', label: 'Política de reembolso' },
              { key: 'termos', label: 'Termos de serviço' },
              { key: 'aviso', label: 'Aviso legal' },
              { key: 'cookies', label: 'Preferências de cookies' },
            ].map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => setLegalKey(link.key)}
                className="cursor-pointer text-[#DCECC8] underline-offset-4 hover:text-white hover:underline"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </footer>

      {/* App Member Login Modal */}
      {appModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Aceder à app Receitas Saudáveis de Hoje"
          onClick={onCloseAppModal}
        >
          <div
            className="relative w-full max-w-[420px] rounded-2xl bg-[#FFFDF7] p-6 text-[#1C1C1C] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onCloseAppModal}
              aria-label="Fechar janela de acesso"
              className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#EEF4E2] text-[#2B4826]"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="inline-block rounded-full bg-[#3B6034] px-3 py-1 text-[10.5px] font-extrabold tracking-wider text-white uppercase">
              {OFFER.appUrl}
            </span>
            <h3 className="font-display mt-2.5 text-[21px] font-extrabold text-[#1C1C1C]">
              Entrar na tua biblioteca de receitas
            </h3>
            <p className="mt-1 text-[13.5px] text-[#4A5244]">
              Introduz o email utilizado na tua compra para receberes o link de acesso imediato à
              app.
            </p>

            {appLoginSent ? (
              <div className="mt-4 rounded-xl border border-[#5C8019] bg-[#EEF4E2] p-4 text-[13.5px] text-[#2B4826]">
                <strong>Link enviado!</strong> Verifica a caixa de entrada de{' '}
                <span className="underline">{appLoginEmail}</span> para abrir os teus livros de
                receitas.
              </div>
            ) : (
              <form onSubmit={handleAppAccessSubmit} className="mt-4 space-y-3">
                <input
                  type="email"
                  required
                  value={appLoginEmail}
                  onChange={(e) => setAppLoginEmail(e.target.value)}
                  placeholder="exemplo@email.pt"
                  className="w-full rounded-xl border border-[#DDE8CB] bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-[#5C8019]"
                />
                <button
                  type="submit"
                  className="font-display w-full cursor-pointer rounded-full bg-[#3B6034] py-3 text-[15px] font-bold text-white transition hover:bg-[#2B4826]"
                >
                  Enviar acesso à app
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Legal Policy Modal */}
      {legalKey && LEGAL_TOPICS[legalKey] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegalKey(null)}
        >
          <div
            className="relative w-full max-w-[460px] rounded-2xl bg-[#FFFDF7] p-6 text-[#1C1C1C] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLegalKey(null)}
              aria-label="Fechar informação legal"
              className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#EEF4E2] text-[#2B4826]"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-display text-[20px] font-extrabold text-[#2B4826]">
              {LEGAL_TOPICS[legalKey].title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#4A5244]">
              {LEGAL_TOPICS[legalKey].body}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
