import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import "./css/index.css";

import Filter from "./components/ProductView/Filter";
// import Register from "./Register";
import Login from "./Login";

import Profile from "./components/Profile/Profile";


function App() {
	
	const users = [
		{
		user_id: 1,
		first_name: 'Chrisse',
		last_name: 'Buckenhill',
		email: 'cbuckenhill0@trellian.com',
		password: 'wflNNQs4nWZ'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		email: 'fheinke1@bloomberg.com',
		password: 'bqeV9VVSAi'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		email: 'jcrecy2@webnode.com',
		password: 'nDOt3I0JJJC5'
		}
	];

	const listings = [
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '9da4e72r',
		category: 'Jewelery',
		sub_category: 'Finance',
		name: 'porttitor lacus',
		region: 2,
		price: 56.96,
		description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '2wk3c09i',
		category: 'Jewelery',
		sub_category: 'Public Utilities',
		name: 'eget tempus',
		region: 2,
		price: 8.34,
		description: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '3gd4w78o',
		category: 'Health',
		sub_category: 'Health Care',
		name: 'ac leo pellentesque',
		region: 3,
		price: 7.48,
		description: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
		},
		{
		user_id: 1,
		first_name: 'Chrisse',
		last_name: 'Buckenhill',
		listing_id: '1ul3j16w',
		category: 'Books',
		sub_category: 'n/a',
		name: 'libero nam dui',
		region: 4,
		price: 15.71,
		description: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '4bo3r52y',
		category: 'Computers',
		sub_category: 'n/a',
		name: 'vel sem sed',
		region: 4,
		price: 61.21,
		description: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '6dq6g97w',
		category: 'Music',
		sub_category: 'Technology',
		name: 'dictumst maecenas',
		region: 2,
		price: 59.18,
		description: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '6nq6h76l',
		category: 'Jewelery',
		sub_category: 'Health Care',
		name: 'primis in',
		region: 3,
		price: 58.13,
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '9sa7q29x',
		category: 'Garden',
		sub_category: 'Technology',
		name: 'ac neque',
		region: 4,
		price: 35.4,
		description: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'
		},
		{
		user_id: 1,
		first_name: 'Chrisse',
		last_name: 'Buckenhill',
		listing_id: '9eu2j21e',
		category: 'Toys',
		sub_category: 'Finance',
		name: 'ante vivamus',
		region: 5,
		price: 20.46,
		description: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '4mb7d47h',
		category: 'Books',
		sub_category: 'Finance',
		name: 'odio elementum eu',
		region: 4,
		price: 39.76,
		description: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '3bu7v09o',
		category: 'Beauty',
		sub_category: 'Health Care',
		name: 'facilisi cras',
		region: 1,
		price: 45.34,
		description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
		},
		{
		user_id: 1,
		first_name: 'Chrisse',
		last_name: 'Buckenhill',
		listing_id: '0fb3i74u',
		category: 'Garden',
		sub_category: 'n/a',
		name: 'morbi odio',
		region: 2,
		price: 6.19,
		description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '7rh8z69a',
		category: 'Beauty',
		sub_category: 'Consumer Services',
		name: 'orci nullam',
		region: 2,
		price: 21.63,
		description: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '4pb1f06n',
		category: 'Sports',
		sub_category: 'Consumer Services',
		name: 'est risus',
		region: 5,
		price: 44.1,
		description: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '0qw0z57d',
		category: 'Movies',
		sub_category: 'n/a',
		name: 'suspendisse potenti',
		region: 3,
		price: 97.93,
		description: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '5zd1h48w',
		category: 'Sports',
		sub_category: 'Public Utilities',
		name: 'ullamcorper augue a',
		region: 1,
		price: 87.46,
		description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '1br9o73h',
		category: 'Automotive',
		sub_category: 'Public Utilities',
		name: 'nisi nam ultrices',
		region: 2,
		price: 60.18,
		description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '7uf9g31m',
		category: 'Home',
		sub_category: 'Health Care',
		name: 'vel lectus in',
		region: 1,
		price: 92.58,
		description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '9qr3i14y',
		category: 'Electronics',
		sub_category: 'Technology',
		name: 'vitae consectetuer',
		region: 5,
		price: 74.09,
		description: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '3yp8n15h',
		category: 'Movies',
		sub_category: 'Technology',
		name: 'dolor vel est',
		region: 3,
		price: 4.21,
		description: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '5ds5q11q',
		category: 'Books',
		sub_category: 'Consumer Durables',
		name: 'convallis tortor risus',
		region: 5,
		price: 10.48,
		description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '6ua8g04d',
		category: 'Music',
		sub_category: 'Consumer Durables',
		name: 'quisque id justo',
		region: 4,
		price: 30.58,
		description: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
		},
		{
		user_id: 1,
		first_name: 'Chrisse',
		last_name: 'Buckenhill',
		listing_id: '1ip0g53z',
		category: 'Beauty',
		sub_category: 'Health Care',
		name: 'proin risus',
		region: 4,
		price: 29.18,
		description: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '8zg3w09z',
		category: 'Tools',
		sub_category: 'Finance',
		name: 'cursus id',
		region: 2,
		price: 55.87,
		description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
		},
		{
		user_id: 3,
		first_name: 'Jacquetta',
		last_name: 'Crecy',
		listing_id: '1bc5m24e',
		category: 'Jewelery',
		sub_category: 'Health Care',
		name: 'nibh in',
		region: 5,
		price: 59.93,
		description: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
		},
		{
		user_id: 1,
		first_name: 'Chrisse',
		last_name: 'Buckenhill',
		listing_id: '0xb2l89t',
		category: 'Books',
		sub_category: 'Health Care',
		name: 'vestibulum velit',
		region: 1,
		price: 5.35,
		description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '0tq7c19j',
		category: 'Games',
		sub_category: 'Capital Goods',
		name: 'dui vel sem',
		region: 4,
		price: 56.07,
		description: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '3lo4y59o',
		category: 'Outdoors',
		sub_category: 'Energy',
		name: 'ante vivamus',
		region: 2,
		price: 31.6,
		description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '3dg5x41r',
		category: 'Shoes',
		sub_category: 'Capital Goods',
		name: 'id consequat',
		region: 1,
		price: 89.77,
		description: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.'
		},
		{
		user_id: 2,
		first_name: 'Fionnula',
		last_name: 'Heinke',
		listing_id: '5dd4n32p',
		category: 'Music',
		sub_category: 'Finance',
		name: 'amet erat nulla',
		region: 5,
		price: 59.2,
		description: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
		}
	];

	const [editing, setEditing] = useState(false);

	const [user, setUser] = useState(users[1]);
	const [listing, setListing] = useState(listings);
	// const [region, setRegion] = useState(1);

	// let history = useHistory();

	// useEffect(() => {
	// 	history.push(`/region/${region}`);
	// }, [region]);

	// const regionChange = e => {
	// 	setRegion(e.target.value);
	// 	console.log(`Region state was set to: ${e.target.value}`);
	// };
	return (
		<div className='App'>
			{editing ? console.log('Editing') : console.log('No Editing')}

			<nav>
				<img className="logo" src="img/logo.png" alt="Logo"/>
				{/*Select Dropdown For Region (Defaults to current users region) */}
				{/* onChange of region selection, listings matching that region are passed through the filter and display in the grid. */}
				
				<Link exact to="/region/1" >Region 1</Link>
				{/* <Link exact to="/region/2" >Region 2</Link>
				<Link exact to="/region/3" >Region 3</Link>
				<Link exact to="/region/4" >Region 4</Link>
				<Link exact to="/region/5" >Region 5</Link> */}
				<Link exact to="/profile">
					<div>
						<p>{`${user.first_name} ${user.last_name}`} </p>

						<figure>
							<img src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Profile Picture"/>
						</figure>
					</div>
				</Link>
			</nav>

				{/* <Register/> */}
				{/* <Login/> */}

			{/* <Filter listings={listing} users={users} /> */}

			<Route path="/region/1" exact render={(routeProps) => {
				return <Filter {...routeProps} listings={listing} users={users} region="1" />
			}} />

			{/* <Route path="/region/2" exact render={(routeProps) => {
				return <Filter {...routeProps} region="2" />
			}} />
			<Route path="/region/3" exact render={(routeProps) => {
				return <Filter {...routeProps} region="3" />
			}} />

			<Route path="/region/4" exact render={(routeProps) => {
				return <Filter {...routeProps} region="4" />
			}} />

			<Route path="/region/5" exact render={(routeProps) => {
				return <Filter {...routeProps} region="5" />
			}} /> */}


			
		</div>
	);
}

export default App;
