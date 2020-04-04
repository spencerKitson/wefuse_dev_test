import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import { BlogItem } from './BlogItem';

export const BlogList = () => {

  const { blogPosts, getBlogPosts } = useContext(GlobalContext);

  useEffect(() => {
    getBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>
      <div className="list">
        {blogPosts.map(blogPost => (
          <BlogItem
            key={blogPost.slug}
            blogPost={blogPost}
          />
        ))}
      </div>
      </>
  )
}
