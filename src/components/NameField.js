import React from "react";

const NameField = ({setValue, value}) => {

  return (
    <>
      <p class="has-text-dark m-5">Hey there, what's your name?</p>
      <input 
        class="input m-2" 
        type="text" 
        placeholder="Enter your name"
        value={value}
        onInput={e => setValue(e.target.value)}
      />
    </>
  );
};

export default NameField;