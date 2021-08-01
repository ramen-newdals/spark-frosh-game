import React from "react";

const FroshGroupDropdown = ({ setValue, value }) => {

  const froshGroups = [
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Zeta",
    "Theta",
    "Iota",
    "Kappa",
    "Lambda",
    "Nu/Ni",
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

  return (
    <>
    <p class="has-text-dark m-5">Select your F!rosh Group:</p>
    <div class="select has-text-dark is-warning">
      <select
        value={value}
        onInput={e => setValue(e.target.value)}>
        {froshGroups.map((text, idx) => <option>{text}</option>)}
      </select>
    </div>
    </>
  );
};

export default FroshGroupDropdown;