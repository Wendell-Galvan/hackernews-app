import {useState} from 'react';

function SearchBar({onSubmit}) {
	//state for search term in input 
	const [term, setTerm] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(term);
		setTerm('');
	};

	//update state with new input 
	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div className="p-4 bg-green-300">
			<form className="flex flex-col form-inline" onSubmit={handleFormSubmit}>
				<label>Search News</label>
				<input className="mr-sm-2 border border-solid border-black cursor-text" value={term} onChange={handleChange}/>
			</form>
		</div>
	);
}

export default SearchBar;