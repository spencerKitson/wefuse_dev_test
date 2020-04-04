import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faFolderOpen
} from '@fortawesome/free-solid-svg-icons';

import { formatDate } from '../../helpers/assistiveFunctions';

export const BlogBody = ( {data} ) => {

  return (
    <wrapper className='align-center'>
      <div className="blog-info-strip">

        <p className='blog-info-half align-right extra-margin-left'>
        <i><FontAwesomeIcon className='info-icon' icon={faCalendar} size="1x" /> { formatDate(data.data.postDate.date) }</i></p>
        <div className="blog-info-divider"></div>
        <p className='blog-info-half align-left'>
        <i><FontAwesomeIcon className='info-icon' icon={faFolderOpen} size="1x" /> { data.data.category }</i></p>
      </div>
      <div className="blog-body">
        <div className='blog-main-body' dangerouslySetInnerHTML={{ __html: data.data.pageData }}></div>
      </div>
    </wrapper>
  )
}
