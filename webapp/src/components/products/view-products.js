import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import Invoice from "./invoice";
import { fetchProducts, deleteProduct } from "../_actions/product.actions";
import { productsConstants } from "../_constants";

const ViewProducts = () => {
  const products = useSelector((state) =>
    state.productRegistration.products.filter((product) => product._id)
  );
  const role = useSelector((state) => state.userAuth.role);

  const dispatch = useDispatch();
  const store = useStore();

  const submitEstimations = (product) => {
    // console.log("estimations :" + product);
    dispatch({ type: productsConstants.PRODUCT_ESTIMATIONS, payload: product });
    dispatch({ type: productsConstants.SHOW_INVOICE, payload: true });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    getProducts(token);
    console.log(store.getState());
  }, []);
  const getProducts = (token) => {
    fetchProducts(token)
      .then((resp) => {
        dispatch({ type: resp.type, payload: resp.payload });
      })
      .catch((err) => {
        console.log("no products");
        dispatch({ type: err.type, payload: err.payload });
      });
  };
  const deleteItem = (productId) => {
    const token = localStorage.getItem("token");
    const _deleteProduct = {
      token,
      productId,
    };
    deleteProduct(_deleteProduct)
      .then((res) => {
        if (res) {
          getProducts(token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ProductsList = ({ products }) => {
    const _products = products.filter((product) => product._id);
    if (_products.length > 0) {
      return (
        <div className="col-xl-9 col-lg-9">
          <h1 className="d-flex justify-content-center">Available Products</h1>
          <ul className=" row align-items-center" id="view-products">
            {/* <p>No of products {products.length}</p> */}
            {_products.map((product, index) => {
              return (
                <li
                  key={index}
                  className="card col-xl-3 col-lg-4 products-card"
                >
                  <div className="card-image-top">
                    <div className="row product-image">
                      <img
                        src={product.imageUrl}
                        alt="No image"
                        aria-hidden="false"
                        className="card-img w-100 shadow-1-strong align-middle rounded mb-4"
                      ></img>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row my-2">
                      <div className="col-6">
                        <h3 className="card-title">${product.price}</h3>
                      </div>
                    </div>
                    <div className="row my-2">
                      {/* <div className="col-5"> */}
                      <button
                        type="submit"
                        href="#"
                        onClick={() => submitEstimations(product)}
                        className="btn col-5 btn-primary text-capitalize estimations-btn"
                      >
                        <i className="fa fa-plus ml-n3 mr-2 plus-icon"></i>
                        Estimate
                      </button>
                      {/* </div> */}
                      <div className="col-6 estmate-count">
                        <input
                          id="spinner"
                          type="number"
                          value="1"
                          onChange={() => console.log("increased")}
                          min="1"
                          max="10"
                          step="1"
                          data-decimals="0"
                        />
                      </div>
                    </div>
                    <h5 className="col-11 card-title product-title">
                      {product.title}
                    </h5>
                    <p className="col-12 card-text product-description">
                      {product.description}
                    </p>
                    {role?.toLowerCase() === "elite" ? (
                      <div className="row">
                        <button
                          className="col-6 btn btn-danger"
                          onClick={() => {
                            deleteItem(product._id);
                          }}
                        >
                          {/* <i className="fas fa-trash-alt"></i> */}
                          <i className="fa fa-trash mx-2" aria-hidden="true"></i>
                          Delete Product
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              );
            })}

            {/* Products list goes here {JSON.stringify(products)} */}
          </ul>
        </div>
      );
    } else {
      return <div> products are not available</div>;
    }
  };
  return (
    <div className="row">
      {products.length > 0 ? (
        <ProductsList products={products} />
      ) : (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="d-flex justify-content-center"> No Products</h1>
        </div>
      )}
      <Invoice />
    </div>
  );
};

export default ViewProducts;
