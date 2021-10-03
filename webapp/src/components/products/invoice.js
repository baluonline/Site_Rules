import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

const Invoice = () => {
  let drawerClasses = "side-drawer";
  const estimatedProducts = useSelector(
    (state) => state.productRegistration.estimatedProducts
  );
  if (estimatedProducts.length > 0) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className="col-3">
      {/* <h3 className="d-flex justify-content-center">Invoice</h3>
      <div className="d-flex" id="estimation-container">
        <h5>Bigger Bowl Estimations </h5>
        <div className="">
          <p>count:{estimatedProducts.length}</p>
          <ul className="align-items-center" id="view-products">
            {estimatedProducts.map((product, index) => {
              return <li>{product.title}</li>;
            })}
          </ul>
      </div>
        </div> */}
      <div className={drawerClasses}>
        <h1>Hello, I'm sliding!</h1>
      </div>
    </div>
  );
};

export default Invoice;
