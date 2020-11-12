import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
	return (
		<div className='recipe-list'>
			<div className='container'>
				<ul className='grid'>
					{recipes.map((recipe, index) => (
						<RecipeItem key={index} recipe={recipe.recipe} />
					))}
				</ul>
			</div>
		</div>
	);
};

RecipeList.propTypes = {
	recipes: PropTypes.array.isRequired,
};

export default RecipeList;
