import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateBasket } from "../slices/basketSlice";
import { RootState } from "../store/store";
import { CartControls } from "./CartControls";

export const ProductTile = ({ item }: any) => {
  const dispatch = useDispatch();
  const basketState = useSelector((state: RootState) => state.basket);
  return (
    <div>
      <Link to={"/products/" + item.id}>
        <img src={item.image} className="w-20 h-20" alt={item.name}></img>
      </Link>
      <CartControls item={item} />
    </div>
  );
};
