import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe }) => {
	return (
		<li className='card'>
			<a
				href={recipe.url.split(':').slice(1).join()}
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={recipe.image} alt={recipe.label} />
			</a>
			<div>
				<a
					href={recipe.url.split(':').slice(1).join()}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h1>{recipe.label}</h1>
				</a>
				<ul>
					{recipe.ingredientLines.map((ingredient, index) => (
						<li key={index}>{`• ${ingredient}`}</li>
					))}
				</ul>
				<a
					href={recipe.url.split(':').slice(1).join()}
					target='_blank'
					rel='noopener noreferrer'
					className='btn'
				>
					Instructions
				</a>
			</div>
		</li>
	);
};

RecipeItem.propTypes = {
	recipe: PropTypes.object.isRequired,
};

export default RecipeItem;
