import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ author, link, year }) => {
	return (
		<footer className='footer'>
			<div className='container flex'>
				<p>
					Coded with ❤️ by{' '}
					<a href={`//${link}`} target='_blank' rel='noopener noreferrer'>
						{author}
					</a>{' '}
					&copy; {year}
				</p>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	author: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
};

export default Footer;
