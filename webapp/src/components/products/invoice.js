import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import jsPDF from "jspdf";
import { productsConstants } from "../_constants";

const Invoice = () => {
  const [style, setStyle] = useState("menu");
  const [menuStatus, setMenuStatus] = useState("open");
  // const [subTotalPrice, setSubTotalPrice] = useState(0);

  const estimatedProducts = useSelector(
    (state) => state.productRegistration.estimatedProducts
  );
  const showInvoice = useSelector(
    (state) => state.productRegistration.showInvoice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (estimatedProducts.length > 0) {
      setStyle("menu active");
      setMenuStatus("open");
    }
  }, []);

  const handleClick = (menuStatus) => {
    console.log();
    if (menuStatus === "open") {
      dispatch({ type: productsConstants.SHOW_INVOICE, payload: false });
      setMenuStatus("close");
      setStyle("menu active");
    } else {
      dispatch({ type: productsConstants.SHOW_INVOICE, payload: true });
      setMenuStatus("open");
      setStyle("menu");
    }
  };
  const subTotalPrice = (products) => {
    let _subTotal = 0;
    estimatedProducts.map((item) => {
      _subTotal = _subTotal + item.price * item.quantity;
    });
    return _subTotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const totalQuanty = () => {
    let quantity = 0;
    estimatedProducts.map((item) => {
      quantity = item.quantity + quantity;
    });
    return quantity;
  };

  const saveInvoicePdf = () => {
    const doc = new jsPDF();
    doc.html(
      `<html><head><title>Estimations</title></head><body>` +
        document.getElementById("estimation-container").innerHTML +
        `</body></html>`
    );
    doc.save("Estimations.pdf");
  };
  return (
    <div className={showInvoice ? "side-drawer open" : "side-drawer"}>
      <div id="estimation-container">
        <div
          className="d-flex justify-content-between bg-info text-white pa-4 fixed  z-999"
          style={{
            height: "88px",
          }}
        >
          <div className="p-2 bd-highlight">
            {" "}
            <div className="d-block align-middle">
              <span className="d-flex align-middle text-white">
                <h2 className="text-white" style={{ lineHeight: "2.2" }}>
                  Estimations Summary({totalQuanty()})
                </h2>
              </span>
            </div>
          </div>

          <div className="p-2 bd-highlight">
            <span
              className="btn"
              onClick={() => handleClick(menuStatus)}
              style={{ lineHeight: "4.2" }}
            >
              <i
                className="fa fa-times-circle text-white"
                style={{ fontSize: "2.5rem", verticalAlign: "-0.25em" }}
              ></i>
            </span>
          </div>
        </div>

        <div className="card  invoice-products-container">
          <ul className="list-group list-group-flush" id="view-products">
            {estimatedProducts.map((product, index) => {
              return (
                <li
                  key={index}
                  className="d-flex list-group-item justify-content-between"
                >
                  <h5 className="col-7 card-title">{product.title}</h5>
                  <h5 className="col-2 card-title">{product.quantity}</h5>
                  <h5 className="col-3 card-title">
                    {parseFloat(product.price * product.quantity).toFixed(2)}
                  </h5>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mt-5">
            <h1 className="ml-1">Sub Total</h1>
            <h3 className="mr-3">{subTotalPrice(estimatedProducts)}</h3>
          </div>

          <div
            className="btn col-10 print-estimations"
            onClick={saveInvoicePdf}
          >
            <i className="fa fa-print mx-3 print-icon"></i>Print Estimations
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
