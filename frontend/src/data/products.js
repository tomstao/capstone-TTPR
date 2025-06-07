// Centralized product data - simulates what would come from a database
export const allProducts = [
  // New Arrivals (IDs 1-10)
  {
    id: 1,
    title: 'V-THOR Air Assault "Thunderstruck"',
    image: "https://via.placeholder.com/300x300",
    price: 97.99,
    category: "New Arrivals",
    isNew: true,
    hasBonus: true,
    description: "High-quality air assault figure with detailed accessories",
  },
  {
    id: 2,
    title: "Daitaku Helios",
    image: "https://via.placeholder.com/300x300",
    price: 199.99,
    category: "New Arrivals",
    isNew: true,
    hasBonus: true,
    description: "Premium Helios model with exclusive bonus items",
  },
  {
    id: 3,
    title: "Ume Hanami-The Rolling Riceball",
    image: "https://via.placeholder.com/300x300",
    price: 244.99,
    category: "New Arrivals",
    isNew: true,
    hasBonus: true,
    description: "Limited edition Japanese-inspired figure",
  },
  {
    id: 4,
    title: "Dragon Knight Elite",
    image: "https://via.placeholder.com/300x300",
    price: 189.99,
    category: "New Arrivals",
    isNew: true,
    hasBonus: false,
    description: "Elite dragon knight with articulated armor",
  },
  {
    id: 5,
    title: "Cyber Mech Alpha",
    image: "https://via.placeholder.com/300x300",
    price: 329.99,
    category: "New Arrivals",
    isNew: true,
    hasBonus: true,
    description: "Futuristic mech with LED lighting effects",
  },

  // Exclusive Items (IDs 11-20)
  {
    id: 11,
    title: "ARTFX J Nicholas D. Wolfwood TRIGUN STAMPEDE",
    image: "https://via.placeholder.com/300x300",
    price: 219.99,
    category: "Exclusive",
    isNew: true,
    hasBonus: true,
    isExclusive: true,
    description: "Exclusive TRIGUN STAMPEDE figure with special base",
  },
  {
    id: 12,
    title: "PUNI☆MOFU YUKI TU",
    image: "https://via.placeholder.com/300x300",
    price: 59.99,
    category: "Exclusive",
    isNew: true,
    hasBonus: true,
    description: "Adorable exclusive plush figure",
  },
  {
    id: 13,
    title: "MACH SUPERION & Weapon Set",
    image: "https://via.placeholder.com/300x300",
    price: 89.99,
    category: "Exclusive",
    isNew: true,
    hasBonus: true,
    description: "Superion with exclusive weapon accessories",
  },
  {
    id: 14,
    title: "Limited Edition Gundam Prime",
    image: "https://via.placeholder.com/300x300",
    price: 399.99,
    category: "Exclusive",
    isNew: false,
    hasBonus: true,
    isExclusive: true,
    description: "Ultra-rare Gundam with gold plating",
  },

  // Best Sellers (IDs 21-30)
  {
    id: 21,
    title: "VECTOR Frame Type-A",
    image: "https://via.placeholder.com/300x300",
    price: 199.99,
    category: "Best Sellers",
    rating: 4.8,
    reviews: 256,
    soldCount: 1200,
    description: "Top-selling frame model with premium build quality",
  },
  {
    id: 22,
    title: "ARPEGGIO Limited Ver.",
    image: "https://via.placeholder.com/300x300",
    price: 299.99,
    category: "Best Sellers",
    rating: 4.9,
    reviews: 189,
    soldCount: 950,
    description: "Limited version of our most popular series",
  },
  {
    id: 23,
    title: "FRAME ARMS GIRL Custom",
    image: "https://via.placeholder.com/300x300",
    price: 159.99,
    category: "Best Sellers",
    rating: 4.7,
    reviews: 312,
    soldCount: 1500,
    description: "Customizable frame arms girl model",
  },
  {
    id: 24,
    title: "Mecha Strike Series 2",
    image: "https://via.placeholder.com/300x300",
    price: 249.99,
    category: "Best Sellers",
    rating: 4.9,
    reviews: 423,
    soldCount: 2000,
    description: "Second edition of the popular mecha series",
  },

  // Plastic Models (IDs 31-40)
  {
    id: 31,
    title: "MACH SUPERION & Weapon Set",
    image: "https://via.placeholder.com/300x300",
    price: 89.99,
    category: "Plastic Models",
    isNew: true,
    series: "FRAME ARMS",
    description: "Buildable plastic model with weapon accessories",
  },
  {
    id: 32,
    title: "FRAME ARMS GIRL Custom Build",
    image: "https://via.placeholder.com/300x300",
    price: 159.99,
    category: "Plastic Models",
    isNew: true,
    series: "FRAME ARMS GIRL",
    description: "DIY plastic model kit with customization options",
  },
  {
    id: 33,
    title: "VECTOR Frame Assembly Kit",
    image: "https://via.placeholder.com/300x300",
    price: 199.99,
    category: "Plastic Models",
    isNew: false,
    series: "FRAME ARMS",
    description: "Advanced assembly kit for experienced builders",
  },
  {
    id: 34,
    title: "MEGAMI DEVICE Launcher",
    image: "https://via.placeholder.com/300x300",
    price: 129.99,
    category: "Plastic Models",
    isNew: true,
    series: "MEGAMI DEVICE",
    description: "Mechanical girl model with weapon systems",
  },

  // Featured Products (IDs 41-50)
  {
    id: 41,
    title: "Limited Edition Mecha",
    image: "https://via.placeholder.com/800x400",
    price: 199.99,
    category: "Featured",
    description: "Special featured mecha with premium packaging",
  },
  {
    id: 42,
    title: "Exclusive Figure Set",
    image: "https://via.placeholder.com/800x400",
    price: 299.99,
    category: "Featured",
    description: "Exclusive set of premium figures",
  },
  {
    id: 43,
    title: "Special Edition Collection",
    image: "https://via.placeholder.com/800x400",
    price: 399.99,
    category: "Featured",
    description: "Limited time special collection",
  },
];

