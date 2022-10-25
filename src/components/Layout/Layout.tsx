import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import { PromoBar } from "../PromoBar";
import { Basket } from "../Basket";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <PromoBar />
      <Navbar />
      <div className="flex flex-row w-screen">
        <div className="flex m-auto w-full m-auto">
          {" "}
          <div className="w-4/6">{children}</div>
          <Basket />
        </div>
      </div>

      <Footer />
    </div>
  );
};
