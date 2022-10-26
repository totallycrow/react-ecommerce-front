import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import App from "../App";
import { ContactPage } from "../pages/ContactPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CategoriesPage } from "../pages/CategoriesPage";
import { ProductPage } from "../pages/ProductPage";

export const Routing = (props: any) => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="products" element={<ProductsPage />}></Route>
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />}></Route>
      </Route>
    </Routes>
  );
};
