export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IProductProps {
  data: IProduct;
}

export interface IProductsData {
  data: Array<IProduct>;
}

export interface IProductTile {
  item: IProduct;
}
