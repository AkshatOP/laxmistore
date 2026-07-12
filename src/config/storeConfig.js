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
      name: "Laxmi Premium Ajwain",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "PREMIUM QUALITY",
      image: "/own-products/Ajwain.jpg",
      description: "Premium quality Ajwain sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-2",
      name: "Laxmi Premium Avarekalu",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "100% NATURAL",
      image: "/own-products/Avarekalu.jpg",
      description: "Premium quality Avarekalu sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-3",
      name: "Laxmi Premium Black Urad Dal",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/BlackUradDal.jpg",
      description: "Premium quality Black Urad Dal sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-4",
      name: "Laxmi Premium Chana Dal",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "HOUSE BRAND",
      image: "/own-products/ChanaDal.jpg",
      description: "Premium quality Chana Dal sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-5",
      name: "Laxmi Premium Corn",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "BEST SELLER",
      image: "/own-products/Corn.jpg",
      description: "Premium quality Corn sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-6",
      name: "Laxmi Premium Dalia",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "PREMIUM QUALITY",
      image: "/own-products/Dalia.jpg",
      description: "Premium quality Dalia sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-7",
      name: "Laxmi Premium Green Moong",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "100% NATURAL",
      image: "/own-products/GreenMoong.jpg",
      description: "Premium quality Green Moong sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-8",
      name: "Laxmi Premium Kali Mirch",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/KaliMirch.jpg",
      description: "Premium quality Kali Mirch sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-9",
      name: "Laxmi Premium Namkeen Mixture",
      tagline: "TRADITIONAL SPICY MIXTURE",
      badge: "HOUSE BRAND",
      image: "/own-products/NamkeenMixture.jpg",
      description: "Premium quality Namkeen Mixture sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-10",
      name: "Laxmi Premium Poha",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "BEST SELLER",
      image: "/own-products/Poha.jpg",
      description: "Premium quality Poha sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-11",
      name: "Laxmi Premium Rava",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "PREMIUM QUALITY",
      image: "/own-products/Rava.jpg",
      description: "Premium quality Rava sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-12",
      name: "Laxmi Premium Saunf",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "100% NATURAL",
      image: "/own-products/Saunf.jpg",
      description: "Premium quality Saunf sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-13",
      name: "Laxmi Premium Soybeans",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/Soybeans.jpg",
      description: "Premium quality Soybeans sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-14",
      name: "Laxmi Premium Spicy Peanuts",
      tagline: "CRUNCHY & DELICIOUS SNACKS",
      badge: "HOUSE BRAND",
      image: "/own-products/SpicyPeanuts.jpg",
      description: "Premium quality Spicy Peanuts sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-15",
      name: "Laxmi Premium Urad Dal",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "BEST SELLER",
      image: "/own-products/UradDal.jpg",
      description: "Premium quality Urad Dal sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-16",
      name: "Laxmi Premium Almonds",
      tagline: "PREMIUM SELECTION, RICH IN NUTRIENTS",
      badge: "PREMIUM QUALITY",
      image: "/own-products/almonds.jpg",
      description: "Premium quality Almonds sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-17",
      name: "Laxmi Premium Avarebele",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "100% NATURAL",
      image: "/own-products/avarebele.jpg",
      description: "Premium quality Avarebele sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-18",
      name: "Laxmi Premium Cashew",
      tagline: "PREMIUM SELECTION, RICH IN NUTRIENTS",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/cashew.jpg",
      description: "Premium quality Cashew sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-19",
      name: "Laxmi Premium Chanadal",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "HOUSE BRAND",
      image: "/own-products/chanadal.jpg",
      description: "Premium quality Chanadal sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-20",
      name: "Laxmi Premium Chillipowder",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "BEST SELLER",
      image: "/own-products/chillipowder.jpg",
      description: "Premium quality Chillipowder sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-21",
      name: "Laxmi Premium Flaxseeds",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "PREMIUM QUALITY",
      image: "/own-products/flaxseeds.jpg",
      description: "Premium quality Flaxseeds sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-22",
      name: "Laxmi Premium Jeera",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "100% NATURAL",
      image: "/own-products/jeera.jpg",
      description: "Premium quality Jeera sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-23",
      name: "Laxmi Premium Kabulichana",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/kabulichana.jpg",
      description: "Premium quality Kabulichana sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-24",
      name: "Laxmi Premium Kala Til",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "HOUSE BRAND",
      image: "/own-products/kalaTil.jpg",
      description: "Premium quality Kala Til sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-25",
      name: "Laxmi Premium Kalachana",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "BEST SELLER",
      image: "/own-products/kalachana.jpg",
      description: "Premium quality Kalachana sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-26",
      name: "Laxmi Premium Kalajeera",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "PREMIUM QUALITY",
      image: "/own-products/kalajeera.jpg",
      description: "Premium quality Kalajeera sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-27",
      name: "Laxmi Premium Kalamirch",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "100% NATURAL",
      image: "/own-products/kalamirch.jpg",
      description: "Premium quality Kalamirch sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-28",
      name: "Laxmi Premium Kali T I L",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/kaliTIL.jpg",
      description: "Premium quality Kali T I L sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-29",
      name: "Laxmi Premium Masalafriedpeanuts",
      tagline: "CRUNCHY & DELICIOUS SNACKS",
      badge: "HOUSE BRAND",
      image: "/own-products/masalafriedpeanuts.jpg",
      description: "Premium quality Masalafriedpeanuts sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-30",
      name: "Laxmi Premium Masalafriedpeanuts",
      tagline: "CRUNCHY & DELICIOUS SNACKS",
      badge: "BEST SELLER",
      image: "/own-products/masalafriedpeanuts1.jpg",
      description: "Premium quality Masalafriedpeanuts sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-31",
      name: "Laxmi Premium Methi Dana",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "PREMIUM QUALITY",
      image: "/own-products/methi_dana.jpg",
      description: "Premium quality Methi Dana sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-32",
      name: "Laxmi Premium Moongdal",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "100% NATURAL",
      image: "/own-products/moongdal.jpg",
      description: "Premium quality Moongdal sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-33",
      name: "Laxmi Premium Moresalt",
      tagline: "NATURALLY IODIZED, PURE WHITE",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/moresalt.jpg",
      description: "Premium quality Moresalt sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-34",
      name: "Laxmi Premium Peanuts",
      tagline: "CRUNCHY & DELICIOUS SNACKS",
      badge: "HOUSE BRAND",
      image: "/own-products/peanuts.jpg",
      description: "Premium quality Peanuts sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-35",
      name: "Laxmi Premium Sabudana",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "BEST SELLER",
      image: "/own-products/sabudana.jpg",
      description: "Premium quality Sabudana sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-36",
      name: "Laxmi Premium Salt",
      tagline: "NATURALLY IODIZED, PURE WHITE",
      badge: "PREMIUM QUALITY",
      image: "/own-products/salt.jpg",
      description: "Premium quality Salt sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-37",
      name: "Laxmi Premium Sooji",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "100% NATURAL",
      image: "/own-products/sooji.jpg",
      description: "Premium quality Sooji sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-38",
      name: "Laxmi Premium Soyabean",
      tagline: "100% PURE & NATURAL, DOUBLE FILTERED",
      badge: "DAILY ESSENTIAL",
      image: "/own-products/soyabean.jpg",
      description: "Premium quality Soyabean sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-39",
      name: "Laxmi Premium Wallnut",
      tagline: "PREMIUM SELECTION, RICH IN NUTRIENTS",
      badge: "HOUSE BRAND",
      image: "/own-products/wallnut.jpg",
      description: "Premium quality Wallnut sourced directly and packed hygienically to retain natural taste and nutrients."
    },
    {
      id: "ex-40",
      name: "Laxmi Premium Yellow Dal",
      tagline: "HIGH PROTEIN, DOUBLE CLEANED",
      badge: "BEST SELLER",
      image: "/own-products/yellowDal.jpg",
      description: "Premium quality Yellow Dal sourced directly and packed hygienically to retain natural taste and nutrients."
    }
  ],

  // 23 Product Categories — full product list as per store inventory.
  // Each category gets its own slider: 6 main product cards + 1 "Others" card.
  categories: [
    // ─── 1. Rice & Grains ───────────────────────────────────────────────────
    {
      id: "rice-grains",
      title: "Rice & Grains",
      description: "Premium basmati, daily table rice, healthy millets and whole grains.",
      products: [
        { name: "Raw Rice",          brand: "Double Deer",   image: "/brand-products/double_deer_raw_rice.jpg" },
        { name: "Sona Masoori Rice", brand: "Fortune",       image: "/brand-products/fortune_sona_masoori_rice.jpg" },
        { name: "Basmati Rice",      brand: "India Gate",    image: "/brand-products/india_gate_basmati_rice.jpg" },
        { name: "Idli Rice",         brand: "Aeroplane",     image: "/brand-products/aeroplane_idli_rice.jpg" },
        { name: "Brown Rice",        brand: "Patanjali",     image: "/brand-products/patanjali_brown_rice.jpg" },
        { name: "Poha (Avalakki)",   brand: "MTR",           image: "/brand-products/mtr_poha__avalakki_.jpg" }
      ],
      others: ["Rava / Sooji", "Wheat", "Broken Rice", "Millets", "Ragi", "Jowar", "Bajra", "Corn"]
    },
    // ─── 2. Atta & Flour ────────────────────────────────────────────────────
    {
      id: "atta-flour",
      title: "Atta & Flour",
      description: "Stone-ground chakki atta, maida, besan, ragi flour and specialty flours.",
      products: [
        { name: "Wheat Flour",   brand: "Aashirvaad",    image: "/brand-products/aashirvaad_wheat_flour.jpg" },
        { name: "Maida",         brand: "Pillsbury",     image: "/brand-products/pillsbury_maida.jpg" },
        { name: "Ragi Flour",    brand: "Organic India", image: "/brand-products/organic_india_ragi_flour.jpg" },
        { name: "Besan",         brand: "Rajdhani",      image: "/brand-products/rajdhani_besan.jpg" },
        { name: "Rice Flour",    brand: "Double Horse",  image: "/brand-products/double_horse_rice_flour.jpg" },
        { name: "Corn Flour",    brand: "Weikfield",     image: "/brand-products/weikfield_corn_flour.jpg" }
      ],
      others: ["Multigrain Flour", "Idiyappam Flour", "Other"]
    },
    // ─── 3. Pulses & Dals ───────────────────────────────────────────────────
    {
      id: "pulses-dals",
      title: "Pulses & Dals",
      description: "Laser-cleaned toor dal, chana, moong, urad and more for daily cooking.",
      products: [
        { name: "Toor Dal",    brand: "Tata Sampann",  image: "/brand-products/tata_sampann_toor_dal.jpg" },
        { name: "Urad Dal",    brand: "Fortune",        image: "/brand-products/fortune_urad_dal.jpg" },
        { name: "Moong Dal",   brand: "Aashirvaad",     image: "/brand-products/aashirvaad_moong_dal.jpg" },
        { name: "Chana Dal",   brand: "Patanjali",      image: "/brand-products/patanjali_chana_dal.jpg" },
        { name: "Masoor Dal",  brand: "24 Mantra",      image: "/brand-products/24_mantra_masoor_dal.jpg" },
        { name: "Horse Gram",  brand: "Double Horse",   image: "/brand-products/double_horse_horse_gram.jpg" }
      ],
      others: ["Green Gram", "Black Gram", "Rajma", "Kabuli Chana"]
    },
    // ─── 4. Spices & Masalas ────────────────────────────────────────────────
    {
      id: "spices-masalas",
      title: "Spices & Masalas",
      description: "Authentic whole spices, powdered masalas and South Indian blends.",
      products: [
        { name: "Turmeric Powder",   brand: "Catch",    image: "/brand-products/catch_turmeric_powder.jpg" },
        { name: "Chilli Powder",     brand: "Everest",  image: "/brand-products/everest_chilli_powder.jpg" },
        { name: "Coriander Powder",  brand: "MDH",      image: "/brand-products/mdh_coriander_powder.jpg" },
        { name: "Cumin",             brand: "Ramdev",   image: "/brand-products/ramdev_cumin.jpg" },
        { name: "Mustard",           brand: "Eastern",  image: "/brand-products/eastern_mustard.jpg" },
        { name: "Pepper",            brand: "Aachi",    image: "/brand-products/aachi_pepper.jpg" }
      ],
      others: ["Garam Masala", "Sambar Powder", "Rasam Powder", "Biryani Masala", "Kitchen King", "Whole Spices", "Cardamom", "Cloves", "Cinnamon", "Bay Leaf"]
    },
    // ─── 5. Cooking Oils & Ghee ─────────────────────────────────────────────
    {
      id: "cooking-oils-ghee",
      title: "Cooking Oils & Ghee",
      description: "Cold-pressed coconut oil, sunflower oil, groundnut oil and pure desi ghee.",
      products: [
        { name: "Sunflower Oil",   brand: "Fortune",   image: "/brand-products/fortune_sunflower_oil.jpg" },
        { name: "Groundnut Oil",   brand: "Dhara",     image: "/brand-products/dhara_groundnut_oil.jpg" },
        { name: "Coconut Oil",     brand: "KLF",       image: "/brand-products/klf_coconut_oil.jpg" },
        { name: "Mustard Oil",     brand: "Patanjali", image: "/brand-products/patanjali_mustard_oil.jpg" },
        { name: "Gingelly Oil",    brand: "Idhayam",   image: "/brand-products/idhayam_gingelly_oil.jpg" },
        { name: "Ghee",            brand: "Amul",      image: "/brand-products/amul_ghee.jpg" }
      ],
      others: ["Rice Bran Oil", "Olive Oil", "Butter"]
    },
    // ─── 6. Sugar & Sweeteners ──────────────────────────────────────────────
    {
      id: "sugar-sweeteners",
      title: "Sugar & Sweeteners",
      description: "Refined sugar, natural jaggery, honey and rock sugar for all your sweet needs.",
      products: [
        { name: "Sugar",        brand: "Uttam",      image: "/brand-products/uttam_sugar.jpg" },
        { name: "Jaggery",      brand: "Organic India", image: "/brand-products/organic_india_jaggery.jpg" },
        { name: "Brown Sugar",  brand: "Dhampur",    image: "/brand-products/dhampur_brown_sugar.jpg" },
        { name: "Rock Sugar",   brand: "Patanjali",  image: "/brand-products/patanjali_rock_sugar.jpg" },
        { name: "Honey",        brand: "Dabur",      image: "/brand-products/dabur_honey.jpg" }
      ],
      others: []
    },
    // ─── 7. Salt ────────────────────────────────────────────────────────────
    {
      id: "salt",
      title: "Salt",
      description: "Iodized table salt, rock salt and Himalayan pink salt for healthy cooking.",
      products: [
        { name: "Iodized Salt",  brand: "Tata Salt",   image: "/brand-products/tata_salt_iodized_salt.jpg" },
        { name: "Rock Salt",     brand: "Patanjali",   image: "/brand-products/patanjali_rock_salt.jpg" },
        { name: "Pink Salt",     brand: "Keya",        image: "/brand-products/keya_pink_salt.jpg" }
      ],
      others: []
    },
    // ─── 8. Dry Fruits & Nuts ───────────────────────────────────────────────
    {
      id: "dry-fruits-nuts",
      title: "Dry Fruits & Nuts",
      description: "Premium almonds, cashews, raisins, dates and mixed nuts.",
      products: [
        { name: "Almonds",     brand: "Happilo",    image: "/brand-products/happilo_almonds.jpg" },
        { name: "Cashews",     brand: "Nutraj",     image: "/brand-products/nutraj_cashews.jpg" },
        { name: "Pistachios",  brand: "Wonderland", image: "/brand-products/wonderland_pistachios.jpg" },
        { name: "Raisins",     brand: "Happilo",    image: "/brand-products/happilo_raisins.jpg" },
        { name: "Dates",       brand: "Lion",       image: "/brand-products/lion_dates.jpg" },
        { name: "Walnuts",     brand: "Tulsi",      image: "/brand-products/tulsi_walnuts.jpg" }
      ],
      others: ["Peanuts", "Mixed Nuts"]
    },
    // ─── 9. Snacks ──────────────────────────────────────────────────────────
    {
      id: "snacks",
      title: "Snacks",
      description: "Crispy chips, namkeen, murukku, khakhra, popcorn and more.",
      products: [
        { name: "Chips",     brand: "Lays",        image: "/brand-products/lays_chips.jpg" },
        { name: "Namkeen",   brand: "Haldiram",    image: "/brand-products/haldiram_namkeen.jpg" },
        { name: "Mixture",   brand: "Bikanervala", image: "/brand-products/bikanervala_mixture.jpg" },
        { name: "Murukku",   brand: "Anand",       image: "/brand-products/anand_murukku.jpg" },
        { name: "Khakhra",   brand: "Lijjat",      image: "/brand-products/lijjat_khakhra.jpg" },
        { name: "Popcorn",   brand: "Act II",      image: "/brand-products/act_ii_popcorn.jpg" }
      ],
      others: ["Fryums"]
    },
    // ─── 10. Biscuits & Bakery ──────────────────────────────────────────────
    {
      id: "biscuits-bakery",
      title: "Biscuits & Bakery",
      description: "Biscuits, cookies, bread, buns, rusk, cakes and fresh bakery items.",
      products: [
        { name: "Biscuits",  brand: "Britannia",  image: "/brand-products/britannia_biscuits.jpg" },
        { name: "Cookies",   brand: "Sunfeast",   image: "/brand-products/sunfeast_cookies.jpg" },
        { name: "Bread",     brand: "Harvest Gold",image: "/brand-products/harvest_gold_bread.jpg" },
        { name: "Buns",      brand: "Modern",     image: "/brand-products/modern_buns.jpg" },
        { name: "Rusk",      brand: "Parle",      image: "/brand-products/parle_rusk.jpg" },
        { name: "Cakes",     brand: "Britannia",  image: "/brand-products/britannia_cakes.jpg" }
      ],
      others: ["Muffins"]
    },
    // ─── 11. Chocolates & Confectionery ─────────────────────────────────────
    {
      id: "chocolates-confectionery",
      title: "Chocolates & Confectionery",
      description: "Chocolates, candies, toffees, chewing gum and lollipops.",
      products: [
        { name: "Chocolates",    brand: "Cadbury",   image: "/brand-products/cadbury_chocolates.jpg" },
        { name: "Candy",         brand: "Parle",     image: "/brand-products/parle_candy.jpg" },
        { name: "Toffees",       brand: "Eclairs",   image: "/brand-products/eclairs_toffees.jpg" },
        { name: "Chewing Gum",   brand: "Center Fresh", image: "/brand-products/center_fresh_chewing_gum.jpg" },
        { name: "Lollipops",     brand: "Alpenliebe",image: "/brand-products/alpenliebe_lollipops.jpg" }
      ],
      others: []
    },
    // ─── 12. Beverages ──────────────────────────────────────────────────────
    {
      id: "beverages",
      title: "Beverages",
      description: "Tea, coffee, juices, soft drinks, energy drinks and mineral water.",
      products: [
        { name: "Tea",           brand: "Tata Tea",  image: "/brand-products/tata_tea_tea.jpg" },
        { name: "Coffee",        brand: "Nescafé",   image: "/brand-products/nescaf__coffee.jpg" },
        { name: "Green Tea",     brand: "Lipton",    image: "/brand-products/lipton_green_tea.jpg" },
        { name: "Soft Drinks",   brand: "Coca-Cola", image: "/brand-products/coca_cola_soft_drinks.jpg" },
        { name: "Fruit Juice",   brand: "Real",      image: "/brand-products/real_fruit_juice.jpg" },
        { name: "Mineral Water", brand: "Bisleri",   image: "/brand-products/bisleri_mineral_water.jpg" }
      ],
      others: ["Energy Drinks"]
    },
    // ─── 13. Dairy Products ─────────────────────────────────────────────────
    {
      id: "dairy-products",
      title: "Dairy Products",
      description: "Fresh milk, curd, butter, cheese, paneer, cream and ice cream.",
      products: [
        { name: "Milk",    brand: "Nandini",      image: "/brand-products/nandini_milk.jpg" },
        { name: "Curd",    brand: "Mother Dairy", image: "/brand-products/mother_dairy_curd.jpg" },
        { name: "Butter",  brand: "Amul",         image: "/brand-products/amul_butter.jpg" },
        { name: "Cheese",  brand: "Amul",         image: "/brand-products/amul_cheese.jpg" },
        { name: "Paneer",  brand: "Milky Mist",   image: "/brand-products/milky_mist_paneer.jpg" },
        { name: "Cream",   brand: "Amul",         image: "/brand-products/amul_cream.jpg" }
      ],
      others: ["Ice Cream"]
    },
    // ─── 14. Instant Foods ──────────────────────────────────────────────────
    {
      id: "instant-foods",
      title: "Instant Foods",
      description: "Instant noodles, pasta, vermicelli, ready mixes, oats and soup mixes.",
      products: [
        { name: "Instant Noodles", brand: "Maggi",    image: "/brand-products/maggi_instant_noodles.jpg" },
        { name: "Pasta",           brand: "Borges",   image: "/brand-products/borges_pasta.jpg" },
        { name: "Vermicelli",      brand: "MTR",      image: "/brand-products/mtr_vermicelli.jpg" },
        { name: "Ready Mixes",     brand: "MTR",      image: "/brand-products/mtr_ready_mixes.jpg" },
        { name: "Soup Mix",        brand: "Knorr",    image: "/brand-products/knorr_soup_mix.jpg" },
        { name: "Oats",            brand: "Quaker",   image: "/brand-products/quaker_oats.jpg" }
      ],
      others: []
    },
    // ─── 15. Pickles & Sauces ───────────────────────────────────────────────
    {
      id: "pickles-sauces",
      title: "Pickles & Sauces",
      description: "Traditional pickles, ketchup, soy sauce, chilli sauce, vinegar and mayo.",
      products: [
        { name: "Pickles",         brand: "Priya",    image: "/brand-products/priya_pickles.jpg" },
        { name: "Tomato Ketchup",  brand: "Kissan",   image: "/brand-products/kissan_tomato_ketchup.jpg" },
        { name: "Soy Sauce",       brand: "Ching's",  image: "/brand-products/ching_s_soy_sauce.jpg" },
        { name: "Chilli Sauce",    brand: "Maggi",    image: "/brand-products/maggi_chilli_sauce.jpg" },
        { name: "Vinegar",         brand: "Heinz",    image: "/brand-products/heinz_vinegar.jpg" },
        { name: "Mayonnaise",      brand: "Dr. Oetker",image: "/brand-products/dr__oetker_mayonnaise.jpg" }
      ],
      others: []
    },
    // ─── 16. Fresh Fruits ───────────────────────────────────────────────────
    {
      id: "fresh-fruits",
      title: "Fresh Fruits",
      description: "Fresh banana, apple, mango, grapes, pomegranate and seasonal fruits.",
      products: [
        { name: "Banana",       brand: "Fresh",   image: "/brand-products/fresh_banana.jpg" },
        { name: "Apple",        brand: "Fresh",   image: "/brand-products/fresh_apple.jpg" },
        { name: "Orange",       brand: "Fresh",   image: "/brand-products/fresh_orange.jpg" },
        { name: "Mango",        brand: "Fresh",   image: "/brand-products/fresh_mango.jpg" },
        { name: "Grapes",       brand: "Fresh",   image: "/brand-products/fresh_grapes.jpg" },
        { name: "Pomegranate",  brand: "Fresh",   image: "/brand-products/fresh_pomegranate.jpg" }
      ],
      others: ["Papaya", "Watermelon", "Seasonal Fruits"]
    },
    // ─── 17. Fresh Vegetables ───────────────────────────────────────────────
    {
      id: "fresh-vegetables",
      title: "Fresh Vegetables",
      description: "Farm-fresh onion, potato, tomato, carrot, leafy greens and seasonal vegetables.",
      products: [
        { name: "Onion",    brand: "Fresh",  image: "/brand-products/fresh_onion.jpg" },
        { name: "Potato",   brand: "Fresh",  image: "/brand-products/fresh_potato.jpg" },
        { name: "Tomato",   brand: "Fresh",  image: "/brand-products/fresh_tomato.jpg" },
        { name: "Carrot",   brand: "Fresh",  image: "/brand-products/fresh_carrot.jpg" },
        { name: "Beans",    brand: "Fresh",  image: "/brand-products/fresh_beans.jpg" },
        { name: "Brinjal",  brand: "Fresh",  image: "/brand-products/fresh_brinjal.jpg" }
      ],
      others: ["Cabbage", "Cauliflower", "Cucumber", "Capsicum", "Green Chilli", "Leafy Vegetables", "Seasonal Vegetables"]
    },
    // ─── 18. Personal Care ──────────────────────────────────────────────────
    {
      id: "personal-care",
      title: "Personal Care",
      description: "Soap, shampoo, toothpaste, face wash, hair oil, deodorant and more.",
      products: [
        { name: "Soap",         brand: "Dove",      image: "/brand-products/dove_soap.jpg" },
        { name: "Shampoo",      brand: "Head & Shoulders", image: "/brand-products/head___shoulders_shampoo.jpg" },
        { name: "Toothpaste",   brand: "Colgate",   image: "/brand-products/colgate_toothpaste.jpg" },
        { name: "Toothbrush",   brand: "Oral-B",    image: "/brand-products/oral_b_toothbrush.jpg" },
        { name: "Face Wash",    brand: "Himalaya",  image: "/brand-products/himalaya_face_wash.jpg" },
        { name: "Hair Oil",     brand: "Parachute", image: "/brand-products/parachute_hair_oil.jpg" }
      ],
      others: ["Talcum Powder", "Deodorant", "Sanitary Pads", "Shaving Products"]
    },
    // ─── 19. Home Care ──────────────────────────────────────────────────────
    {
      id: "home-care",
      title: "Home Care",
      description: "Detergents, dishwash, floor cleaner, toilet cleaner and home essentials.",
      products: [
        { name: "Detergent Powder",  brand: "Ariel",      image: "/brand-products/ariel_detergent_powder.jpg" },
        { name: "Detergent Liquid",  brand: "Surf Excel",  image: "/brand-products/surf_excel_detergent_liquid.jpg" },
        { name: "Dish Wash",         brand: "Vim",         image: "/brand-products/vim_dish_wash.jpg" },
        { name: "Floor Cleaner",     brand: "Lizol",       image: "/brand-products/lizol_floor_cleaner.jpg" },
        { name: "Toilet Cleaner",    brand: "Harpic",      image: "/brand-products/harpic_toilet_cleaner.jpg" },
        { name: "Phenyl",            brand: "Robin",       image: "/brand-products/robin_phenyl.jpg" }
      ],
      others: ["Garbage Bags", "Scrub Pads"]
    },
    // ─── 20. Household Essentials ───────────────────────────────────────────
    {
      id: "household-essentials",
      title: "Household Essentials",
      description: "Tissue paper, foil, match box, candles, mosquito repellent and more.",
      products: [
        { name: "Tissue Paper",        brand: "Scotties",   image: "/brand-products/scotties_tissue_paper.jpg" },
        { name: "Aluminium Foil",      brand: "Hindalco",   image: "/brand-products/hindalco_aluminium_foil.jpg" },
        { name: "Cling Wrap",          brand: "Hippo",      image: "/brand-products/hippo_cling_wrap.jpg" },
        { name: "Match Box",           brand: "WIMCO",      image: "/brand-products/wimco_match_box.jpg" },
        { name: "Candles",             brand: "Mangaldeep", image: "/brand-products/mangaldeep_candles.jpg" },
        { name: "Mosquito Repellent",  brand: "Good Knight", image: "/brand-products/good_knight_mosquito_repellent.jpg" }
      ],
      others: ["Batteries", "Plastic Covers"]
    },
    // ─── 21. Baby Care ──────────────────────────────────────────────────────
    {
      id: "baby-care",
      title: "Baby Care",
      description: "Baby soap, shampoo, powder, oil, diapers and wipes for your little ones.",
      products: [
        { name: "Baby Soap",     brand: "Johnson's",  image: "/brand-products/johnson_s_baby_soap.jpg" },
        { name: "Baby Shampoo",  brand: "Johnson's",  image: "/brand-products/johnson_s_baby_shampoo.jpg" },
        { name: "Baby Powder",   brand: "Johnson's",  image: "/brand-products/johnson_s_baby_powder.jpg" },
        { name: "Baby Oil",      brand: "Johnson's",  image: "/brand-products/johnson_s_baby_oil.jpg" },
        { name: "Diapers",       brand: "Pampers",    image: "/brand-products/pampers_diapers.jpg" },
        { name: "Baby Wipes",    brand: "Mee Mee",    image: "/brand-products/mee_mee_baby_wipes.jpg" }
      ],
      others: []
    },
    // ─── 22. Pet Care ───────────────────────────────────────────────────────
    {
      id: "pet-care",
      title: "Pet Care",
      description: "Nutritious dog food, cat food and pet treats from trusted brands.",
      products: [
        { name: "Dog Food",    brand: "Pedigree",   image: "/brand-products/pedigree_dog_food.jpg" },
        { name: "Cat Food",    brand: "Whiskas",    image: "/brand-products/whiskas_cat_food.jpg" },
        { name: "Pet Treats",  brand: "Drools",     image: "/brand-products/drools_pet_treats.jpg" }
      ],
      others: []
    },
    // ─── 23. Frozen Foods ───────────────────────────────────────────────────
    {
      id: "frozen-foods",
      title: "Frozen Foods",
      description: "Frozen peas, corn, snacks, paratha and vegetables for quick meals.",
      products: [
        { name: "Frozen Peas",        brand: "McCain",    image: "/brand-products/mccain_frozen_peas.jpg" },
        { name: "Frozen Corn",        brand: "McCain",    image: "/brand-products/mccain_frozen_corn.jpg" },
        { name: "Frozen Snacks",      brand: "McCain",    image: "/brand-products/mccain_frozen_snacks.jpg" },
        { name: "Frozen Paratha",     brand: "Kawan",     image: "/brand-products/kawan_frozen_paratha.jpg" },
        { name: "Frozen Vegetables",  brand: "Safal",     image: "/brand-products/safal_frozen_vegetables.jpg" }
      ],
      others: []
    },
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
