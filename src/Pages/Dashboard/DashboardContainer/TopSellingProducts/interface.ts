export interface Product {
  name: string;
  price: string;
  quantity: string;
  amount: string;
}

export interface TopSellingProductsProps {
  data?: Product[];
}
