import React, { useState, useEffect } from "react";
import reactstrap, { Button, Form, FormGroup, Label, Input } from "reactstrap";

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

	return (
		<Form className='profile__form'>
			<FormGroup>
				<label htmlFor='productClass'>Product Class</label>
				<Input
					id='productClass'
					type='select'
					name='productClass'
					placeholder='Product class'
					onChange={handleChanges}
				>
					<option>Class 1</option>
					<option>Class 2</option>
					<option>Class 3</option>
					<option>Class 4</option>
				</Input>
			</FormGroup>

			<FormGroup>
				<Label htmlFor='subCategory'>Sub Category</Label>
				<Input
					id='subCategory'
					type='select'
					name=''
					placeholder='subCategory'
					onChange={handleChanges}
				>
					<option>Sub Category 1</option>
					<option>Sub Category 2</option>
					<option>Sub Category 3</option>
					<option>Sub Category 4</option>
				</Input>
			</FormGroup>

			<FormGroup>
				<Label htmlFor='product'>Product</Label>
				<Input
					id='product'
					type='text'
					name=''
					placeholder='Product'
					onChange={handleChanges}
				/>
			</FormGroup>

			<FormGroup>
				<Label htmlFor='price'>Price</Label>
				<Input
					id='price'
					type='number'
					name=''
					placeholder='0'
					onChange={handleChanges}
				/>
			</FormGroup>

			<Label htmlFor='region'>Region</Label>
			<Input id='region' type='select' name='region' onChange={handleChanges}>
				<option>Region 1</option>
				<option>Region 2</option>
				<option>Region 3</option>
				<option>Region 4</option>
			</Input>

			<Label htmlFor='description'>Description</Label>
			<Input
				type='textarea'
				id='description'
				name='description'
				placeholder='description'
				onChange={handleChanges}
			/>
			<Input type='file'>Upload Picture</Input>
			<Button color='danger' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default ProfileForm;
