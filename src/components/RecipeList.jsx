import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ count, recipes, queryText, isSearching, isError }) => {
	return (
		<div className='recipe-list'>
			<div className='container'>
				{isError ? (
					<div className='flex'>
						<h1>Status: "Error"</h1>
						<p>
							Usage limits are exceeded. You can give it another try after 1
							minute.
						</p>
					</div>
				) : isSearching ? (
					<div className='flex'>
						<h1>Searching...</h1>
					</div>
				) : count ? (
					<ul className='grid'>
						{recipes.map((recipe, index) => (
							<RecipeItem key={index} recipe={recipe.recipe} />
						))}
					</ul>
				) : (
					<div className='flex'>
						<h1>Search: "{queryText}"</h1>
						<p>
							We could not find any recipes for your search. You can give it
							another try through the search form above.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

RecipeList.propTypes = {
	count: PropTypes.number.isRequired,
	recipes: PropTypes.array.isRequired,
	queryText: PropTypes.string.isRequired,
	isSearching: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired,
};

export default RecipeList;
