export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  trackingCode: string;
  status: "in_transit" | "delivered" | "processing";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Diamond Engagement Ring",
    category: "Jewelry",
    price: 2500,
    image: "",
    trackingCode: "SS2024001",
    status: "in_transit"
  },
  {
    id: "2", 
    name: "Designer Evening Dress",
    category: "Clothes",
    price: 450,
    image: "",
    trackingCode: "SS2024002",
    status: "in_transit"
  },
  {
    id: "3",
    name: "Louis Vuitton Handbag",
    category: "Bags",
    price: 1200,
    image: "",
    trackingCode: "SS2024003", 
    status: "in_transit"
  },
  {
    id: "4",
    name: "iPhone 15 Pro Max",
    category: "Electronics",
    price: 1199,
    image: "",
    trackingCode: "SS2024004",
    status: "in_transit"
  },
  {
    id: "5",
    name: "Nike Air Jordan Sneakers",
    category: "Shoes",
    price: 180,
    image: "",
    trackingCode: "SS2024005",
    status: "in_transit"
  },
  {
    id: "6",
    name: "Rose Bouquet Premium",
    category: "Flowers",
    price: 85,
    image: "",
    trackingCode: "SS2024006",
    status: "in_transit"
  },
  {
    id: "7",
    name: "Silk Business Suit",
    category: "Clothes", 
    price: 680,
    image: "",
    trackingCode: "SS2024007",
    status: "in_transit"
  },
  {
    id: "8",
    name: "Pearl Necklace Set",
    category: "Jewelry",
    price: 320,
    image: "",
    trackingCode: "SS2024008",
    status: "in_transit"
  }
];

// Calculate total value
export const totalValue = products.reduce((sum, product) => sum + product.price, 0);