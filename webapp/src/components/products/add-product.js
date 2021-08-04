import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerProduct } from "../_actions/product.actions";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(token + "token is here");
  }, []);

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
          console.log(resp);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <strong> Please enter your product details here </strong>
      <form name="form" onSubmit={handleSubmit}>
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
          <Link to="/signin" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
