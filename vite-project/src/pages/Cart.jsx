import React from "react";
import { useCartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCartContext();

  return (
    <div className="container text-center">
      <h2>Your Cart</h2>
      <hr />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-unstyled">
          {cartItems.map((item) => (
            <li key={item.id} className="mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
