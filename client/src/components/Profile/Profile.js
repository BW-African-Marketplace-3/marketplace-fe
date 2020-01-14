import React from 'react';
import ProfileForm from './ProfileForm';
import "../../css/index.css";

function Profile() {

    return (
        <section>
            <header>
                <div className='dashboard'>
                    <div className='header__content'>
                        <div className='profile__picture'></div>
                        <h1 className='profile__name'>John Doe</h1>
                        <h1 className='profile__listings'>7 Listings</h1>
                    </div>
                </div>
            </header>
            <div className='products'>
                <ProfileForm />
            </div>
        </section>
    )
}

export default Profile;