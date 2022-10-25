import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { CartControls } from "../components/CartControls";
import ProductsAPI from "../services/ProductsAPI";

export const ProductsPage = () => {
  const { data, error } = useSWR("products", ProductsAPI.get);
  return (
    <div>
      ProductsPage
      <div className="grid grid-cols-3">
        {data &&
          data.map((item: any) => (
            <div>
              <Link to={"/products/" + item.id}>
                <img
                  src={item.image}
                  className="w-24 h-24"
                  alt={item.name}
                ></img>
              </Link>
              <CartControls item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};
