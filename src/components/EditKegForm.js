import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: keg.id
    });
  }
  return(
    <>
    <ReusableForm
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update Keg" />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;