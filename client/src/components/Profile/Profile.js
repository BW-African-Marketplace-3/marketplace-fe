import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ProductList from "../ProductView/ProductList";
import "../../css/index.css";

function Profile(props) {
    const [listingsCount, setListingsCount] = useState();
    const [sorted, setSorted] = useState([]);
    
    useEffect(() => {
        let total = 0;
        let sort = [];
        props.listings.forEach(listing => {
            if (listing.user_id === props.users.user_id) {
                total = total + 1;
                sort.push(listing);
            }
        })
        setListingsCount(total);
        setSorted(sort);
    }, [props.users, props.listings]);


    return (
        <section>
            <header>
                <div className='dashboard'>
                    <div className='header__content'>
                        <div className='profile__picture'></div>
                        <h1 className='profile__name'>{`${props.users.first_name} ${props.users.last_name}`}</h1>
                        <h1 className='profile__listings'>{listingsCount}</h1>
                    </div>
                </div>
            </header>
            
            <div className='products'>
                <ProfileForm />
            </div>

            <div className="listing-container">
                <ProductList filtered={sorted} />
            </div>
        </section>
    )
}

export default Profile;