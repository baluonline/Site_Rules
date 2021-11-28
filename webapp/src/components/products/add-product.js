import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { registerProduct } from "../_actions/product.actions";
import Popup from "../utils/popup";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    quantity:1
  });
  const registeredProductSuccess = useSelector(
    (state) => state.productRegistration.registeredProductSuccess
  );
  const [submitted, setSubmitted] = useState(false);
  const [addProductError, setAddProductError] = useState(null);
  const [addProductSuccess, setAddProductSuccess] = useState(null);
  const [isErrorDialog, setIsErrorDialog] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (product.title && product.description && product.price) {
      const data = {
        product,
        token: token,
      };
      registerProduct(data)
        .then((resp) => {
          dispatch({ type: resp.type, payload: resp.message });
          togglePopup(false);
        })
        .catch((err) => {
          setAddProductError(err.response.data.message);
          // console.log(err);
          togglePopup(true);
        });
    }
  };
  const togglePopup = (openDialog) => {
    setIsErrorDialog(openDialog);
  };
  return (
    <div
      id="add-products"
      className="conatiner col-12 d-flex justify-content-center mt-5"
    >
      <div className="col-6 products-container">
        <h3 className="col-12 d-flex justify-content-center">
          Register Products
        </h3>
        <form className="col-12" name="form" onSubmit={handleSubmit}>
          {registeredProductSuccess ? (
            <div className="col-12">
              <div className="alert alert" role="alert">
                <h4 className="col-10 product-success">
                  {registeredProductSuccess}
                </h4>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label>Product Title</label>
            <input
              type="text"
              name="title"
              value={product.title || ""}
              onChange={handleChange}
              className={
                "form-control" +
                (submitted && !product.title ? " is-invalid" : "")
              }
            />
            {submitted && !product.title && (
              <div className="invalid-feedback">Product Title is required</div>
            )}
          </div>
          <div className="form-group">
            <label>Product Description</label>
            <input
              type="text"
              name="description"
              value={product.description || ""}
              onChange={handleChange}
              className={
                "form-control" +
                (submitted && !product.description ? " is-invalid" : "")
              }
            />
            {submitted && !product.description && (
              <div className="invalid-feedback">
                Product Description is required
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Product Image url</label>
            <input
              type="text"
              name="imageUrl"
              value={product.imageUrl || ""}
              onChange={handleChange}
              className={
                "form-control" +
                (submitted && !product.imageUrl ? " is-invalid" : "")
              }
            />
            {submitted && !product.imageUrl && (
              <div className="invalid-feedback">
                Product Image Url is required
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Estimated Price</label>
            <input
              type="text"
              name="price"
              value={product.price || ""}
              onChange={handleChange}
              className={
                "form-control" +
                (submitted && !product.price ? " is-invalid" : "")
              }
            />
            {submitted && !product.price && (
              <div className="invalid-feedback">Product Price is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <Link to="/signin" className="btn btn-danger mx-3">
              Cancel
            </Link>
          </div>
        </form>
      </div>

      {isErrorDialog && (
        <Popup
          title="Add Product Failed"
          content={addProductError}
          showDialog={togglePopup}
        />
      )}
    </div>
  );
};

export default AddProduct;
