import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateBasket } from "../slices/basketSlice";
import { RootState } from "../store/store";
import { ProductTile } from "./ProductTile";

export const ProductsGrid = ({ data }: any) => {
  const dispatch = useDispatch();
  const basketState = useSelector((state: RootState) => state.basket);
  console.log("Products grid");
  console.log(data);

  return (
    <div>
      <div className="w-2/3 m-auto grid grid-cols-3">
        {data && data.map((item: any) => <ProductTile item={item} />)}
      </div>
    </div>
  );
};
