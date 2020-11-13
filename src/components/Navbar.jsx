import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return (
		<div className='navbar'>
			<div className='container flex'>
				<h1 className='logo'>{title}</h1>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;
