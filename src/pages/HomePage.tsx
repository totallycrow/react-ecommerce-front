import ProductsAPI from "../services/ProductsAPI";
import useSWR from "swr";

import { ProductsGrid } from "../components/ProductsGrid";
import { IProduct } from "../types/productTypes";

const featuredHomepageCategory = "women's clothing";

export const HomePage = () => {
  const { data, error } = useSWR(
    "products/category/" + featuredHomepageCategory,
    (arg0) => ProductsAPI.get<Array<IProduct>>(arg0)
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (error) return <div>Error Fetching Data</div>;
  if (data instanceof Error) return <div>Error Fetching Data</div>;
  return <ProductsGrid data={data} />;
};
