// ProductTable.js
import React from 'react';

import './product.css';

const Product = () => {
    // Sample data for the table
    const products = [
        { id: 1, name: "Wooden Chair", price: "50", category: "Furniture" },
        { id: 2, name: "Wooden Desk", price: "120", category: "Furniture" },
        { id: 3, name: "Wooden Shelf", price: "80", category: "Storage" },
        { id: 4, name: "Wooden Table", price: "150", category: "Furniture" },
    ];

    return (
        <div className="table-container">
            <h4>Product List</h4>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Product;
