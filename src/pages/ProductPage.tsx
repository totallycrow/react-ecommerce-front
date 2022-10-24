import React from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  let { productId } = useParams();

  return <div>ProductPage: {productId}</div>;
};
