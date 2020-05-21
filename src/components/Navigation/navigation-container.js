import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationComponent = (props) => {
	const dynamicLink = (route, linkText) => {
		return (
			<div className='nav-link-wrapper'>
				<NavLink to='/blog' activeClassName='nav-link-active'>
					Blog
				</NavLink>
			</div>
		);
	};
	return (
		<div className='nav-wrapper'>
			<div className='left-side'>
				<div className='nav-link-wrapper'>
					<NavLink exact to='/' activeClassName='nav-link-active'>
						Home
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink to='/About-me' activeClassName='nav-link-active'>
						About
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink to='/Contact' activeClassName='nav-link-active'>
						Contact
					</NavLink>
				</div>
				<div>
					{props.loggedInStatus === 'LOGGED_IN'
						? dynamicLink('/blog', 'Blog')
						: null}
				</div>
			</div>
			<div className='right-side'>Chris Nickel</div>
		</div>
	);
};

export default NavigationComponent;
