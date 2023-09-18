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

/* <Form
        options={[
          { labelName: "User name", type: "text" },
          { labelName: "Email", type: "text" },
          { labelName: "Price - Low to high", type: "radio" },
        ]}
      /> */

export default Form;
