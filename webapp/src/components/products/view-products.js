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
        <div>
          {products.map((product, index) => {
            return (
              <div key={index} className="card" style={{ width: "30em" }}>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <h3 className="card-text">${product.price}</h3>
                  <a href="#" className="btn btn-primary">
                    Add To Cart
                  </a>
                </div>
              </div>
            );
          })}

          {/* Products list goes here {JSON.stringify(products)} */}
        </div>
      );
    } else {
      return <div> products are not available</div>;
    }
  };
  return (
    <div>
      <h3>products</h3>
      {products.length > 0 ? (
        <ProductsList products={products} />
      ) : (
        "No items are available"
      )}
    </div>
  );
};

export default ViewProducts;
