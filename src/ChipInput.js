// src/ChipInput.js
import React, { useState, useRef, useEffect } from "react";
import "./ChipInput.css";
import Chip from "./Chip";

const ChipInput = ({ items, setItems }) => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [highlightedChip, setHighlightedChip] = useState(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setChips((prevChips) => [...prevChips, inputValue.trim()]);
      setInputValue("");
    } else if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      // Highlight the last chip when backspace is pressed with an empty input
      setHighlightedChip(chips.length - 1);
    }
  };

  useEffect(() => {
    // Update the items list when chips change
    setItems((prevItems) => prevItems.filter((item) => !chips.includes(item)));
  }, [chips, setItems]);

  const handleChipClose = (index) => {
    setChips((prevChips) => {
      const newChips = [...prevChips];
      newChips.splice(index, 1);
      return newChips;
    });
  };

  const handleChipClick = (index) => {
    setHighlightedChip(index);
  };

  return (
    <div className="chip-input-container">
      <div className="heading">Select Users</div>
      <div className="chips">
        {chips.map((chip, index) => (
          <Chip
            key={chip}
            label={chip}
            onClose={() => handleChipClose(index)}
            highlighted={index === highlightedChip}
            onChipClick={() => handleChipClick(index)}
          />
        ))}
      </div>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type to add users..."
      />
      <ul className="item-list">
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setChips((prevChips) => [...prevChips, item])}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipInput;
