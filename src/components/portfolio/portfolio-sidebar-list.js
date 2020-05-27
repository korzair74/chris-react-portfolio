import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = (props) => {
  const portfolioLIst = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className='portfolio-item-thumb'>
        <div className='portfolio-item-thumb-img'>
          <img src={portfolioItem.thumb_image_url} alt='' />
        </div>
        <div className='text-content'>
          <div className='title'>{portfolioItem.name}</div>
          <a onClick={() => props.handleDeleteClick(portfolioItem)}>
            <FontAwesomeIcon className='delete-icon' icon='trash' />
          </a>
        </div>
      </div>
    );
  });

  return <div className='portfolio-sidebar-list-wrapper'>{portfolioLIst}</div>;
};

export default PortfolioSidebarList;
