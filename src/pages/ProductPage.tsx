import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { CartControls } from "../components/CartControls";
import ProductsAPI from "../services/ProductsAPI";

export const ProductPage = () => {
  const { productId } = useParams();
  const { data, error } = useSWR("products/" + productId, ProductsAPI.get);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <div>
        <p>Price: {data.price}</p>
        <p>Description: {data.description}</p>
        <p>Category: {data.category}</p>
        <img src={data.image} alt={data.title} className="w-40 h-40" />
        <CartControls item={data} />
      </div>
    </div>
  );
};
