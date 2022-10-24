import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex  bg-slate-400">
      <div className="m-auto">
        <ul className="flex p-2">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
