import React from "react";
import "./Profile.css";
import ProfileForm from "./ProfileForm";

function Profile() {
	return (
		<>
			<header>
				<nav>
					<div className='logo'></div>
					<div className='nav__button'>Back to listings</div>
				</nav>
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
		</>
	);
}

export default Profile;
