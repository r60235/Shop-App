import React from 'react';
import { useCartContext } from '../contexts/CartContext';

export default function ProductListing() {
  const { addToCart } = useCartContext();

  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

  return (
    <div className="container">
      <h1>Product Listing</h1>
      <ul className="list-unstyled">
        {products.map((product) => (
          <li key={product.id} className="mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
