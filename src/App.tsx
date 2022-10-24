import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/sampleSlice";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
