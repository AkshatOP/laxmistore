// Laxmi Super Market - Configuration & Product Database
// This file serves as the single source of truth for all showcase contents.

export const storeConfig = {
  storeName: "Laxmi Super Market",
  tagline: "Premium Grocery • Trusted Since 2015",
  establishedYear: "2015",
  
  contact: {
    phone1: "+91 91411 80977",
    phone2: "+91 91416 55802",
    whatsapp: "+91 91411 80977",
    whatsapp2: "+91 91416 55802",
    email: "solankikailashks93@gmail.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6823908234856!2d76.603123!3d12.336458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7afc7ddc1679%3A0xf19d58fdad6577e2!2sLaxmi%20Super%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.app.goo.gl/Xw6CSnM7qX242FEP8?g_st=awb",
    address: {
      number: "#396",
      landmark: "Near Basvraja Circle",
      block: "E Block",
      locality: "Vijay Nagar 3rd Stage",
      city: "Mysore",
      state: "Karnataka",
      zipcode: "570017"
    }
  },

  workingHours: {
    weekdays: {
      days: "Mon–Sat",
      status: "Full Day",
      openTime: "6:15 AM",
      closeTime: "9:00 PM"
    },
    sunday: {
      days: "Sunday",
      status: "Half Day",
      openTime: "6:15 AM",
      closeTime: "1:30 PM"
    }
  },

  facilities: [
    { id: "deliv", name: "HOME DELIVERY", description: "Convenient grocery delivery right to your doorstep" },
    { id: "park", name: "SPACIOUS PARKING", description: "Safe and easy parking facility for two-wheelers & cars" },
    { id: "card", name: "CARD PAYMENTS ACCEPTED", description: "Visa, Mastercard, RuPay cards accepted seamlessly" },
    { id: "upi", name: "UPI ACCEPTED", description: "Pay easily using GPay, PhonePe, Paytm, or BHIM" },
    { id: "bulk", name: "BULK ORDERS", description: "Special rates for festivals, marriages & large gatherings" },
    { id: "wholesale", name: "WHOLESALE SUPPLY", description: "Reliable B2B grocery partner for local businesses" }
  ],

  trustPoints: [
    { title: "FRIENDLY STAFF", description: "Our hospitable team is always ready to guide you and provide a pleasant family shopping environment." },
    { title: "TRUSTED BRANDS", description: "Stocking only verified and widely-loved national and international brands for absolute safety." },
    { title: "QUICK SERVICE", description: "Multiple billing counters, organized aisles, and swift support to value your precious time." }
  ],

  about: {
    title: "Your Trusted Neighborhood Grocery Store",
    paragraphs: [
      "For years, Laxmi Super Market has been the cornerstone of quality grocery shopping in Vijay Nagar, Mysore. As a dedicated physical family store, we pride ourselves on building lasting relationships with our customers based on trust, quality, and exceptional service.",
      "We offer a meticulously organized shopping experience, spanning across premium rice varieties, daily pulses, freshly milled flours, pure edible oils, household essentials, and gourmet snacks. We combine physical storefront reliability with home delivery convenience to serve Mysore's families better every day."
    ]
  },

  testimonials: [
    {
      name: "Ramesh Kumar",
      role: "Vijay Nagar Resident",
      review: "Laxmi Super Market has been our go-to grocery shop for 5 years. Their rice and grains selection is premium and always clean. The home delivery is incredibly fast!",
      rating: 5
    },
    {
      name: "Sunitha Shastri",
      role: "Home Maker",
      review: "Very clean and extremely organized store. The staff is polite, and UPI payments make checkouts super easy. Love their own brand pulses and organic selection.",
      rating: 5
    },
    {
      name: "Anand Gowda",
      role: "Local Business Owner",
      review: "I order groceries in bulk for my restaurant. Laxmi Super Market offers the best wholesale rates in Mysore and supplies only trusted brands like Aashirvaad and Tata.",
      rating: 5
    },
    {
      name: "Meera Hegde",
      role: "IT Professional",
      review: "Mobile first indeed! I WhatsApp my list, and they send the groceries home immediately. Very convenient for working couples in Vijay Nagar. Highly recommended!",
      rating: 5
    }
  ],

  // Dedicated "Our Exclusive Products" - Showcase of premium house brands
  // Using images from public/own-products directory
  exclusiveProducts: [
    {
      id: "ex-1",
      name: "Laxmi Premium Basmati Rice",
      tagline: "EXTRA LONG GRAIN, AGED TO PERFECTION",
      badge: "SIGNATURE CHOICE",
      image: "/own-products/IMG_20260709_093845.jpg",
      description: "Extra long grain, aged to perfection. Aromatic basmati rice perfect for rich biryanis."
    },
    {
      id: "ex-2",
      name: "Laxmi Sharbati Chakki Atta",
      tagline: "100% WHOLE WHEAT, SOFT ROTIS",
      badge: "BEST SELLER",
      image: "/own-products/IMG_20260709_093902.jpg",
      description: "100% whole wheat, soft rotis. Stone-ground Sharbati wheat flour that keeps rotis soft."
    },
    {
      id: "ex-3",
      name: "Laxmi Premium Toor Dal",
      tagline: "LASER CLEANED, HIGH PROTEIN",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/IMG_20260709_093915.jpg",
      description: "Laser cleaned, high protein. Unpolished, double-cleaned Toor Dal for daily nutrition."
    },
    {
      id: "ex-4",
      name: "Laxmi Pure Cow Ghee",
      tagline: "DANEDAR & AROMATIC, TRADITIONAL TASTE",
      badge: "PURE & GOLDEN",
      image: "/own-products/IMG_20260709_094042.jpg",
      description: "Danedar & aromatic, traditional taste. Prepared from pure cow milk following traditional methods."
    },
    {
      id: "ex-5",
      name: "Laxmi Organic Moong Dal",
      tagline: "ORGANIC STAPLES, PESTICIDE FREE",
      badge: "ORGANIC STAPLE",
      image: "/own-products/IMG_20260709_094339.jpg",
      description: "Grown organically without pesticides, preserving full nutritional values."
    },
    {
      id: "ex-6",
      name: "Laxmi Premium Cashews",
      tagline: "W240 JUMBO SIZE, RICH NUTS",
      badge: "PREMIUM SELECTION",
      image: "/own-products/IMG_20260709_093902.jpg",
      description: "Crispy, hand-sorted jumbo cashews loaded with essential minerals."
    },
    {
      id: "ex-7",
      name: "Laxmi Green Raisins",
      tagline: "NATURALLY SWEET, DRIED GRAPES",
      badge: "NATURAL SWEETS",
      image: "/own-products/IMG_20260709_094221.jpg",
      description: "Plump and juicy, sun-dried to lock in natural sweetness and flavor."
    },
    {
      id: "ex-8",
      name: "Laxmi Mustard Oil",
      tagline: "KACHI GHANI, PURE COLD PRESSED",
      badge: "TRADITIONAL OIL",
      image: "/own-products/IMG_20260709_094239.jpg",
      description: "Pungent, high-purity, ideal for North Indian cuisine and authentic curries."
    }
  ],

  // 10 Product Categories to display in exact order.
  // Each category gets its own slider.
  // Rule: 6 major brand products + 1 "Others" card.
  categories: [
    {
      id: "rice-grains",
      title: "Rice & Grains",
      description: "Premium basmati, daily table rice, and healthy millets for your family.",
      products: [
        { name: "Basmati Rice Classic", brand: "India Gate", image: "/own-products/IMG_20260709_094248.jpg" },
        { name: "Sona Masoori Raw Rice", brand: "Fortune", image: "/own-products/IMG_20260709_094305.jpg" },
        { name: "Jeera Rice Premium", brand: "Tata Sampann", image: "/own-products/IMG_20260709_094316.jpg" },
        { name: "Multigrain Atta", brand: "Aashirvaad", image: "/own-products/IMG_20260709_094329.jpg" },
        { name: "Brown Rice", brand: "Patanjali", image: "/own-products/IMG_20260709_094339.jpg" },
        { name: "Platinum Basmati", brand: "Kohinoor", image: "/own-products/IMG_20260709_094353.jpg" }
      ],
      others: ["Double Deer", "Aeroplane", "Devaya", "Heritage", "Royal", "Bellar", "Laxmi Gold"]
    },
    {
      id: "pulses-dals",
      title: "Pulses & Dals",
      description: "Laser-cleaned toor dal, chana, moong, and urad for daily cooking.",
      products: [
        { name: "Toor Dal", brand: "Tata Sampann", image: "/own-products/IMG_20260709_094429.jpg" },
        { name: "Chana Dal", brand: "Aashirvaad", image: "/own-products/IMG_20260709_094443.jpg" },
        { name: "Moong Dal Split", brand: "Fortune", image: "/own-products/IMG_20260709_094456.jpg" },
        { name: "Urad Dal Whole", brand: "Patanjali", image: "/own-products/IMG_20260709_094504.jpg" },
        { name: "Masoor Dal Organic", brand: "24 Mantra", image: "/own-products/IMG_20260709_094510.jpg" },
        { name: "Premium Toor Dal (Exclusive)", brand: "Laxmi", image: "/own-products/IMG_20260709_093915.jpg" }
      ],
      others: ["Organic India", "Double Horse", "MTR", "Trust", "Ganesh", "Organic Tattva"]
    },
    {
      id: "flours-atta",
      title: "Flours & Atta",
      description: "Stone-ground chakki atta, maida, besan, and specialty flours.",
      products: [
        { name: "Whole Wheat Atta", brand: "Aashirvaad", image: "/own-products/IMG_20260709_094518.jpg" },
        { name: "Chakki Fresh Atta", brand: "Fortune", image: "/own-products/IMG_20260709_094528.jpg" },
        { name: "Besan Premium", brand: "Rajdhani", image: "/own-products/IMG_20260709_094539.jpg" },
        { name: "Rava / Sooji", brand: "MTR", image: "/own-products/IMG_20260709_094558.jpg" },
        { name: "Maida", brand: "Pillsbury", image: "/own-products/IMG_20260709_094607.jpg" },
        { name: "Sharbati Chakki Atta (Exclusive)", brand: "Laxmi", image: "/own-products/IMG_20260709_093902.jpg" }
      ],
      others: ["Patanjali", "Twin Birds", "Silver Coin", "Annapurna", "Organic Tattva"]
    },
    {
      id: "edible-oils",
      title: "Edible Oils",
      description: "Cold-pressed coconut oil, mustard oil, sunflower oil, and pure ghee.",
      products: [
        { name: "Sunflower Oil", brand: "Fortune", image: "/own-products/IMG_20260709_094625.jpg" },
        { name: "Gold Oil", brand: "Saffola", image: "/own-products/IMG_20260709_094642.jpg" },
        { name: "Coconut Oil Premium", brand: "KLF", image: "/own-products/IMG_20260709_094642_1.jpg" },
        { name: "Mustard Oil", brand: "Dhara", image: "/own-products/IMG_20260709_094708.jpg" },
        { name: "Pure Cow Ghee", brand: "Patanjali", image: "/own-products/IMG_20260709_095604.jpg" },
        { name: "Pure Cow Ghee (Exclusive)", brand: "Laxmi", image: "/own-products/IMG_20260709_094042.jpg" }
      ],
      others: ["Freedom", "Gemini", "Sunpure", "Gold Winner", "Dalda", "Cardia", "Amul Ghee", "Nandini Ghee"]
    },
    {
      id: "masalas-spices",
      title: "Masalas & Spices",
      description: "Authentic whole spices, powdered masalas, and South Indian blends.",
      products: [
        { name: "Chunky Chat Masala", brand: "MDH", image: "/own-products/IMG_20260709_095621.jpg" },
        { name: "Tikhalal Chilli Powder", brand: "Everest", image: "/own-products/IMG_20260709_095629.jpg" },
        { name: "Premium Turmeric Powder", brand: "Catch", image: "/own-products/IMG_20260709_095643.jpg" },
        { name: "Sambar Masala", brand: "Ramdev", image: "/own-products/IMG_20260709_095643_1.jpg" },
        { name: "Kerala Garam Masala", brand: "Eastern", image: "/own-products/IMG_20260709_095802.jpg" },
        { name: "South Indian Spice Pack", brand: "Aachi", image: "/own-products/IMG_20260709_095813.jpg" }
      ],
      others: ["MTR", "Sakthi Masala", "Goldiee", "Priya", "Nirapara", "Tata Sampann"]
    },
    {
      id: "dairy-products",
      title: "Dairy Products",
      description: "Fresh milk, paneer, curd, cheese, and soft table butter.",
      products: [
        { name: "Taaza Milk 1L", brand: "Amul", image: "/own-products/IMG_20260709_095820.jpg" },
        { name: "Full Cream Milk", brand: "Nandini", image: "/own-products/IMG_20260709_095830.jpg" },
        { name: "Fresh Curd", brand: "Mother Dairy", image: "/own-products/IMG_20260709_095843.jpg" },
        { name: "Mozzarella Cheese", brand: "Amul", image: "/own-products/IMG_20260709_095852.jpg" },
        { name: "Cream Cheese", brand: "Britannia", image: "/own-products/IMG_20260709_095904.jpg" },
        { name: "Butter Premium", brand: "KMF", image: "/own-products/IMG_20260709_095917.jpg" }
      ],
      others: ["Go Cheese", "Milky Mist", "Dodla Dairy", "Heritage", "Akshayakalpa", "Nilgiris"]
    },
    {
      id: "snacks-namkeens",
      title: "Snacks & Namkeens",
      description: "Crispy farsan, premium chips, roasted nuts, and festive trail mixes.",
      products: [
        { name: "Aloo Bhujia", brand: "Haldiram", image: "/own-products/IMG_20260709_095917_1.jpg" },
        { name: "Mixed Farsan", brand: "Bikanervala", image: "/own-products/IMG_20260709_093845.jpg" }, // Reuse/Placeholder
        { name: "Classic Salted", brand: "Lays", image: "/own-products/IMG_20260709_093902.jpg" }, // Reuse/Placeholder
        { name: "Masala Munch", brand: "Kurkure", image: "/own-products/IMG_20260709_093915.jpg" }, // Reuse/Placeholder
        { name: "Multigrain Rings", brand: "Too Yumm", image: "/own-products/IMG_20260709_094042.jpg" }, // Reuse/Placeholder
        { name: "Wafers Premium", brand: "Balaji", image: "/own-products/IMG_20260709_094104.jpg" } // Reuse/Placeholder
      ],
      others: ["Bingo!", "Kellogg's Chocos", "Maggi", "Yippee!", "Cadbury", "Amul Chocolates"]
    },
    {
      id: "beverages",
      title: "Beverages",
      description: "Tea, coffee, juices, health drinks, and mineral water.",
      products: [
        { name: "Gold Premium", brand: "Tata Tea", image: "/own-products/IMG_20260709_094135.jpg" }, // Reuse/Placeholder
        { name: "Classic Instant Coffee", brand: "Nescafé", image: "/own-products/IMG_20260709_094221.jpg" }, // Reuse/Placeholder
        { name: "Gold Filter Coffee", brand: "Bru", image: "/own-products/IMG_20260709_094239.jpg" }, // Reuse/Placeholder
        { name: "Mixed Fruit Juice", brand: "Real", image: "/own-products/IMG_20260709_094248.jpg" }, // Reuse/Placeholder
        { name: "Aamras", brand: "Paper Boat", image: "/own-products/IMG_20260709_094305.jpg" }, // Reuse/Placeholder
        { name: "Water 1L", brand: "Bisleri", image: "/own-products/IMG_20260709_094316.jpg" } // Reuse/Placeholder
      ],
      others: ["Wagh Bakri", "Sunrise", "Continental Coffee", "MTR Badam Drink", "Sprite", "Coca-Cola"]
    },
    {
      id: "household-essentials",
      title: "Household Essentials",
      description: "Cleaning products, detergents, dishwash, and personal care basics.",
      products: [
        { name: "Power Gel Detergent", brand: "Ariel", image: "/own-products/IMG_20260709_094329.jpg" }, // Reuse/Placeholder
        { name: "Matic Liquid", brand: "Surf Excel", image: "/own-products/IMG_20260709_094339.jpg" }, // Reuse/Placeholder
        { name: "Dishwash Bar", brand: "Vim", image: "/own-products/IMG_20260709_094353.jpg" }, // Reuse/Placeholder
        { name: "Power Plus", brand: "Harpic", image: "/own-products/IMG_20260709_094429.jpg" }, // Reuse/Placeholder
        { name: "All-in-One Floor Cleaner", brand: "Lizol", image: "/own-products/IMG_20260709_094443.jpg" }, // Reuse/Placeholder
        { name: "Advance Powder", brand: "Rin", image: "/own-products/IMG_20260709_094456.jpg" } // Reuse/Placeholder
      ],
      others: ["Dettol", "Colin", "Comfort", "Domex", "Pril", "Wheel"]
    },
    {
      id: "baby-health-foods",
      title: "Baby & Health Foods",
      description: "Nutrition for toddlers, seniors, and health-conscious families.",
      products: [
        { name: "Junior Powder", brand: "Horlicks", image: "/own-products/IMG_20260709_094504.jpg" }, // Reuse/Placeholder
        { name: "Royale Chocolate", brand: "Complan", image: "/own-products/IMG_20260709_094510.jpg" }, // Reuse/Placeholder
        { name: "Cerelac Stage 1", brand: "Nestle", image: "/own-products/IMG_20260709_094518.jpg" }, // Reuse/Placeholder
        { name: "Vanilla Powder", brand: "Pediasure", image: "/own-products/IMG_20260709_094528.jpg" }, // Reuse/Placeholder
        { name: "Oats Classic", brand: "Saffola", image: "/own-products/IMG_20260709_094539.jpg" }, // Reuse/Placeholder
        { name: "Oats Instant", brand: "Quaker", image: "/own-products/IMG_20260709_094558.jpg" } // Reuse/Placeholder
      ],
      others: ["Bournvita", "Boost", "Manna Health Mix", "Kellogg's Oats", "Baggry's"]
    }
  ],

  // Real gallery images from public/shop-gallery
  gallery: [
    { src: "/shop-gallery/IMG_20260709_094759.jpg", caption: "Store Entrance View" },
    { src: "/shop-gallery/IMG_20260709_094817.jpg", caption: "Organized Grocery Shelves" },
    { src: "/shop-gallery/IMG_20260709_094827.jpg", caption: "Premium Rice and Flour Section" },
    { src: "/shop-gallery/IMG_20260709_094835.jpg", caption: "Staples and Pulses Section" },
    { src: "/shop-gallery/IMG_20260709_094849.jpg", caption: "Snack Corner & Dry Foods" },
    { src: "/shop-gallery/IMG_20260709_094855.jpg", caption: "Fresh Staple Oils Aisle" },
    { src: "/shop-gallery/IMG_20260709_094902.jpg", caption: "Double-Cleaned Rice Stacks" },
    { src: "/shop-gallery/IMG_20260709_094909.jpg", caption: "Spices & Masalas Counter" },
    { src: "/shop-gallery/IMG_20260709_094913.jpg", caption: "Household Utility Corner" },
    { src: "/shop-gallery/IMG_20260709_094924.jpg", caption: "Dairy Coolers & Freezers" },
    { src: "/shop-gallery/IMG_20260709_094926.jpg", caption: "Premium Brand Sections" },
    { src: "/shop-gallery/IMG_20260709_094944.jpg", caption: "Organized Billing Counters" }
  ]
};
