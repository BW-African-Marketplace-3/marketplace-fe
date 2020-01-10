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

	const submitForm = e => {
		e.preventDefault();
	};
	return (
		<Form onSubmit={submitForm} className='profile__form'>
			<FormGroup>
				<label htmlFor='category'>Category</label>
				<Input
					id='category'
					type='select'
					name='category'
					onChange={handleChanges}
				>
					<option value='1'>Category 1</option>
					<option value='2'>Category 2</option>
					<option value='3'>Category 3</option>
					<option value='4'>Category 4</option>
				</Input>
			</FormGroup>

			<FormGroup>
				<Label htmlFor='sub_category'>Sub Category</Label>
				<Input
					id='sub_category'
					type='select'
					name='sub_category'
					onChange={handleChanges}
				>
					<option value='1'>Sub Category 1</option>
					<option value='2'>Sub Category 2</option>
					<option value='3'>Sub Category 3</option>
					<option value='4'>Sub Category 4</option>
				</Input>
			</FormGroup>

			<FormGroup>
				<Label htmlFor='name'>Name</Label>
				<Input
					id='name'
					type='text'
					name='name'
					placeholder='Name your product'
					onChange={handleChanges}
				/>
			</FormGroup>

			<FormGroup>
				<Label htmlFor='price'>Price</Label>
				<Input
					id='price'
					type='number'
					name='price'
					placeholder='$'
					onChange={handleChanges}
				/>
			</FormGroup>

			<Label htmlFor='region'>Region</Label>
			<Input id='region' type='select' name='region' onChange={handleChanges}>
				<option value='1'>Region 1</option>
				<option value='2'>Region 2</option>
				<option value='3'>Region 3</option>
				<option value='4'>Region 4</option>
			</Input>

			<Label htmlFor='description'>Description</Label>
			<Input
				type='textarea'
				id='description'
				name='description'
				placeholder='Describe your product in a few words'
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
