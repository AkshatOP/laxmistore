import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section id="gallery" className="py-24 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header - Timeless Editorial */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
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

        {/* Masonry Grid Layout: 4 columns desktop, 3 tablet, 2 mobile */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {storeConfig.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid bg-white border border-brand-border rounded-[10px] overflow-hidden shadow-soft group cursor-pointer relative"
            >
              {/* Image box with Waitrose styling */}
              <div className="overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Visual hover overlay: store name + magnifier icon */}
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest block mb-2 drop-shadow-sm">
                    {storeConfig.storeName}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-green shadow-soft border border-brand-border">
                    <ZoomIn size={14} />
                  </div>
                </div>
              </div>
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
