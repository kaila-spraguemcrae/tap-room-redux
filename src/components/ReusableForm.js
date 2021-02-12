
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <div className="card col-md-6 offset-md-3 mt-5 p-3">
        <form onSubmit={props.formSubmissionHandler} >
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="name" placeholder="Product Name" defaultValue="test" />
            <label for="name">Product Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="brand" placeholder="Brand Name" defaultValue="test" />
            <label for="brand">Brand Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="alcoholContent" placeholder="Alcohol Content" defaultValue="test" />
            <label for="Alcohol Content">Alcohol Content</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" name="price" placeholder="Price" defaultValue="5" />
            <label for="price">Price</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="flavor" placeholder="Flavor" defaultValue="test" />
            <label for="flavor">Flavor</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" name="description" placeholder="Description" defaultValue="test" />
            <label for="description">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number"className="form-control"  name="quantity" placeholder="Quantity in Pints" defaultValue="124" />
            <label for="quantity">Quantity in Pints</label>
          </div>
          <button type="submit" className="btn btn-secondary">{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;