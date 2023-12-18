import React, { useState } from "react";
import "./../styles/App.css";

import Search from "./Search";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [updatedFruits, setUpdatedFruits] = useState(fruits);

  function updateSearch(data) {
    setUpdatedFruits(
      fruits.filter((item) => {
        return item.toLowerCase().includes(data.toLowerCase());
      })
    );
  }

  return (
    <div>
      <h1>Search Item</h1>
      <input type="text" onChange={(e) => updateSearch(e.target.value)} />
      <Search searchResult={updatedFruits} />
    </div>
  );
};

export default App;
