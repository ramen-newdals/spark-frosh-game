import React from "react";

const FroshGroupDropdown = ({ setValue, value }) => {



  return (
    <>
    {/* <p class="has-text-dark m-5">Select your F!rosh Group:</p> 
     TODO decide whether to keep the text above */}
    <div class="select m-6 has-text-dark">
      <select
        value={value}
        onInput={e => setValue(e.target.value)}>
          <option default>Select your F!rosh group</option>
        {froshGroups.map((text, idx) => <option>{text}</option>)}
      </select>
    </div>
    </>
  );
};

export default FroshGroupDropdown;

export const froshGroups = [
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Zeta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Nu",
  "Omicron",
  "Pi",
  "Rho",
  "Sigma",
  "Tau",
  "Upsilon",
  "Phi",
  "Chi",
  "Psi",
  "Omega"
];