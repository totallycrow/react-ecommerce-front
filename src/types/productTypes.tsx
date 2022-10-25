export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface IBasketItem {
  itemId: string;
  qty: number;
}
