import React, { useState } from "react";
import useSWR from "swr";
import ProductsAPI from "../services/ProductsAPI";

export const CategoriesPage = () => {
  const [category, setCategory] = useState<string | null>(null);
  const { data, error } = useSWR("products/categories", ProductsAPI.get);

  console.log(category);

  const shouldFetch = category === null ? false : true;

  const categoryData = useSWR(
    shouldFetch ? "products/category/" + category : null,
    ProductsAPI.get
  );

  console.log(categoryData.data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.map((category: string) => {
        return (
          <div>
            <button onClick={() => setCategory(category)}>{category}</button>
          </div>
        );
      })}
      <div></div>
      <div>
        <div className="h-10 bg-slate-400">
          <h2>Category Items</h2>
        </div>
      </div>
      <div>
        {categoryData.data &&
          categoryData.data.map((product: any) => {
            return <div>{product.title}</div>;
          })}
      </div>
    </div>
  );
};