// Helper functions to get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter((product) => product.category === category);
};

export const getProductById = (id) => {
  return allProducts.find((product) => product.id === parseInt(id));
};

export const getNewArrivals = (limit = 8) => {
  return allProducts
    .filter((product) => product.isNew || product.category === "New Arrivals")
    .slice(0, limit);
};

export const getExclusiveItems = (limit = 8) => {
  return allProducts
    .filter((product) => product.category === "Exclusive")
    .slice(0, limit);
};

export const getBestSellers = (limit = 8) => {
  return allProducts
    .filter((product) => product.category === "Best Sellers")
    .slice(0, limit);
};

export const getPlasticModels = (limit = 8) => {
  return allProducts
    .filter((product) => product.category === "Plastic Models")
    .slice(0, limit);
};

export const getFeaturedProducts = () => {
  return allProducts.filter((product) => product.category === "Featured");
};

// Series data
export const allSeries = [
  {
    id: 1,
    name: "BISHOUJO series",
    image: "/series-logos/bishoujo.png",
    link: "/series/bishoujo",
    description:
      "Beautiful girl statues based on illustrations by Shunya Yamashita",
  },
  {
    id: 2,
    name: "ZOIDS",
    image: "/series-logos/zoids.png",
    link: "/series/zoids",
    description:
      "Mechanical animal-shaped model kits from the popular franchise",
  },
  {
    id: 3,
    name: "ARTFX J",
    image: "/series-logos/artfx-j.png",
    link: "/series/artfx-j",
    description: "High-quality scale figures from Japanese anime and games",
  },
  {
    id: 4,
    name: "ARCANADEA",
    image: "/series-logos/arcanadea.png",
    link: "/series/arcanadea",
    description: "Original mecha model kit series with unique designs",
  },
  {
    id: 5,
    name: "MEGAMI DEVICE",
    image: "/series-logos/megami-device.png",
    link: "/series/megami-device",
    description: "Customizable female robot model kit series",
  },
  {
    id: 6,
    name: "FRAME ARMS GIRL",
    image: "/series-logos/frame-arms-girl.png",
    link: "/series/frame-arms-girl",
    description: "Anthropomorphized versions of Frame Arms mecha",
  },
  {
    id: 7,
    name: "SOUSAI SHOJO TEIEN",
    image: "/series-logos/sousai-shojo-teien.png",
    link: "/series/sousai-shojo-teien",
    description: "Customizable school girl model kit series",
  },
  {
    id: 8,
    name: "M.S.G",
    image: "/series-logos/msg.png",
    link: "/series/msg",
    description: "Modeling Support Goods - weapon and armor add-on parts",
  },
  {
    id: 9,
    name: "HEXA GEAR",
    image: "/series-logos/hexa-gear.png",
    link: "/series/hexa-gear",
    description:
      "Original mechanical model kit series with unique hex-based designs",
  },
];
