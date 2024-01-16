// src/Chip.js
import React from "react";

const Chip = ({ label, onClose, highlighted, onChipClick }) => {
  return (
    <div
      className={`chip ${highlighted ? "highlighted" : ""}`}
      onClick={() => onChipClick(label)}
    >
      {label}
      <span className="chip-close" onClick={(e) => onClose(label, e)}>
        &times;
      </span>
    </div>
  );
};

export default Chip;
