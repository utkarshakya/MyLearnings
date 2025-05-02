import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.Slice2.count);

  return (
    <>
      <h1>Cart({count})</h1>
    </>
  );
}
