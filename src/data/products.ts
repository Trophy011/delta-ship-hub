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
    name: "iPhone 15 Pro Max",
    category: "Electronics",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024001",
    status: "delivered"
  },
  {
    id: "2",
    name: "Diamond Tennis Bracelet",
    category: "Jewelry",
    price: 850,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024002",
    status: "delivered"
  },
  {
    id: "3",
    name: "Nike Air Jordan Sneakers",
    category: "Footwear",
    price: 180,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024003",
    status: "in_transit"
  },
  {
    id: "4",
    name: "Rolex Submariner Watch",
    category: "Watches",
    price: 450,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024004",
    status: "delivered"
  },
  {
    id: "5",
    name: "Louis Vuitton Handbag",
    category: "Bags",
    price: 320,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024005",
    status: "processing"
  },
  {
    id: "6",
    name: "Designer Silk Dress",
    category: "Clothing",
    price: 280,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024006",
    status: "in_transit"
  },
  {
    id: "7",
    name: "Premium Leather Wallet",
    category: "Accessories",
    price: 120,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024007",
    status: "delivered"
  },
  {
    id: "8",
    name: "Vintage Sunglasses",
    category: "Accessories",
    price: 101,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
    trackingCode: "SS2024008",
    status: "processing"
  }
];

// Calculate total value
export const totalValue = products.reduce((sum, product) => sum + product.price, 0);