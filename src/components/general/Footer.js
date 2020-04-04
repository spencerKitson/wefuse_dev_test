import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faYoutube,
  faLinkedinIn,
  faVimeo
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="foot-bar">
      <div className="foot-text">
        <div className="foot-info">
          <p>Call Us: <a href='tel:+1(1)118-111-111'>+1(1)118-111-111</a> - Mail: <a href='mailTo:info@example.com'>info@example.com</a></p>
        </div>
        <div className="foot-logos">
          <a href='https://www.twitter.com' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: 'gray' }}  /></a>
          <a href='https://www.facebook.com' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebookF} size="1x" style={{ color: 'gray' }} /></a>
          <a href='https://www.google.com' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faGooglePlusG} size="1x" style={{ color: 'gray' }}  /></a>
          <a href='https://www.youtube.com' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: 'gray' }}  /></a>
          <a href='https://www.vimeo.com' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faVimeo} size="1x" style={{ color: 'gray' }}  /></a>
          <a href='https://www.linkedin.com' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size="1x" style={{ color: 'gray' }}  /></a>
        </div>
      </div>
    </div>
  );
}
