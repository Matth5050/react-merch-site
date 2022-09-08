import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewItemForm(props){

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Create" />
    </React.Fragment>

  );

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      type: event.target.type.value, 
      title: event.target.title.value, 
      description: event.target.description.value, 
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;