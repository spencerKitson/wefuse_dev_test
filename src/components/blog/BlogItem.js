import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import { formatDate } from '../../helpers/assistiveFunctions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faClock
} from '@fortawesome/free-solid-svg-icons';


export const BlogItem = ({blogPost}) => {

  const { handleBlogLink } = useContext(GlobalContext);


  const image = blogPost.banner.image.url || 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg';

  return (
    <div className="blog-link">
      <div className='blog-item' data-slug={blogPost.slug} onClick={(e) => handleBlogLink(e)}>
        <p className='blog-category'>{blogPost.category}</p>
        <h3 className='blog-title'>{blogPost.title}</h3>
        <p className='blog-snippet'> <span className="snippet-detail flex-end"><FontAwesomeIcon className='snippet-icon' icon={faClock} size="1x" style={{ color: 'gray' }} /> {formatDate(blogPost.postDate.date)}</span> <span className="snippet-detail flex-start"><FontAwesomeIcon className='snippet-icon' icon={faUser} size="1x" style={{ color: 'gray' }} /> {blogPost.author}</span></p>
        <div className="image-box">
          <div className="color-over"></div>
          <img src={image} alt={image} className="image"/>
        </div>
      </div>
    </div>
  )
}
