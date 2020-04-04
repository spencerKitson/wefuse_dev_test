import React, { createContext, useState, useReducer } from 'react';
import AppReducer from './AppReducer';

import backendAPI from '../services/api';
import history from '../services/history';

// Define Initial State
const InitialState = {
  homepage: [],
  blogPosts: [],
  post: [],
  postLoaded: false,
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, InitialState);
  const [loading, setLoading] = useState(true)

  // Get HomePage Data
  async function getHomeData(){
    try {
      // Set loading state to true
      setLoading(true);

      // Make configured AXIOS call
      const homeData = await backendAPI.get('/homepage');
      // Dispatch
      dispatch({
        type: "GET_HOMEPAGE",
        payload: homeData.data.data
      })

      getBlogPosts();

    } catch (err) {
      // if err
      // dispatch clog error
      dispatch({
        type: "BLOG_ERROR",
        payload: err
      })
    }
  }

  async function getBlogPosts(){
    try {
      const blogPosts = await backendAPI.get('/blog/list');
      dispatch({
        type: "GET_BLOGS",
        payload: blogPosts.data.data
      })
    } catch (err) {
      dispatch({
        type: "BLOG_ERROR",
        payload: err
      })
    }
  }

  async function getBlogPost(slug){
    try {
      const blogPost = await backendAPI.get(`/blog/${slug}`);
      dispatch({
        type: "GET_BLOG_POST",
        payload: blogPost.data
      })

    } catch (err) {
      dispatch({
        type: "BLOG_ERROR",
        payload: err
      })
    }
  }

  // Handler for Blog Item
  const handleBlogLink = async (e) => {
    // Prevent Default
    e.preventDefault()
    try {
      // Set loading state to true
      setLoading(true);
      // Define slug from attribute value (slug) from clicked blog item
      const slug = e.target.dataset.slug;
      // make api query with slug
      const blogPost = await backendAPI.get(`/blog/${slug}`);
      // if success
      if(blogPost.data.success){
        // dispatch
        dispatch({
          type: "GET_BLOG_POST",
          payload: blogPost.data
        })
        // reroute to blog page
        history.push(`/blog/${slug}`);
        // set loading state to false
        setLoading(false);
      } else {
        // else if there is no article route to homepage
        history.push(`/`);
        setLoading(false);
      }
    } catch (e) {
      console.log(e)
    }
  }


  return (
    // make state and functions available to it children
    <GlobalContext.Provider value={{
      homepage: state.homepage,
      blogPosts: state.blogPosts,
      post: state.post,
      error: state.error,
      loading: state.loading,
      getHomeData,
      getBlogPosts,
      getBlogPost,
      handleBlogLink
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
