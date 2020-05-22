import React from 'react';

const PortfolioSidebarList = (props) => {
	const portfolioLIst = props.data.map((portfolioItem) => {
		return (
			<div>
				<div>
					<img src={portfolioItem.thumb_image_url} alt='' />
					<h1>{portfolioItem.name}</h1>
					<h2>{portfolioItem.id}</h2>
				</div>
			</div>
		);
	});

	return <div>{portfolioLIst}</div>;
};

export default PortfolioSidebarList;
