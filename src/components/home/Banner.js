import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import history from '../../services/history';

// import image from '../../assets/image.jpg';

import { Link } from 'react-router-dom';

export const Banner = () => {

  return (
      <div className='welcome-container'>
          <h1 className='title-main'>Minimalist Blogging Theme</h1>
          <p className='title-paragraph'>Welcome to Neuro, Responsive, Minimalist Personal Wordpress Website Theme rebuilt in React.JS. Create Blog, News and Article with Maximum Flexiblity.</p>
      </div>
  )
}
