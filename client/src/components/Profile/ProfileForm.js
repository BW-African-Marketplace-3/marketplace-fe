import React, { useState, useEffect } from "react";

const ProfileForm = () => {
	const [product, setProduct] = useState({
		productClass: "",
		subCategory: "",
		product: "",
		price: "",
		picture: "",
		userID: "",
		uniqueItemID: "",
		region: "Region",
		description: ""
	});

	const handleChanges = e => {
		console.log(e.target.value);
	};

	const submitForm = e => {
		e.preventDefault();
    };
    
	return (
		<form onSubmit={submitForm} className='profile__form'>			
            <label htmlFor='category'>
                Category
				<select
					id='category'
					
					name='category'
					onChange={handleChanges}
				>
					<option value='1'>Category 1</option>
					<option value='2'>Category 2</option>
					<option value='3'>Category 3</option>
					<option value='4'>Category 4</option>
				</select>		
            </label>                
			
            <label htmlFor='sub_category'>
                Sub Category
				<select
					id='sub_category'
					
					name='sub_category'
					onChange={handleChanges}
				>
					<option value='1'>Sub Category 1</option>
					<option value='2'>Sub Category 2</option>
					<option value='3'>Sub Category 3</option>
					<option value='4'>Sub Category 4</option>
				</select>	
            </label>                    
			
            <label htmlFor='name'>
                Name
				<input
					id='name'
					type='text'
					name='name'
					placeholder='Name your product'
					onChange={handleChanges}
				/>		
            </label>                
			
            <label htmlFor='price'>
                Price
				<input
					id='price'
					type='number'
					name='price'
					placeholder='$'
					onChange={handleChanges}
				/>	
            </label>                    

			<label htmlFor='region'>
                Region
                <select id='region'  name='region' onChange={handleChanges}>
                    <option value='1'>Region 1</option>
                    <option value='2'>Region 2</option>
                    <option value='3'>Region 3</option>
                    <option value='4'>Region 4</option>
                </select>
            </label>

			<label htmlFor='description'>
                Description
                <input
                    type='textarea'
                    id='description'
                    name='description'
                    placeholder='Describe your product in a few words'
                    onChange={handleChanges}
                />
            </label>

            <label>
                Picture
                <input type='file'></input>
            </label>
			<button color='danger' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default ProfileForm;