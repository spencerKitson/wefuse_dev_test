import React, { useEffect, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

export const Banner = () => {

  const { homepage, getHomeData } = useContext(GlobalContext);

  useEffect(() => {
    getHomeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className='banner-container'>
        <h1 className='title-main'>{homepage.banner.title}</h1>
        <div className="color-dash"></div>
        <p className='title-paragraph'>{homepage.banner.description}</p>
        <FontAwesomeIcon className='chevron-down' icon={faChevronDown} size="1x" />
      </div>
  )
}
