import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IProduct, IProductsData } from "../types/productTypes";
import { ProductTile } from "./ProductTile";

export const ProductsGrid = ({ data }: any) => {
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
