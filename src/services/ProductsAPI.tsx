import axios from "axios";
import { IProduct } from "../types/productTypes";

export interface IFetchedData {
  [id: string]: IProduct;
}

const host = "https://fakestoreapi.com/";

export default class ProductsAPI {
  // public static async getAllProducts() {
  //   console.log("start");
  //   console.log(this.get);
  //   const data = await ProductsAPI.get("products");
  //   console.log(data);
  //   return data;
  // }

  public static async get<T>(endpoint: string): Promise<T | Error> {
    const targetURL = host + endpoint;
    console.log(targetURL);
    try {
      const data = await axios.get(targetURL).then((res) => res.data);
      return data;
    } catch (err) {
      return err as Error;
    }
  }

  public static async getMultipleProducts(ids: Array<string>) {
    const targetURL = "products/";
    const combinedURL = host + targetURL;

    try {
      const fetchedData = await axios.all(
        ids.map((id: string) =>
          axios.get(combinedURL + id).then((res) => res.data)
        )
      );
      let formattedData: IFetchedData = {};
      fetchedData.forEach((item) => {
        console.log("FETCHED DATA MAP");
        console.log(item);

        formattedData[item.id] = item;
      });

      console.log(formattedData);
      return formattedData;
    } catch (err) {
      return err;
    }
  }

  public static fetcher = (url: string) =>
    axios.get(url).then((res) => res.data);
}
// https://fakestoreapi.com/products/categories
