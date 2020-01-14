import React from 'react';
import { Link } from "react-router-dom";
import "../../css/index.css";

function ProductList(props) {
    
    return (
        <div className="card-container">
            {props.filtered.map(item => (
                
                    <div className="item-card" key={item.listing_id}>
                        <img
                        className="item-list-image"
                        src={"https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"}
                        alt={item.name}
                        />
                        <p className="item-name">{item.name}</p>
                        <p className="item-by">{`By: ${item.first_name} ${item.last_name}`}</p>
                        <p className="item-price">{`$${item.price}`}</p>
                    </div>
                
            ))}
        </div>

    )
}

export default ProductList;