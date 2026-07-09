import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, MessageSquare, ShieldCheck, X, ShoppingBag } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

export default function ProductCard({ product, categoryTitle, isOthers = false, othersList = [] }) {
  const [showOthersModal, setShowOthersModal] = useState(false);

  const handleWhatsAppInquiry = (productName) => {
    const text = encodeURIComponent(`Hello Laxmi Super Market, I am inquiring about "${productName}" from the "${categoryTitle}" category. Is it available in stock?`);
    window.open(`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${text}`, '_blank');
  };

  if (isOthers) {
    return (
      <>
        {/* Understated "Others" Catalog Card */}
        <div
          onClick={() => setShowOthersModal(true)}
          className="bg-brand-bg border border-brand-border rounded-xl p-5 flex flex-col justify-between h-[360px] cursor-pointer text-center select-none hover:border-brand-green transition-all duration-300"
        >
          <div className="my-auto space-y-4">
            <div className="w-11 h-11 rounded-full bg-brand-green/5 flex items-center justify-center mx-auto border border-brand-border">
              <ShoppingBag size={18} className="text-brand-green" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm text-brand-text uppercase tracking-wider">Many More Brands</h3>
              <p className="text-[11px] text-brand-text-muted px-4 line-clamp-3 leading-relaxed">
                {othersList.slice(0, 5).join(', ')} & many more available.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-3 border-t border-brand-border">
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-brand-green">
              View All Brands <ArrowRight size={11} className="ml-1" />
            </span>
          </div>
        </div>

        {/* Modal display for Others list */}
        <AnimatePresence>
          {showOthersModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowOthersModal(false)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 10 }}
                className="bg-brand-bg rounded-2xl p-6 md:p-8 max-w-md w-full relative z-10 shadow-premium border border-brand-border"
              >
                <button
                  onClick={() => setShowOthersModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-slate-50"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="text-left mb-6">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                    {categoryTitle}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-text uppercase tracking-tight">Remaining Brands</h3>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    We also stock these additional trusted brands in this category:
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1 no-scrollbar mb-6">
                  {othersList.map((brand, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-brand-border rounded-lg px-3 py-2 flex items-center space-x-2 text-xs font-bold text-brand-text"
                    >
                      <ShieldCheck size={14} className="text-brand-green shrink-0" />
                      <span className="truncate">{brand}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      handleWhatsAppInquiry(`Brands from ${categoryTitle}`);
                      setShowOthersModal(false);
                    }}
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Inquiry</span>
                  </button>
                  <button
                    onClick={() => setShowOthersModal(false)}
                    className="w-full bg-white hover:bg-slate-50 border border-brand-border text-brand-text font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Check if this is an Exclusive Line Product
  const isExclusive = product.id && product.id.startsWith('ex-');

  if (isExclusive) {
    return (
      <div 
        className="bg-white border border-brand-border rounded-xl p-5 flex flex-col justify-between h-[420px] relative group hover:shadow-premium hover:-translate-y-[3px] transition-all duration-350"
      >
        {/* Badge Top-Left - Tiny, gold text, no background */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 text-[9px] font-bold uppercase tracking-wider text-brand-gold">
            {product.badge}
          </div>
        )}

        {/* Large Image Area - Product on White */}
        <div className="h-[50%] flex items-center justify-center bg-white rounded-lg p-4 mb-3 overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[140px] w-auto object-contain png-blend-multiply group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Details */}
        <div className="text-left space-y-1.5 flex-grow">
          {/* Sub-label in gold uppercase 10px */}
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

        {/* Action Row */}
        <div className="pt-3.5 border-t border-brand-border flex justify-between items-center mt-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Exclusive</span>
          <button
            onClick={() => handleWhatsAppInquiry(product.name)}
            className="flex items-center justify-center space-x-1.5 border border-brand-green text-brand-green font-bold px-4 py-2 rounded text-xs uppercase tracking-wider h-9 cursor-pointer transition-all hover:bg-brand-green hover:text-white"
          >
            <MessageSquare size={13} />
            <span>Ask Stock</span>
          </button>
        </div>

      </div>
    );
  }

  // Category catalogue sliders card
  return (
    <div 
      className="bg-white border border-brand-border rounded-xl p-4.5 flex flex-col justify-between h-[360px] group relative hover:shadow-premium hover:-translate-y-[3px] transition-all duration-350"
    >
      {/* 70% Product Photography Image Area */}
      <div className="h-[70%] flex items-center justify-center bg-white rounded-lg p-4 overflow-hidden relative border border-slate-50">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="max-h-[160px] w-auto object-contain png-blend-multiply group-hover:scale-102 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Details & Button */}
      <div className="text-left mt-3 space-y-1">
        <div className="flex justify-between items-start">
          <div className="space-y-0.5 max-w-[65%]">
            <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider block">
              {product.brand}
            </span>
            <h4 className="font-bold text-brand-text text-sm line-clamp-1 leading-tight">
              {product.name}
            </h4>
          </div>

          <button
            onClick={() => handleWhatsAppInquiry(`${product.brand} ${product.name}`)}
            className="flex items-center space-x-1 border border-brand-green hover:bg-brand-green hover:text-white text-brand-green px-3 py-1.5 rounded text-[10px] font-bold transition-all uppercase tracking-wider shrink-0 cursor-pointer h-9"
          >
            <MessageSquare size={11} className="shrink-0" />
            <span>Ask Stock</span>
          </button>
        </div>
      </div>

    </div>
  );
}
