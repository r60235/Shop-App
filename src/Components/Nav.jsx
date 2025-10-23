import React from "react";
import { Link } from "react-router-dom"; 
import { useCartContext } from '../contexts/CartContext';

export default function Nav() {
  const { cartItems } = useCartContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Shop</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/productListing">Product Listing</Link>
            <Link className="nav-link" to="/cart">
              Cart ({cartItems.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
