import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchProducts, deleteProduct } from "../_actions/product.actions";

const ViewProducts = () => {
  const products = useSelector((state) =>
    state.productRegistration.products.filter((product) => product._id)
  );
  const dispatch = useDispatch();
  const store = useStore();

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
        <ul className="row align-items-center">
          {/* <p>No of products {products.length}</p> */}
          {_products.map((product, index) => {
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
                    <div>
                      <img
                        src={product.imageUrl}
                        alt="No image"
                        aria-hidden="false"
                        className="card-img w-100 shadow-1-strong align-middle rounded mb-4"
                      ></img>
                    </div>
                  </div>

                  <div className="row my-2">
                    <h3>${product.price}</h3>
                  </div>

                  <div className="row my-2">
                    <a href="#" className="col-12 btn btn-primary">
                      Add To Estimations
                    </a>
                  </div>
                  <div className="row">
                    <button
                      href="#"
                      className="col-12 btn btn-danger"
                      onClick={() => {
                        deleteItem(product._id);
                      }}
                    >
                      Delete Product
                    </button>
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
