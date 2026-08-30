import React from "react";
import productCard from "./ProductCard";

function App() {
  const product = {
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    price: 2999,
    image: "https://via.placeholder.com/250x150",
  };

  return (
    <div>
      <h1>Products</h1>
      <ProductCard product={product} />
    </div>
  );
}

export default App;
