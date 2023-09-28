import React from "react";
import { useParams } from "react-router";

const Product = () => {
  const {id} = useParams();
  console.log("param", id);
  return <div>Product - {id}</div>;
};

export default Product;
