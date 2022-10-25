import ProductsAPI from "../services/ProductsAPI";
import useSWR from "swr";

import { ProductsGrid } from "../components/ProductsGrid";

export const HomePage = () => {
  const featuredHomepageCategory = "women's clothing";

  const { data, error } = useSWR(
    "products/category/" + featuredHomepageCategory,
    ProductsAPI.get
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <ProductsGrid data={data} />;
};
