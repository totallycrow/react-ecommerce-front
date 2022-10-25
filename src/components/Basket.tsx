import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import ProductsAPI from "../services/ProductsAPI";
import { RootState } from "../store/store";

export const Basket = () => {
  const basketState = useSelector((state: RootState) => state.basket);
  const basketItems = Object.keys(basketState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [promoInput, setPromoInput] = useState("");
  const [isDiscount, setIsDiscount] = useState(false);

  const mockPromo = "20OFF";

  //   MONITOR TOTAL PRICE
  useEffect(() => {
    console.log(basketState);
    const totals = basketItems.map(
      (item: any) => basketState[item].price * 100 * basketState[item].qty
    );
    console.log(totals);

    const sum = totals.reduce((prev, curr) => prev + curr, 0) / 100;
    console.log(sum / 100);

    if (isDiscount) {
      const discountTotals = sum - sum * 0.2;
      setTotalPrice(Number(discountTotals.toFixed(2)));
    } else setTotalPrice(sum);
  }, [basketItems, isDiscount]);

  //   MONITOR PROMO CODE
  useEffect(() => {
    console.log(promoInput.toUpperCase() === mockPromo);
    if (promoInput.toUpperCase() === mockPromo) {
      setIsDiscount(true);
    } else setIsDiscount(false);
  }, [promoInput]);

  return (
    <div className="w-2/6 bg-slate-100">
      Basket TOTALS: {totalPrice}
      <input
        type="text"
        value={promoInput}
        onChange={(e) => setPromoInput(e.target.value)}
        placeholder="PROMO CODE"
      />
      <div>
        {basketItems.map((item: any) => (
          <div>
            {basketState[item].title}
            <div>Qty: {basketState[item].qty}</div>
          </div>
        ))}
      </div>
      <button className="p-2 bg-slate-200">MOCK CHECKOUT</button>
    </div>
  );
};
