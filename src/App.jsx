import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShoppingBag, 
  Star, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Truck,
  Award,
  Check,
  Users,
  Compass
} from 'lucide-react';
import { storeConfig } from './config/storeConfig';
import Layout from './components/Layout';
import ProductCard from './components/ProductCard';
import ProductSlider from './components/ProductSlider';
import GallerySection from './components/GallerySection';
import LazySection from './components/LazySection';

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello Laxmi Super Market, my name is ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`);
    window.open(`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${text}`, '_blank');
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
  };

  // Service card icons mapping
  const getFacilityIcon = (id) => {
    switch (id) {
      case 'deliv': return <Truck className="text-brand-green w-5 h-5" />;
      case 'park': return <MapPin className="text-brand-green w-5 h-5" />;
      case 'card': return <CoinsIcon className="text-brand-green w-5 h-5" />;
      case 'upi': return <ShieldCheck className="text-brand-green w-5 h-5" />;
      case 'bulk': return <ShoppingBag className="text-brand-green w-5 h-5" />;
      case 'wholesale': return <Award className="text-brand-green w-5 h-5" />;
      default: return <CheckCircle2 className="text-brand-green w-5 h-5" />;
    }
  };

  // Framer Motion Refined Animation Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <Layout>
      {/* 3. HERO SECTION - Split Screen Retail Layout */}
      <section id="home" className="bg-brand-bg py-16 lg:py-24 border-b border-brand-border relative overflow-hidden">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mobile Image Placement (Above text on mobile) */}
          <div className="lg:hidden h-[280px] rounded-2xl overflow-hidden shadow-soft border border-brand-border">
            <img
              src="/shop-gallery/IMG_20260709_094759.webp"
              alt="Laxmi Super Market storefront"
              className="w-full h-full object-cover object-center"
            />
          </div>
 
          {/* Left Column: Details, badges, CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="lg:col-span-6 text-left space-y-6"
          >
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
              ESTABLISHED 2015 • MYSORE
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-brand-text leading-[1.1] uppercase">
              Laxmi Super Market
            </h1>
            
            <p className="text-sm sm:text-base text-brand-text-muted leading-[1.7] max-w-xl">
              A premium neighborhood grocery store in Vijay Nagar, Mysore. Sourcing clean grains, freshly sorted pulses, pure oils, and trusted brands for your family kitchen.
            </p>
 
            {/* Split Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${storeConfig.contact.phone1}`}
                className="flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider h-12 transition-colors cursor-pointer"
              >
                <Phone size={14} />
                <span>Call Store</span>
              </a>
              <a
                href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-brand-green border border-brand-green font-bold px-6 py-3 rounded text-xs uppercase tracking-wider h-12 transition-colors cursor-pointer"
              >
                <MessageSquare size={14} />
                <span>WhatsApp List</span>
              </a>
            </div>
 
            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-6 border-t border-brand-border max-w-md">
              <div className="flex items-center space-x-2 text-brand-text-muted">
                <Check size={14} className="text-brand-green shrink-0 stroke-[2.5]" />
                <span className="text-xs font-semibold">Fresh Staples Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-text-muted">
                <Check size={14} className="text-brand-green shrink-0 stroke-[2.5]" />
                <span className="text-xs font-semibold">Best Wholesale Prices</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-text-muted">
                <Check size={14} className="text-brand-green shrink-0 stroke-[2.5]" />
                <span className="text-xs font-semibold">Strict Quality Audits</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-text-muted">
                <Check size={14} className="text-brand-green shrink-0 stroke-[2.5]" />
                <span className="text-xs font-semibold">Physical Family Store</span>
              </div>
            </div>
          </motion.div>
 
          {/* Right Column (Desktop Only): Store image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:col-span-6 h-[480px] xl:h-[520px] rounded-2xl overflow-hidden shadow-soft border border-brand-border relative"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
          >
            <img
              src="/shop-gallery/IMG_20260709_094759.webp"
              alt="Laxmi Super Market aisles"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* Scroll-down indicator */}
        <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center space-y-1">
          <div className="w-[1px] h-12 bg-brand-gold/40 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-4 bg-brand-gold animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </section>

      {/* 4. TRUST TICKER STRIP (Marquee) */}
      <div className="bg-brand-green overflow-hidden py-3 h-[38px] flex items-center border-y border-brand-green-dark/40">
        <div className="animate-marquee whitespace-nowrap flex text-[11px] font-bold uppercase tracking-widest text-white/90">
          <span>✓ FRESH PRODUCE DAILY &nbsp;&nbsp;•&nbsp;&nbsp; ✓ TRUSTED SINCE 2015 &nbsp;&nbsp;•&nbsp;&nbsp; ✓ HOME DELIVERY AVAILABLE &nbsp;&nbsp;•&nbsp;&nbsp; ✓ WHOLESALE SUPPLY AVAILABLE &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 5,000+ PRODUCTS &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 10K+ FAMILIES SERVED &nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>✓ FRESH PRODUCE DAILY &nbsp;&nbsp;•&nbsp;&nbsp; ✓ TRUSTED SINCE 2015 &nbsp;&nbsp;•&nbsp;&nbsp; ✓ HOME DELIVERY AVAILABLE &nbsp;&nbsp;•&nbsp;&nbsp; ✓ WHOLESALE SUPPLY AVAILABLE &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 5,000+ PRODUCTS &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 10K+ FAMILIES SERVED &nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* 5. OUR EXCLUSIVE PRODUCTS (Own Brand Section) */}
      <section id="exclusive" className="py-24 bg-white overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-16 space-y-3">
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
              MANUFACTURED & PACKED BY LAXMI SUPER MARKET
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight uppercase">
              Our Exclusive Products
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              We pack our own signature grains, whole-wheat flours, and oils. Double-cleaned, hygienically packed, and presented with pride.
            </p>
          </div>

          {/* Grid Layout - 8 items */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {storeConfig.exclusiveProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUpVariant}>
                <ProductCard product={product} categoryTitle="Exclusive Line" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 6. PRODUCT CATALOGUE - Rhythm of Alternating Backgrounds */}
      <section id="products" className="py-24 bg-brand-bg-alt border-b border-brand-border">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-16 space-y-3">
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
              CATEGORY CATALOGUE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight uppercase">
              Everything Your Kitchen Needs
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              Browse our full range of 150+ products across all essential grocery categories.
            </p>
          </div>

          {/* Categories Stacked Vertically with alternate rhythms */}
          <div className="space-y-16">
            {storeConfig.categories.map((category, idx) => (
              <LazySection key={category.id} height="300px">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariant}
                  className="space-y-4"
                >
                  {/* Category Heading & Description */}
                  <div className="text-left border-l-2 border-brand-gold pl-4 max-w-3xl">
                    <h3 className="text-base sm:text-lg font-extrabold text-brand-text tracking-tight uppercase mt-0.5">
                      {category.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-text-muted leading-relaxed mt-0.5">
                      {category.description}
                    </p>
                  </div>

                  {/* Swipeable Snap Carousel Slider */}
                  <ProductSlider category={category} />
                </motion.div>
              </LazySection>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ABOUT SECTION - Editorial offset layout */}
      <section id="about" className="py-24 bg-brand-bg border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Offset image grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="lg:col-span-5 relative h-[300px] sm:h-[380px] w-full"
            >
              {/* Image 1 (Larger) */}
              <div className="absolute left-2 top-2 w-[75%] aspect-[4/3] rounded-lg overflow-hidden shadow-soft border border-brand-border z-0 bg-white p-1">
                <img
                  src="/shop-gallery/IMG_20260709_094817.webp"
                  alt="Supermarket grocery shelf"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              {/* Image 2 (Smaller, offset down-right) */}
              <div className="absolute right-2 bottom-2 w-[65%] aspect-[4/3] rounded-lg overflow-hidden shadow-premium border border-brand-border z-10 bg-white p-1">
                <img
                  src="/shop-gallery/IMG_20260709_094827.webp"
                  alt="Supermarket rice stacks"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </motion.div>

            {/* Right: Content Area */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
                STORE STORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight uppercase">
                Your Trusted Neighborhood Grocery Store
              </h2>
              
              <div className="space-y-4 text-brand-text-muted text-xs sm:text-sm leading-[1.7] max-w-2xl">
                <p>
                  For years, Laxmi Super Market has been the cornerstone of quality grocery shopping in Vijay Nagar, Mysore. As a dedicated physical family store, we pride ourselves on building lasting relationships with our customers based on trust, quality, and exceptional service.
                </p>
                <p>
                  We offer a meticulously organized shopping experience, spanning across premium rice varieties, daily pulses, freshly milled flours, pure edible oils, household essentials, and gourmet snacks. We combine physical storefront reliability with home delivery convenience to serve Mysore's families better every day.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-border max-w-lg">
                <div>
                  <span className="block text-2xl font-extrabold text-brand-green">100%</span>
                  <span className="text-[10px] text-brand-text-muted font-bold uppercase tracking-wider block mt-0.5">Fresh Quality</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-brand-green">5,000+</span>
                  <span className="text-[10px] text-brand-text-muted font-bold uppercase tracking-wider block mt-0.5">Products</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-brand-green">10k+</span>
                  <span className="text-[10px] text-brand-text-muted font-bold uppercase tracking-wider block mt-0.5">Families Served</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. SERVICES SECTION - White bg grid */}
      <section id="facilities" className="py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-16 space-y-3">
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
              SHOPPING COMFORT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight uppercase">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              We provide essential conveniences to ensure shopping at our store is seamless.
            </p>
          </div>

          {/* 6 Service Cards in Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {storeConfig.facilities.map((fac) => (
              <motion.div
                key={fac.id}
                variants={fadeUpVariant}
                className="bg-white rounded-xl p-6 border border-brand-border flex items-start space-x-4 shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center shrink-0">
                  {getFacilityIcon(fac.id)}
                </div>
                <div className="text-left space-y-1">
                  <h3 className="font-bold text-brand-text text-sm uppercase tracking-wider">{fac.name}</h3>
                  <p className="text-[13px] text-brand-text-muted leading-relaxed">{fac.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 3 More trust points (Full-width light strip) */}
          <div className="bg-brand-bg-alt border border-brand-border rounded-xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3.5 text-left">
              <Users className="text-brand-green w-5 h-5 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-text">Friendly Staff</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  Our hospitable team is always ready to guide you and provide a pleasant family shopping environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 text-left border-t lg:border-t-0 lg:border-x border-brand-border pt-6 lg:pt-0 lg:px-8">
              <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-text">Trusted Brands</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  Stocking only verified and widely-loved national and international brands for absolute safety.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 text-left border-t lg:border-t-0 pt-6 lg:pt-0">
              <SparklesIcon className="text-brand-green w-5 h-5 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-text">Quick Service</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  Multiple billing counters, organized aisles, and swift support to value your precious time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. GALLERY SECTION */}
      <GallerySection />

      {/* 10. REVIEWS SECTION */}
      <section className="py-24 bg-white border-t border-brand-border">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-16 space-y-3">
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block">
              CUSTOMER FEEDBACKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight uppercase">
              Shopper Reviews
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              Read reviews from local families in Vijay Nagar, Mysore.
            </p>
          </div>

          {/* Testimonial slider grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeConfig.testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                className="bg-white border border-brand-border rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-soft text-left"
              >
                <div className="space-y-4">
                  <div className="flex space-x-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={11} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-[13px] text-brand-text-muted leading-[1.7] italic">
                    "{test.review}"
                  </p>
                </div>

                <div className="border-t border-brand-border pt-4">
                  <span className="block font-bold text-xs text-brand-text">{test.name}</span>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block mt-0.5">{test.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. CONTACT SECTION - Dark Forest Green Theme */}
      <section id="contact" className="py-24 bg-brand-green-dark text-white border-t border-brand-border relative overflow-hidden">
        <div className="max-w-7xl lg:max-w-[85rem] xl:max-w-[90rem] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="lg:col-span-5 text-left space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight uppercase text-white">Visit Us</h2>
              
              {/* Address block with pin icon */}
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-relaxed font-medium">
                  {storeConfig.contact.address.number}, {storeConfig.contact.address.landmark}, {storeConfig.contact.address.block}<br />
                  {storeConfig.contact.address.locality}, {storeConfig.contact.address.city}<br />
                  {storeConfig.contact.address.state} — {storeConfig.contact.address.zipcode}
                </span>
              </div>

              {/* Hours block with clock icon */}
              <div className="flex items-start space-x-3 text-slate-300">
                <Clock size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed font-medium">
                  <span className="block font-bold text-slate-100">Mon–Sat: {storeConfig.workingHours.weekdays.openTime} – {storeConfig.workingHours.weekdays.closeTime}</span>
                  <span className="block text-slate-400 mt-1">Sunday: {storeConfig.workingHours.sunday.openTime} – {storeConfig.workingHours.sunday.closeTime}</span>
                </div>
              </div>

              {/* Direct Mail */}
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Email: <a href={`mailto:${storeConfig.contact.email}`} className="hover:text-brand-gold transition-colors">{storeConfig.contact.email}</a>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${storeConfig.contact.phone1}`}
                className="flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider h-12 transition-all cursor-pointer w-full sm:w-auto"
              >
                <Phone size={14} />
                <span>Call Store</span>
              </a>
              <a
                href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-white text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider h-12 transition-all cursor-pointer w-full sm:w-auto"
              >
                <MessageSquare size={14} className="text-[#25D366]" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </motion.div>

          {/* Right Map & Form Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Map Frame */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="rounded-xl overflow-hidden border border-emerald-950/60 shadow-soft h-[320px] w-full"
            >
              <iframe
                title="Laxmi Super Market Location Map"
                src={storeConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* WhatsApp Grocery List Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-[#244b3e] border border-emerald-950/40 rounded-xl p-6 sm:p-8"
            >
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                Direct Submission
              </span>
              <h3 className="text-base font-extrabold text-white uppercase tracking-tight">Send Grocery List</h3>
              <p className="text-xs text-slate-300 mt-1 mb-6 leading-relaxed">
                Enter your details and list. Submit to open WhatsApp chat immediately with our stock checking team.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/40 border border-emerald-900 rounded-lg p-6 text-center space-y-3">
                  <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">Grocery List Prepared</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    WhatsApp has been triggered with your text details. If the page did not load, please click the bottom chat bubble.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-brand-gold hover:underline uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-slate-300 uppercase mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1b3c31] border border-emerald-900 rounded-lg py-3 px-4 text-xs focus:outline-none focus:border-brand-gold text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold text-slate-300 uppercase mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1b3c31] border border-emerald-900 rounded-lg py-3 px-4 text-xs focus:outline-none focus:border-brand-gold text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-slate-300 uppercase mb-1">List Details</label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      placeholder="e.g. 5kg Basmati Rice, 2L Mustard Oil..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1b3c31] border border-emerald-900 rounded-lg py-3 px-4 text-xs focus:outline-none focus:border-brand-gold text-white placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    <span>Send Grocery List</span>
                  </button>
                </form>
              )}
            </motion.div>

          </div>

        </div>
      </section>

    </Layout>
  );
}

// Sparkles fallback icon
function SparklesIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
    </svg>
  );
}

// Fallback Coins Icon
function CoinsIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6"/><circle cx="18" cy="18" r="4"/><path d="M12 18a6 6 0 0 0-6-6"/>
    </svg>
  );
}
