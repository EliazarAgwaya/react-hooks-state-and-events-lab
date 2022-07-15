import React, {useState} from "react";

function Item({ name, category }) {
  const [removeFromCart, setRemoveFromCart] = useState(false)
  const itemClass = removeFromCart ? "in-cart" : ""
  function addItem (){
    setRemoveFromCart(!removeFromCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{removeFromCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
