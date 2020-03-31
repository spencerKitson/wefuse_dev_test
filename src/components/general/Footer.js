// Footer Component
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="foot-bar">
      <div className="foot-text">
        <div className="foot-info">
          <p>Call Us: (1)118-111-111 - Mail: info@example.com</p>
        </div>
        <div className="foot-logos">
          <FontAwesomeIcon icon={faFacebook} size="m" style={{ color: 'gray' }} />
          <FontAwesomeIcon icon={faTwitter} size="m" style={{ color: 'gray' }}  />
          <FontAwesomeIcon icon={faInstagram} size="m" style={{ color: 'gray' }}  />
          <FontAwesomeIcon icon={faInstagram} size="m" style={{ color: 'gray' }}  />
          <FontAwesomeIcon icon={faInstagram} size="m" style={{ color: 'gray' }}  />
          <FontAwesomeIcon icon={faInstagram} size="m" style={{ color: 'gray' }}  />
        </div>
      </div>
    </div>
  );
}
