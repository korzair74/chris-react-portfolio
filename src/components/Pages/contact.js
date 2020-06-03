import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactPageImage from "../../../static/assets/images/auth/login.jpg";

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        style={{
          background: "url(" + ContactPageImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='left-column'></div>
      <div className='right-column'>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='phone' />
            </div>
            <div className='text'>555-555-5555</div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='envelope' />
            </div>

            <div className='text'>chris.nickel.dev@gmail.com</div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='map-marked-alt' />
            </div>

            <div className='text'>Greenup, KY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
