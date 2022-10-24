import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import ProductsAPI from "../services/ProductsAPI";

export const ProductsPage = () => {
  const { data, error } = useSWR("getAllProducts", ProductsAPI.getAllProducts);
  return (
    <div>
      ProductsPage
      <div className="w-2/3 m-auto grid grid-cols-3">
        {data &&
          data.map((item: any) => (
            <div>
              <Link to={"/products/" + item.id}>
                <img
                  src={item.image}
                  className="w-20 h-20"
                  alt={item.name}
                ></img>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
