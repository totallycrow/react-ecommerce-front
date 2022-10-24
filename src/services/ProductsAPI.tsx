import axios from "axios";

const host = "https://fakestoreapi.com/";

export default class ProductsAPI {
  public static async getAllCategories() {
    const targetURL = "products/categories";
    const combinedURL = host + targetURL;
    console.log(combinedURL);
    const data = await axios.get(combinedURL).then((res) => res.data);
    console.log(data);
    return data;
  }

  public static async getAllProducts() {
    const targetURL = "products/";
    const combinedURL = host + targetURL;
    console.log(combinedURL);
    const data = await axios.get(combinedURL).then((res) => res.data);
    console.log(data);
    return data;
  }

  public static async getAllProductsInCategory(productCategory: string) {
    const targetURL = "products/category/" + productCategory;
    const combinedURL = host + targetURL;
    console.log(combinedURL);
    const data = await axios.get(combinedURL).then((res) => res.data);
    console.log(data);
    return data;
  }

  public static async getSingleProduct(productId: string) {
    const targetURL = "products/" + productId;
    const combinedURL = host + targetURL;
    console.log(combinedURL);
    const data = await axios.get(combinedURL).then((res) => res.data);
    console.log(data);
    return data;
  }

  public static fetcher = (url: any) => axios.get(url).then((res) => res.data);
}
// https://fakestoreapi.com/products/categories
