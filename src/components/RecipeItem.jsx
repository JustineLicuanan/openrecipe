import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe }) => {
	return (
		<li className='card'>
			<div>
				<img src={recipe.image} alt={recipe.label} />
			</div>
			<div>
				<h1>{recipe.label}</h1>
				<ul>
					{recipe.ingredientLines.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</div>
		</li>
	);
};

RecipeItem.propTypes = {
	recipe: PropTypes.object.isRequired,
};

export default RecipeItem;
