import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CartControls } from "./CartControls";

export const ProductTile = ({ item }: any) => {
  return (
    <div>
      <Link to={"/products/" + item.id}>
        <img src={item.image} className="w-20 h-20" alt={item.name}></img>
      </Link>
      <CartControls item={item} />
    </div>
  );
};
