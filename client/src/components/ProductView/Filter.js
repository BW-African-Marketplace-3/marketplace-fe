import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ProductList from "./ProductList";
import "../../css/index.css"; {/* ~~~~~ Styles for this component are located in 'productView.less' ~~~~~ */}

function Filter(props) {

    console.log(props.listings);

    const [cat1, setCat1] = useState();
    const [cat2, setCat2] = useState();

        const filterCat1 = e => {
            setCat1(e.target.value);
        }

        const filterCat2 = e => {
            setCat2(e.target.value);
        }

    const [search, setSearch] = useState("");
    const [results, setResults] = useState(props.listings);

        useEffect(() => {
            let list = [];
            props.listings.forEach(listing => {
            if (listing.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                return list.unshift(listing);
            }
            });

            setResults(list);
        }, [search, props.data]);

        const filterSearch = e => {
            setSearch(e.target.value);
        }
    
    return (
        <section className="listing-container">
            <form>
                <h1>Filters</h1>
                <select onChange={filterCat1}>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                    <option value="4">Category 4</option>
                    <option value="5">Category 5</option>
                </select>

                <select onChange={filterCat2}>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                    <option value="4">Category 4</option>
                    <option value="5">Category 5</option>
                </select>

                <input
                    id="search"
                    type="text"
                    name="searchfield"
                    placeholder="Search"
                    onChange={filterSearch}
                    value={search}
                />
            </form>

            <ProductList filtered={results} />
        </section>
    )
}

export default Filter;
