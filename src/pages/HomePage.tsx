import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductsAPI from "../services/ProductsAPI";
import useSWR from "swr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBasket } from "../slices/basketSlice";
import { RootState } from "../store/store";

export const HomePage = () => {
  const featuredHomepageCategory = "women's clothing";

  const { data, error } = useSWR(
    "products/category/" + featuredHomepageCategory,
    ProductsAPI.get
  );
  const dispatch = useDispatch();
  const basketState = useSelector((state: RootState) => state.basket);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
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
              <button
                onClick={() =>
                  dispatch(
                    updateBasket({
                      id: item.id,
                      qty: 1,
                      price: item.price,
                      title: item.title,
                      image: item.image,
                    })
                  )
                }
              >
                Add To Basket
              </button>

              {basketState[item.id] && basketState[item.id].qty > 0 ? (
                <button
                  onClick={() =>
                    dispatch(
                      updateBasket({
                        id: item.id,
                        qty: -1,
                        price: item.price,
                        title: item.title,
                        image: item.image,
                      })
                    )
                  }
                >
                  Remove from basket
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
