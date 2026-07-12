import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Grid3X3, ChevronRight } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

export default function ProductCard({ product, categoryTitle, isOthers = false, othersList = [] }) {
  const [showOthersModal, setShowOthersModal] = useState(false);

  const handleWhatsAppInquiry = (productName) => {
    const text = encodeURIComponent(
      `Hello Laxmi Super Market, I am inquiring about "${productName}" from the "${categoryTitle}" category. Is it available in stock?`
    );
    window.open(
      `https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${text}`,
      '_blank'
    );
  };

  // ── "Others" card ─────────────────────────────────────────────────────────
  if (isOthers) {
    const items = (othersList || []).filter(
      n => n && n !== 'Other' && n !== 'Other ___________'
    );
    if (items.length === 0) return null;

    const preview = items.slice(0, 4);
    const extra   = items.length - preview.length;

    return (
      <>
        {/* ── Trigger Card — matches the height/style of a product card ── */}
        <div
          onClick={() => setShowOthersModal(true)}
          className="cursor-pointer bg-white border border-brand-border rounded-xl p-3 sm:p-4 flex flex-col group relative hover:shadow-premium hover:border-brand-green hover:-translate-y-[3px] transition-all duration-300"
        >
          {/* Mosaic grid preview of product names */}
          <div className="w-full h-40 sm:h-44 bg-gradient-to-br from-brand-green/8 via-slate-50 to-brand-gold/8 rounded-xl overflow-hidden mb-3 border border-slate-100 relative flex items-center justify-center">
            {/* Grid of name chips */}
            <div className="grid grid-cols-2 gap-1.5 p-3 w-full">
              {preview.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm border border-white rounded-lg px-2 py-1.5 text-center"
                >
                  <span className="text-[10px] sm:text-[11px] font-semibold text-brand-text leading-tight line-clamp-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* "+" badge top-right */}
            {extra > 0 && (
              <div className="absolute top-2 right-2 bg-brand-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                +{extra} more
              </div>
            )}

            {/* Grid icon overlay */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-brand-green/10 rounded-full flex items-center justify-center">
              <Grid3X3 size={12} className="text-brand-green" />
            </div>
          </div>

          {/* Footer text */}
          <div className="space-y-2">
            <h4 className="font-bold text-brand-text text-sm sm:text-[15px] leading-snug">
              {items.length} More Products
            </h4>

            <button className="w-full flex items-center justify-center space-x-1.5 bg-brand-green text-white px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider group-hover:bg-brand-green-dark transition-colors">
              <span>View All</span>
              <ChevronRight size={12} className="shrink-0" />
            </button>
          </div>
        </div>

        {/* ── Bottom-sheet / modal popup ─────────────────────────────────── */}
        <AnimatePresence>
          {showOthersModal && (
            <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowOthersModal(false)}
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              />

              {/* Sheet */}
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                className="relative z-10 bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden"
              >
                {/* Drag handle (mobile) */}
                <div className="flex justify-center pt-3 pb-1 sm:hidden">
                  <div className="w-10 h-1 bg-slate-200 rounded-full" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-slate-100">
                  <div>
                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-0.5">
                      {categoryTitle}
                    </p>
                    <h3 className="text-base font-extrabold text-slate-800 leading-tight">
                      Also Available in Store
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{items.length} products • Ask us for availability</p>
                  </div>
                  <button
                    onClick={() => setShowOthersModal(false)}
                    className="p-1.5 rounded-xl text-slate-400 hover:bg-slate-100 transition-colors ml-3 shrink-0"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Product list */}
                <div className="px-5 py-4 max-h-[52vh] overflow-y-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          handleWhatsAppInquiry(item);
                          setShowOthersModal(false);
                        }}
                        className="group/item flex items-center justify-between bg-slate-50 hover:bg-brand-green/5 border border-slate-100 hover:border-brand-green/30 rounded-xl px-3 py-2.5 text-left transition-all duration-150"
                      >
                        <span className="text-[12px] font-semibold text-slate-700 group-hover/item:text-brand-green line-clamp-2 leading-snug">
                          {item}
                        </span>
                        <MessageSquare size={11} className="text-slate-300 group-hover/item:text-brand-green shrink-0 ml-1.5 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/60">
                  <button
                    onClick={() => {
                      handleWhatsAppInquiry(`All products from ${categoryTitle}`);
                      setShowOthersModal(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <MessageSquare size={15} />
                    <span>Enquire All on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // ── Exclusive product card ─────────────────────────────────────────────────
  const isExclusive = product.id && product.id.startsWith('ex-');

  if (isExclusive) {
    return (
      <div className="bg-white border border-brand-border rounded-xl p-4 flex flex-col relative group hover:shadow-premium hover:-translate-y-[3px] transition-all duration-350">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
            {product.badge}
          </div>
        )}

        <div className="w-full h-48 sm:h-52 flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden mb-4 p-3">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="text-left space-y-1.5 flex-grow">
          {product.tagline && (
            <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase block leading-tight">
              {product.tagline}
            </span>
          )}
          <h3 className="font-extrabold text-brand-text text-[15px] sm:text-base leading-tight line-clamp-2">
            {product.name}
          </h3>
          <p className="text-[13px] text-brand-text-muted leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="pt-3 border-t border-brand-border flex justify-between items-center mt-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Exclusive</span>
          <button
            onClick={() => handleWhatsAppInquiry(product.name)}
            className="flex items-center justify-center space-x-1.5 border border-brand-green text-brand-green font-bold px-4 py-2 rounded text-xs uppercase tracking-wider cursor-pointer transition-all hover:bg-brand-green hover:text-white"
          >
            <MessageSquare size={13} />
            <span>Ask Stock</span>
          </button>
        </div>
      </div>
    );
  }

  // ── Regular category slider card ───────────────────────────────────────────
  return (
    <div className="bg-white border border-brand-border rounded-xl p-3 sm:p-4 flex flex-col group relative hover:shadow-premium hover:-translate-y-[3px] transition-all duration-350">
      <div className="w-full h-40 sm:h-44 flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden mb-3 border border-slate-100 p-2.5">
        <img
          src={product.image}
          alt={`${product.name}`}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="text-left space-y-2">
        <h4 className="font-bold text-brand-text text-sm sm:text-[15px] line-clamp-2 leading-snug">
          {product.name}
        </h4>

        <button
          onClick={() => handleWhatsAppInquiry(`${product.name}`)}
          className="w-full flex items-center justify-center space-x-1.5 border border-brand-green hover:bg-brand-green hover:text-white text-brand-green px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all uppercase tracking-wider cursor-pointer"
        >
          <MessageSquare size={12} className="shrink-0" />
          <span>Ask Stock</span>
        </button>
      </div>
    </div>
  );
}
