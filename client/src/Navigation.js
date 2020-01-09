import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import "./css/index.css";

function Navigation(props) {

    // console.log(`In the navigation component showing you the props: ${props}`);

    return(
        <nav>
            <img className="logo" src="img/logo.png" alt="Logo"/>
            {/*Select Dropdown For Region (Defaults to current users region) */}
            {/* onChange of region selection, listings matching that region are passed through the filter and display in the grid. */}
            
            <Link exact to="/region/1" >Region 1</Link>
            <Link exact to="/region/2" >Region 2</Link>
            <Link exact to="/region/3" >Region 3</Link>
            <Link exact to="/region/4" >Region 4</Link>
            <Link exact to="/region/5" >Region 5</Link>
            <Link exact to="/profile">
                <div>
                    <p>{`${props.users.first_name} ${props.users.last_name}`} </p>

                    <figure>
                        <img src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Profile Picture"/>
                    </figure>
                </div>
            </Link>
        </nav>
    )
}

export default Navigation;