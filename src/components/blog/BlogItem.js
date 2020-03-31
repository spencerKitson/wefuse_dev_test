import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import history from '../../services/history';


// import image from '../../assets/image.jpg';

import { Link } from 'react-router-dom';

export const BlogItem = () => {

  return (
      <div className='blog-item'>
          <p className='blog-catagory'>Category</p>
          <h1 className='blog-title'>This will be a title</h1>
          <p className='blog-snippet'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sint delectus, quidem eum, vel, ab dolore et commodi rerum pariatur perferendis voluptatibus doloremque, ex. Reiciendis cupiditate ipsum ducimus nulla accusantium!</p>
      </div>
  )
}
