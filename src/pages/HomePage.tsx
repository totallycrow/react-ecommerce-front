import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []);

  return (
    <div>
      homepage
      <div>{state && <div>{state.title}</div>}</div>
    </div>
  );
};
