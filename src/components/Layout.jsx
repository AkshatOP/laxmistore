import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, MessageSquare, Compass, ArrowUp, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { storeConfig } from '../config/storeConfig';

export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollElements, setShowScrollElements] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowScrollElements(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Exclusive Line', href: '#exclusive' },
    { name: 'Catalogue', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 70; // Slim header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const addressString = `${storeConfig.contact.address.number}, ${storeConfig.contact.address.landmark}, ${storeConfig.contact.address.locality}, ${storeConfig.contact.address.city}`;

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-['Plus_Jakarta_Sans']">
      
      {/* 1. TOP BAR */}
      <div className="hidden lg:block bg-brand-green text-[11px] py-2.5 px-8 tracking-wider font-bold text-white/85 uppercase border-b border-brand-green-dark/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Clock size={12} className="mr-2 text-brand-gold" />
              {storeConfig.workingHours.weekdays.openTime} – {storeConfig.workingHours.weekdays.closeTime}
            </span>
            <span className="flex items-center">
              <MapPin size={12} className="mr-2 text-brand-gold" />
              {storeConfig.contact.address.locality}, {storeConfig.contact.address.city}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span>Established {storeConfig.establishedYear}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <a href={`mailto:${storeConfig.contact.email}`} className="hover:text-brand-gold transition-colors">{storeConfig.contact.email}</a>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-b border-brand-border shadow-soft py-3' 
          : 'bg-brand-bg/95 border-b border-transparent py-4.5'
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-3 select-none">
            <div className="w-9 h-9 rounded bg-brand-green flex items-center justify-center text-white font-extrabold text-lg">
              L
            </div>
            <div className="text-left">
              <span className="font-extrabold text-base tracking-tight text-brand-green block leading-tight">{storeConfig.storeName}</span>
              <span className="text-[9px] text-brand-text-muted font-bold uppercase tracking-wider block">Est. {storeConfig.establishedYear}</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-bold text-brand-text-muted hover:text-brand-green text-[10.5px] uppercase tracking-widest transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-250 ease-out" />
              </a>
            ))}
          </nav>

          {/* Desktop Call/WhatsApp CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${storeConfig.contact.phone1}`}
              className="flex items-center space-x-1.5 border border-brand-green hover:bg-brand-green/5 text-brand-green px-4 py-2 rounded text-xs font-bold transition-all uppercase tracking-wider"
            >
              <Phone size={13} />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2 rounded text-xs font-bold transition-all uppercase tracking-wider"
            >
              <MessageSquare size={13} />
              <span>WhatsApp List</span>
            </a>
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="lg:hidden flex items-center space-x-1">
            <a
              href={`tel:${storeConfig.contact.phone1}`}
              className="p-2 rounded-lg text-brand-green hover:bg-brand-bg-alt transition-colors"
              aria-label="Call Store"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="p-2 rounded-lg text-brand-text hover:bg-brand-bg-alt focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isDrawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide In) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
            />
            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-white p-6 flex flex-col justify-between lg:hidden border-l border-brand-border"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-extrabold text-brand-green text-base">{storeConfig.storeName}</span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-50"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-bold text-brand-text-muted hover:text-brand-green text-xs uppercase tracking-widest py-2 border-b border-slate-50 block"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100 mb-12">
                <div className="text-xs text-brand-text-muted flex items-start space-x-2">
                  <Clock size={13} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>Timings: {storeConfig.workingHours.weekdays.openTime} – {storeConfig.workingHours.weekdays.closeTime}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${storeConfig.contact.phone1}`}
                    className="flex items-center justify-center space-x-1 border border-brand-border text-brand-text py-3 rounded text-xs font-bold uppercase tracking-wider"
                  >
                    <Phone size={13} className="text-brand-green" />
                    <span>Call Store</span>
                  </a>
                  <a
                    href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1 bg-brand-green text-white py-3 rounded text-xs font-bold uppercase tracking-wider"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow pb-16 lg:pb-0">
        {children}
      </main>

      {/* 13. FLOATING ELEMENTS */}
      
      {/* Back to top button (bottom-left) */}
      <AnimatePresence>
        {showScrollElements && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-40 bg-brand-gold hover:bg-brand-gold-dark text-white p-3 rounded-full shadow-premium transition-all duration-300 cursor-pointer border border-brand-gold-light/10"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky WhatsApp Chat Button (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3.5">
        
        {/* Sticky ORDER GROCERIES pill button (above WhatsApp) */}
        <AnimatePresence>
          {showScrollElements && (
            <motion.a
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green hover:bg-brand-green-dark text-white py-2.5 px-4 rounded-full shadow-premium text-[11px] font-bold uppercase tracking-widest flex items-center space-x-2 border border-brand-green-light/25 cursor-pointer"
            >
              <MessageSquare size={14} />
              <span>Order Groceries</span>
            </motion.a>
          )}
        </AnimatePresence>

        {/* WhatsApp Round Button with Pulse animation rings */}
        <a
          href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-[#25D366] hover:bg-[#1ebd59] text-white p-3.5 rounded-full shadow-premium flex items-center justify-center transition-all duration-300 cursor-pointer border border-emerald-400/20"
          aria-label="Order via WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10" style={{ animationDuration: '3s' }} />
          
          <MessageSquare size={20} className="shrink-0 fill-current" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] uppercase tracking-wider font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Order via WhatsApp
          </span>
        </a>
      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-border flex items-center justify-around py-2.5 px-4 shadow-lg">
        <a
          href={`tel:${storeConfig.contact.phone1}`}
          className="flex flex-col items-center justify-center text-center space-y-0.5 text-brand-text-muted hover:text-brand-green w-1/3"
        >
          <Phone size={16} className="text-brand-green" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Call Store</span>
        </a>
        
        {/* Divider */}
        <div className="w-px h-6 bg-brand-border" />

        <a
          href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-center space-y-0.5 text-brand-text-muted hover:text-brand-green w-1/3"
        >
          <MessageSquare size={16} className="text-emerald-600" />
          <span className="text-[9px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="w-px h-6 bg-brand-border" />

        <a
          href={storeConfig.contact.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-center space-y-0.5 text-brand-text-muted hover:text-brand-green w-1/3"
        >
          <Compass size={16} className="text-brand-gold" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Directions</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-brand-green-darkest text-slate-300 border-t border-brand-green-dark py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Column 1: Store Intro */}
            <div className="space-y-4">
              <span className="font-extrabold text-white text-base tracking-tight block uppercase">{storeConfig.storeName}</span>
              <p className="text-xs leading-relaxed text-slate-400">
                Premium Grocery. Sourcing Purity, Trust, and Fresh Staples for Vijay Nagar Mysore families since {storeConfig.establishedYear}.
              </p>
              <div className="flex space-x-1 pt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <span className="font-bold text-brand-gold text-[10px] uppercase tracking-widest block">Explore</span>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="hover:text-brand-gold transition-colors text-slate-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Timings */}
            <div className="space-y-4">
              <span className="font-bold text-brand-gold text-[10px] uppercase tracking-widest block">Timings</span>
              <div className="space-y-3 text-xs leading-normal text-slate-400">
                <div>
                  <span className="font-bold text-slate-200 block mb-0.5">{storeConfig.workingHours.weekdays.days}</span>
                  <span>{storeConfig.workingHours.weekdays.openTime} – {storeConfig.workingHours.weekdays.closeTime}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-200 block mb-0.5">{storeConfig.workingHours.sunday.days}</span>
                  <span>{storeConfig.workingHours.sunday.openTime} – {storeConfig.workingHours.sunday.closeTime}</span>
                </div>
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-4">
              <span className="font-bold text-brand-gold text-[10px] uppercase tracking-widest block">Store Address</span>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start space-x-2">
                  <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-400">{addressString}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={14} className="text-brand-gold shrink-0" />
                  <a href={`tel:${storeConfig.contact.phone1}`} className="hover:text-brand-gold">{storeConfig.contact.phone1}</a>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageSquare size={14} className="text-brand-gold shrink-0" />
                  <a href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`} className="hover:text-brand-gold">{storeConfig.contact.phone2}</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-emerald-950/60 text-center text-[11px] text-slate-500 font-bold uppercase tracking-wider">
            <p>&copy; 2025 Laxmi Super Market. All rights reserved. | Vijay Nagar, Mysore</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
