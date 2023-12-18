import React, { useState } from "react";
import "./../styles/App.css";

import Search from "./Search";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Kiwi",
  "Cherry",
  "Peach",
  "Plum",
  "Raspberry",
  "Blackberry",
  "Cantaloupe",
  "Pomegranate",
  "Papaya",
  "Coconut",
  "Lemon",
  "Lime",
  "Avocado",
  "Grapefruit",
  "Apricot",
  "Nectarine",
  "Fig",
  "Pear",
  "Peach",
  "Dragon Fruit",
  "Passion Fruit",
  "Guava",
  "Cranberry",
  "Raspberry",
  "Blackcurrant",
  "Melon",
  "Honeydew",
  "Clementine",
  "Tangerine",
  "Kumquat",
  "Persimmon",
  "Star Fruit",
  "Lychee",
  "Jackfruit",
  "Mulberry",
  "Gooseberry",
  "Rambutan",
  "Kiwi",
  "Soursop",
  "Quince",
  "Durian",
];

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
