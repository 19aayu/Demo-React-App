// ChipInput.js
import React, { useState, useRef } from "react";
import "./ChipInput.css"; // Adjust the import based on your file structure
import Chip from "./Chip";

const ChipInput = ({ items, setItems }) => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [highlightedChip, setHighlightedChip] = useState(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  const handleChipClick = (index) => {
    setHighlightedChip(index);
  };

  const handleChipClose = (index) => {
    const removedChip = chips[index];
    const newChips = chips.filter((_, i) => i !== index);
    setChips(newChips);
    setItems([...items, removedChip]); // Add the removed chip back to the list
    setHighlightedChip(null);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      // Handle backspace to delete the last chip
      const lastChipIndex = chips.length - 1;
      handleChipClose(lastChipIndex);
    }
  };

  const handleAddChip = (item) => {
    setChips([...chips, item]);
    setItems(items.filter((i) => i !== item));
    setInputValue("");
  };

  return (
    <div className="chip-input-container" onClick={handleInputFocus}>
      <h1>Select Users</h1>
      <div className="chips">
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            onClose={() => handleChipClose(index)}
            highlighted={highlightedChip === index}
            onChipClick={() => handleChipClick(index)}
          />
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        ref={inputRef}
      />
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} onClick={() => handleAddChip(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipInput;
