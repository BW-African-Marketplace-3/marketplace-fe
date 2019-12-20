import React, { useState } from 'react';

function App() {
	const [editing, setEditing] = useState(false);

	return (
		<div className='App'>
			{editing ? console.log('Editing') : console.log('No Editing')}
		</div>
	);
}

export default App;
