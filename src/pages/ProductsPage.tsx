import { Link } from "react-router-dom";
import useSWR from "swr";
import { CartControls } from "../components/CartControls";
import ProductsAPI from "../services/ProductsAPI";
import { IProduct } from "../types/productTypes";

export const ProductsPage = () => {
  // const { data, error } = useSWR("products", ProductsAPI.get<string>) -> can't put <type> on method with SWR?
  const { data, error } = useSWR("products", (arg0) =>
    ProductsAPI.get<Array<IProduct>>(arg0)
  );
  if (error) return <div>Error Fetching Data</div>;
  if (data instanceof Error) return <div>Error Fetching Data</div>;
  return (
    <div>
      ProductsPage
      <div className="grid grid-cols-3">
        {data &&
          data.map((item: IProduct) => (
            <div>
              <Link to={"/products/" + item.id}>
                <img
                  src={item.image}
                  className="w-24 h-24"
                  alt={item.title}
                ></img>
              </Link>
              <CartControls item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};
