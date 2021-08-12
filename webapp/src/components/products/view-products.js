import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../_actions/product.actions";

const ViewProducts = () => {
  const products = useSelector((state) => state.productRegistration.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token + "token is here");
    fetchProducts(token)
      .then((resp) => {
        dispatch({ type: resp.type, payload: resp.payload });
      })
      .catch((err) => {
        console.log("no products");
        dispatch({ type: err.type, payload: err.payload });
      });
  }, []);
  const ProductsList = ({ products }) => {
    // const elements = ["one", "two", "three"];
    if (products.length > 0) {
      return (
        <ul className="row align-items-center">
          {products.map((product, index) => {
            return (
              <li key={index} className="card col-xl-3 products-card">
                <div className="card-body">
                  <h5 className="row card-title product-title">
                    {product.title}
                  </h5>
                  <p className="row card-text product-description">
                    {product.description}
                  </p>
                  <div className="row product-image">
                    <img
                      src={product.imageUrl}
                      alt="No image"
                      aria-hidden="false"
                      className="card-img w-100 shadow-1-strong align-middle rounded mb-4"
                    ></img>
                  </div>

                  <div className="row"></div>
                  <div className="row">
                    <h3>${product.price}</h3>
                  </div>

                  <div className="row">
                    <a href="#" className="btn btn-primary">
                      Add To Estimations
                    </a>
                  </div>
                </div>
              </li>
            );
          })}

          {/* Products list goes here {JSON.stringify(products)} */}
        </ul>
      );
    } else {
      return <div> products are not available</div>;
    }
  };
  return (
    <div id="view-products">
      <h3>products</h3>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {products.length > 0 ? (
              <ProductsList products={products} />
            ) : (
              "No items are available"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
