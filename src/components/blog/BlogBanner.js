import React from 'react';

export const BlogBanner = ( {data} ) => {

  return (
    <>
      <div className='blog-banner'>
          <h1 className='blog-title-main'>{data.data.banner.title}</h1>
          <p className='title-paragraph'>{data.data.banner.description}</p>
          <div className="image-box">
            <div className="color-over"></div>
            <img src={data.data.banner.image.url} alt={data.data.banner.image.url} className="image"/>
          </div>
      </div>
    </>
  )
}
