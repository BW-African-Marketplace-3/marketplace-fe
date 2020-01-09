import React from 'react';
import { Link } from "react-router-dom";
import "../../css/index.css";

function ProductList(props) {
    
    return (
        <div className="card-container">
            {props.filtered.map(item => (
                <Link to={`/`}>
                    <div className="item-card" key={item.listing_id}>
                        <img
                        className="item-list-image"
                        src={item.imageUrl}
                        alt={item.name}
                        />
                        <p>{item.name}</p>
                        <p>{`By: ${item.first_name} ${item.last_name}`}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default ProductList;