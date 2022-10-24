import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout/Layout";
import App from "./App";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CategoriesPage } from "./pages/CategoriesPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/categories" element={<CategoriesPage />}></Route>

            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} /> */}
            {/* </Route> */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
