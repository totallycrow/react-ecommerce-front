import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductsAPI from "../services/ProductsAPI";
import useSWR from "swr";

export const HomePage = () => {
  const { data, error } = useSWR(
    "women's clothing",
    ProductsAPI.getAllProductsInCategory
  );

  const [state, setState] = useState([]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data[0].title}
      <div></div>
    </div>
  );
};
