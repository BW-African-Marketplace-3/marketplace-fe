import React, { useEffect, useState } from 'react';
import ProductList from "./ProductList";
import "../../css/index.css"; {/* ~~~~~ Styles for this component are located in 'productView.less' ~~~~~ */}

function Filter(props) {

    console.log(props.listings);
    // console.log(props.region);

    const [regionFilter, setRegionFilter] = useState([]);

    const [cat1, setCat1] = useState("");

    const [filtered, setFiltered] = useState([]);

    // Step 1: Filter by Region 
     
    useEffect(() => {
        console.log("Beginning Step 1:");
        let stepOne = [];
        props.listings.forEach(listing => {
            // console.log(listing);
            if (listing.region == props.region) {
                stepOne.push(listing);
            }
        });

        setRegionFilter(stepOne);
        console.log("End Step 1:");
        console.log(stepOne);
    }, []);

    // Step 2: Filter by Category. If no category selected, Check Search.

    useEffect(() => {
        console.log("Beginning Step 2:");
        let stepTwo = [];

        regionFilter.forEach(listing => {
            if (listing.category === cat1) {
                stepTwo.push(listing);
                console.log("Listings Match Category");
            }
        });
        
        setFiltered(stepTwo);
        console.log("End Step 2:");
        console.log(stepTwo);
        console.log("Cat 1:");
        console.log(cat1);
    }, [cat1]);
    // Step 3: Filter By Search. If No Search, display all Items matching step 1s region filter.

    

    const filterCat1 = e => {
        setCat1(e.target.value);
    }

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

        useEffect(() => {
            let list = [];
            regionFilter.forEach(listing => {
                if (listing.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return list.unshift(listing);
                }
            }); 

            setResults(list);
        }, [search, regionFilter]);

        const filterSearch = e => {
            setSearch(e.target.value);
        }
    
    return (
        <section className="listing-container">
            <form>
                <h1>Filters</h1>
                <select onChange={filterCat1}>
                    <option default value="">No Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                    <option value="4">Category 4</option>
                    <option value="5">Category 5</option>
                </select>
                <h2>Or</h2>
                <input
                    id="search"
                    type="text"
                    name="searchfield"
                    placeholder="Search"
                    onChange={filterSearch}
                    value={search}
                />

                {/* <button 
                    id="filterReset"
                    type="reset"
                    name="filterReset"
                >Reset Filters</button> */}
            </form>

            <ProductList filtered={results} />
        </section>
    )
}

export default Filter;
