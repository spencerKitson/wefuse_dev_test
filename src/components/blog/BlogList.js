import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import history from '../../services/history';

import { BlogItem } from './BlogItem';

// import image from '../../assets/image.jpg';

import { Link } from 'react-router-dom';

export const BlogList = () => {

  return (
      <>
        <BlogItem />
      </>
  )
}
