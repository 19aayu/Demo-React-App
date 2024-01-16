// src/App.js
import React, { useState } from "react";
import "./ChipInput"; // Use App.css for App component
import ChipInput from "./ChipInput";

const App = () => {
  const [items, setItems] = useState([
    "John Doe",
    "Jane Doe",
    "Alice Smith",
    "Bob Johnson",
    "Eva Williams",
  ]);

  return (
    <div>
      <h1></h1>
      <ChipInput items={items} setItems={setItems} />
    </div>
  );
};

export default App;
