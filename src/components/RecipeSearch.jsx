import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RecipeSearch = ({
	setIsError,
	setIsSearching,
	setRecipes,
	setQueryText,
}) => {
	const [searchText, setSearchText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsError(false);
		setIsSearching(true);
		setRecipes([]);
		setQueryText(searchText);
		setSearchText('');
	};

	return (
		<div className='recipe-search'>
			<div className='container'>
				<form className='flex' onSubmit={handleSubmit}>
					<div className='form-control'>
						<input
							type='text'
							placeholder='e.g: pork'
							onChange={(e) => setSearchText(e.target.value)}
							value={searchText}
						/>
					</div>
					<div className='form-control'>
						<button className='btn' type='submit'>
							<i className='fas fa-search'></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

RecipeSearch.propTypes = {
	setIsError: PropTypes.func.isRequired,
	setIsSearching: PropTypes.func.isRequired,
	setRecipes: PropTypes.func.isRequired,
	setQueryText: PropTypes.func.isRequired,
};

export default RecipeSearch;
