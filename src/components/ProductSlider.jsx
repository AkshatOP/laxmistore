import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductSlider({ category }) {
  const scrollContainerRef = useRef(null);

  // 6 product cards + 1 "Others" card at the end
  const allCards = [
    ...category.products,
    { isOthers: true },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current.firstElementChild;
      if (firstChild) {
        const cardWidth = firstChild.getBoundingClientRect().width;
        const gap = window.innerWidth >= 640 ? 24 : 16;
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap),
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto my-6 select-none group">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 sm:gap-6 pb-4 scroll-smooth"
      >
        {allCards.map((card, idx) => (
          <div
            key={idx}
            className="w-[72%] sm:w-[42%] lg:w-[calc(25%-18px)] snap-start shrink-0"
          >
            {card.isOthers ? (
              <ProductCard
                isOthers={true}
                othersList={category.others}
                categoryTitle={category.title}
              />
            ) : (
              <ProductCard
                product={card}
                categoryTitle={category.title}
              />
            )}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-1 sm:left-2 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-brand-bg-alt text-brand-green border border-brand-border rounded-full flex items-center justify-center shadow-soft active:scale-95 z-20 cursor-pointer lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={18} className="stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-1 sm:right-2 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-brand-bg-alt text-brand-green border border-brand-border rounded-full flex items-center justify-center shadow-soft active:scale-95 z-20 cursor-pointer lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight size={18} className="stroke-[2.5]" />
      </button>
    </div>
  );
}
