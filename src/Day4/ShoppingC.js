import React, { useState } from "react";

export default function ShoppingC() {
  let [items] = useState([]);
  let [itemName, setItemName] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [unitCost, setUnitCost] = useState(0);
  function handleAddItem() {
    let newItem = { name: itemName, Quantity: quantity, Unit_Cost: unitCost };
    items.push(newItem);
    console.log(
      items.map((e) => {
        return e;
      })
    );
  }
  function totalCost() {}
  return (
    <div>
      <h1>Shopping</h1>
      <div>
        <input
          type="text"
          placeholder="Item"
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Unit Cost"
          onChange={(e) => setUnitCost(parseFloat(e.target.value))}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <h3>Bill</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index + 1}. {item.name} {item.Quantity} {item.Unit_Cost} ={item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
