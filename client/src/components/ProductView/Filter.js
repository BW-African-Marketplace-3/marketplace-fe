
import React, { useEffect, useState } from 'react';
import "../../css/index.css";
import ProductList from "./ProductList"; {/* ~~~~~ Styles for this component are located in 'productView.less' ~~~~~ */}

function Filter(props) {

    const [cat1, setCat1] = useState("");
    const [cat2, setCat2] = useState(props.listings);

    const [search, setSearch] = useState("");
    const [results, setResults] = useState();

  useEffect(() => {
    let list = [];
    props.data.forEach(character => {
      if (character.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return list.unshift(character);
      }
    });

    setResults(list);
  }, [search, props.data]);
    
    return (
        <section className="listing-container">
            <form>
                <h1>Filters</h1>
                <select onChange={filterCat1}>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
                </select>

                <select onChange={filterCat2}>
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
        </section>
    )
}

export default Filter;
