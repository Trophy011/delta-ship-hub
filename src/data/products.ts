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
    name: "Jewelries",
    category: "Jewelry",
    price: 1200,
    image: "",
    trackingCode: "SS2024001",
    status: "in_transit"
  },
  {
    id: "2",
    name: "Bags",
    category: "Bags",
    price: 1000,
    image: "",
    trackingCode: "SS2024002",
    status: "in_transit"
  },
  {
    id: "3",
    name: "iPhone 14 pro max",
    category: "Electronics",
    price: 1800,
    image: "",
    trackingCode: "SS2024003",
    status: "in_transit"
  },
  {
    id: "4",
    name: "Shoes",
    category: "Shoes",
    price: 500,
    image: "",
    trackingCode: "SS2024004",
    status: "in_transit"
  }
];

// Calculate total value
export const totalValue = products.reduce((sum, product) => sum + product.price, 0);