import React from "react";

function Form({ options, handleForm }) {
  return (
    <form onSubmit={handleForm}>
      {options.map((option) => (
        <div>
          <label htmlFor={option.labelName}>{option.labelName}</label>
          <input type={option.type} id={option.labelName} />
        </div>
      ))}
    </form>
  );
}

export default Form;
