import React, { useState, useMemo } from "react";
import { products } from "./data";

function MainPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ DERIVED STATE
  const priceSummary = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discount = subtotal >= 1000 ? subtotal * 0.1 : 0;
    const taxedAmount = subtotal - discount;
    const tax = taxedAmount * 0.05;
    const total = taxedAmount + tax;

    return { subtotal, discount, tax, total };
  }, [cart]);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h3>Cart</h3>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <hr />

      <h3>Price Summary</h3>
      <p>Subtotal: ₹{priceSummary.subtotal}</p>
      <p>Discount: ₹{priceSummary.discount}</p>
      <p>Tax: ₹{priceSummary.tax.toFixed(2)}</p>
      <p><strong>Total: ₹{priceSummary.total.toFixed(2)}</strong></p>
    </div>
  );
}

export default MainPage;
