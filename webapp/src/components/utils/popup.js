import React from "react";
import "..//../styles/popup.scss";

const Popup = (props) => {
  const closePopup = () => {
    props.showDialog(false);
  };
  return (
    <div
      className="modal-bootstrap  popup-dialog fade show popup-box"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: props.width,
      }}
      role="alert"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <i
              class="fa fa-exclamation-triangle text-danger"
              aria-hidden="true"
            ></i>
            <h5 className="modal-title text-danger">{props.title}</h5>
            <button
              type="button"
              className="close text-danger"
              data-dismiss="modal"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>{props.content}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closePopup}
            >
              Close
            </button>
            {/*     <button type="button" className="btn btn-primary">
              Save changes
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
