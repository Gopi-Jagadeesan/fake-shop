import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

function ProductList(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategories();
    getProdcuts();
  }, []);

  let componentMounted = true;
  const getProdcuts = async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      const data = await response.json();
      setProductData(data);
      setFilter(data);
    }
    setIsLoading(false);
    return () => {
      componentMounted = false;
    };
  };

  const getCategories = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (componentMounted) {
      const data = await response.json();
      setCategoryData(data);
    }
    setIsLoading(false);
    return () => {
      componentMounted = false;
    };
  };

  const filterProduct = (category) => {
    const updateList = productData.filter((x) => x.category === category);
    setFilter(updateList);
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <div className="row">
        <>
          <div className="col-md-3 my-3">
            <div className="position-sticky" style={{ top: "100px" }}>
              <Button onClick={() => setFilter(productData)} label="All" />
              {categoryData &&
                categoryData.length >= 0 &&
                categoryData.map((value) => (
                  <Button
                    onClick={() => filterProduct(value)}
                    label={value.charAt(0).toUpperCase() + value.slice(1)}
                  />
                ))}
            </div>
          </div>

          <div className="col-md-9 py-md-3">
            <div className="row">
              {filter.map((product) => {
                return (
                  <div
                    className="col-6 col-md-6 col-lg-4 mb-3"
                    key={product.id}
                  >
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="m-3"
                        style={{
                          height: "300px",
                          width: "auto",
                          objectFit: "contain"
                        }}
                        alt={product.title}
                      />
                      <div className="m-3 mb-0">
                        <small className="card-title">
                          <Link
                            className="stretched-link"
                            to={`/product/${product.id}`}
                          >
                            {product.title.substring(0, 50)}...
                          </Link>
                        </small>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <div className="m-3 text-center">
                          <b>&#8377;{product.price}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default ProductList;
