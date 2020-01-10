import React from 'react';
import { Link } from "react-router-dom";
import "../../css/index.css";

function ProductRegions(props) {

    return(
        <section className="region-selection">
            <h1>Select Region To View Listings</h1>
            <div>
                <Link exact to="/region/1" >Region 1</Link>
                <Link exact to="/region/2" >Region 2</Link>
                <Link exact to="/region/3" >Region 3</Link>
                <Link exact to="/region/4" >Region 4</Link>
                <Link exact to="/region/5" >Region 5</Link>
            </div>
        </section>
    )
}

export default ProductRegions;