import React from "react";
import Banner from "../components/Banner";
import Products from "./ProductList";

const HomePage = () => {
  return (
    <>
      <div className="container px-0 pt-5 mt-5">
        <Banner />
        <Products />
      </div>
    </>
  );
};

export default HomePage;
