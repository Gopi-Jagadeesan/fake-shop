import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

function ProductDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    };
    getProduct();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>
        <>
          <div className="row d-flex justify-content-center pt-3">
            <div className="col-md-12">
              <button>
                <NavLink className="text-decoration-none text-dark" to={`/`}>
                  <div className="d-flex align-items-center m-3">
                    <i className="fa fa-long-arrow-left"></i>
                  </div>
                </NavLink>
              </button>
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img
                          id="main-image"
                          alt="product"
                          src={product.image}
                          width="250"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border p-4">
                      <div className="mt-4 mb-3">
                        <span className="text-muted text-capitalize">
                          in {product.category}
                        </span>
                        <h5 className="text-uppercase">{product.title}</h5>
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star text-warning"></i>
                        <div className="price d-flex flex-row align-items-center">
                          <big className="display-6">
                            <b>&#8377;{product.price}</b>
                          </big>
                        </div>
                      </div>
                      <p className="text-muted">{product.description}</p>
                      <div className="cart mt-4 align-items-center">
                        <Button label="Add to Cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default ProductDetails;
