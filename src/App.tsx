import { useState } from 'react';
import { AppAccessAndFooter } from './components/AppAccessAndFooter';
import { CartDrawer } from './components/CartDrawer';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { EditorialBannersTop } from './components/EditorialBannersTop';
import { FaqAndBottomBanners } from './components/FaqAndBottomBanners';
import { ProductOfferSection } from './components/ProductOfferSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { TopMarquee } from './components/TopMarquee';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [hasItem, setHasItem] = useState(true);
  const [appModalOpen, setAppModalOpen] = useState(false);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta-recetario');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFDF7] text-[#1C1C1C]">
      <main>
        <TopMarquee />
        <EditorialBannersTop onScrollToOffer={scrollToOffer} />
        <ProductOfferSection
          onAddToCart={() => setCartOpen(true)}
          onOpenAppModal={() => setAppModalOpen(true)}
        />
        <FaqAndBottomBanners onScrollToOffer={scrollToOffer} />
        <CustomerReviewsSection />
      </main>

      <AppAccessAndFooter
        appModalOpen={appModalOpen}
        onOpenAppModal={() => setAppModalOpen(true)}
        onCloseAppModal={() => setAppModalOpen(false)}
      />

      <StickyMobileBar />

      <CartDrawer
        isOpen={cartOpen}
        hasItem={hasItem}
        onClose={() => setCartOpen(false)}
        onRemoveItem={() => setHasItem(false)}
        onRestoreItem={() => setHasItem(true)}
      />
    </div>
  );
}
