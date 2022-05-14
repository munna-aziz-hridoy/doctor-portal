import React from "react";

const PrimaryButton = ({ children, disable }) => {
  return (
    <button
      disabled={disable}
      className="btn btn-primary hover:bg-accent bg-gradient-to-r from-secondary to-primary text-white font-semibold uppercase tracking-wider"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
