
import React, { useState } from 'react';
import "../../css/index.css";
import ProductList from "./ProductList";
// import ProductPage from "./components/ProductView/ProductPage";

function Filter(props) {

    console.log("In Filter Man");
    console.log(props.listings);
    return (
        <section className="listing-container">
            <form>
                <h1>Filters</h1>
                <select>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
                </select>

                <select>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
                </select>

                <input
                    id="search"
                    type="text"
                    name="searchfield"
                    placeholder="Search"
                    // onChange={}
                    // value={}
                />
            </form>

            <ProductList filtered={props.listings} user={props.user}/>
        </section>
    )
}

export default Filter;
