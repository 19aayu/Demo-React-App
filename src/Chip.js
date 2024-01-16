// Chip.js
import React from "react";
import "./ChipInput.css"; // Adjust the import based on your file structure

const Chip = ({ label, onClose, highlighted, onChipClick }) => {
  const handleChipClose = (e) => {
    e.stopPropagation(); // Prevents the click event from propagating to the parent (chips container)
    onClose();
  };

  return (
    <div
      className={`chip ${highlighted ? "highlighted" : ""}`}
      onClick={onChipClick}
    >
      <span>{label}</span>
      <span className="chip-close" onClick={handleChipClose}>
        X
      </span>
    </div>
  );
};

export default Chip;
