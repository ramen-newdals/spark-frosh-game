import React from "react";

const TextField = ({label, value, setValue, placeholder}) => {

  //TODO sanitize input to prevent 
  //hackers from inserting code

  return (
    <>
      <p class="has-text-dark m-5">{label}</p>
      <input 
        class="input" 
        type="text" 
        placeholder={placeholder}
        value={value} 
        onInput={e => setValue(e.target.value)}
      />
    </>
  );
};

export default TextField;