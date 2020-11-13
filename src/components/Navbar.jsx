import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, states }) => {
	const { queryText, setQueryText, setRecipes, setIsError } = states;

	const handleClick = () => {
		setIsError(false);
		setRecipes([]);
		if (queryText === 'chicken adobo ') return setQueryText('chicken adobo');
		setQueryText('chicken adobo ');
	};

	return (
		<div className='navbar'>
			<div className='container flex'>
				<h1 className='logo' onClick={handleClick}>
					{title}
				</h1>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	states: PropTypes.object.isRequired,
};

export default Navbar;
