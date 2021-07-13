import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ViewProducts = () => {
  const products = useSelector((state) => state.productRegistration.products);
  useEffect(() => {
    console.log("products" + JSON.stringify(products));
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
