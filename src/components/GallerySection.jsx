import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

export default function GallerySection() {
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  const openLightbox = (idx) => {
    setActiveImageIdx(idx);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === storeConfig.gallery.length - 1 ? 0 : prev + 1));
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? storeConfig.gallery.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8">
        
        {/* Section Header - Timeless Editorial */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10 space-y-2">
          <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
            INSIDE LAXMI SUPER MARKET
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight uppercase">
            Store Gallery
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
            A visual overview of our structured aisles, clean product sections, and friendly neighborhood environment in Mysore.
          </p>
        </div>

        {/* Uniform Grid Layout: Clean static photos with click-to-enlarge */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {storeConfig.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="bg-white border border-brand-border rounded-[10px] overflow-hidden shadow-soft cursor-pointer relative aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Lightbox container */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-brand-gold p-2 focus:outline-none transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={28} />
              </button>

              {/* Navigation Left Arrow */}
              <button
                onClick={showPrevImage}
                className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center focus:outline-none backdrop-blur-sm transition-colors border border-white/10"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} className="stroke-[2.5]" />
              </button>

              {/* Main Image */}
              <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-0.5 max-h-[65vh]">
                <img
                  src={storeConfig.gallery[activeImageIdx].src}
                  alt={storeConfig.gallery[activeImageIdx].caption}
                  className="max-w-full max-h-[63vh] object-contain"
                />
              </div>

              {/* Caption Text Below Image */}
              <div className="mt-4 text-center text-white px-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {storeConfig.gallery[activeImageIdx].caption}
                </p>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {activeImageIdx + 1} of {storeConfig.gallery.length}
                </span>
              </div>

              {/* Navigation Right Arrow */}
              <button
                onClick={showNextImage}
                className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center focus:outline-none backdrop-blur-sm transition-colors border border-white/10"
                aria-label="Next Image"
              >
                <ChevronRight size={24} className="stroke-[2.5]" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
