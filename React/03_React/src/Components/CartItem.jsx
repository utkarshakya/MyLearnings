import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Global/cartSlice";

export default function CartItem({ name, price }) {
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();

  function handler() {
    if (inCart) {
      setInCart(false);
      dispatch(removeFromCart());
    } else {
      setInCart(true);
      dispatch(addToCart());
    }
  }

  return (
    <>
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <button onClick={handler}>{inCart ? "Remove" : "Add"}</button>
      </div>
    </>
  );
}
