import React from "react";

const NameField = ({setValue, value}) => {

  return (
    <>
      <p class="has-text-dark mt-6 m-4">Welcome! What's your name?</p>
      <input 
        class="input" 
        type="text" 
        placeholder="Enter your name"
        // value={value}
        onInput={e => setValue(e.target.value)}
      />
    </>
  );
};

export default NameField;