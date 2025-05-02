import React, { useState } from "react";
import CartItem from "./CartItem";

export default function Body() {
  const carts = [
    { id: 1, name: "Pie", price: 349 },
    { id: 2, name: "Hamburger", price: 199 },
    { id: 3, name: "Hotdog", price: 299 },
    { id: 4, name: "Sushi", price: 789 },
  ];

  return (
    <>
      <div style={{ display: "flex", gap: "40px" }}>
        {carts.map((value) => {
          return (
              <CartItem key={value.id} name={value.name} price={value.price}></CartItem>
          );
        })}
      </div>
    </>
  );
}
