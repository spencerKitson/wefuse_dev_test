export default (state, action) => {
  switch(action.type) {
    case 'GET_HOMEPAGE':
      return {
        ...state,
        homepage: action.payload,
      }
    case 'GET_BLOGS':
      return {
        ...state,
        blogPosts: action.payload,
        loading: false
      }
    case 'GET_BLOG_POST':
      return {
        ...state,
        loading: false,
        post: [ action.payload ],
      }
    case 'BLOG_ERROR':
      return {
        ...state,
        error:  action.payload
      }
    default:
      return state;
  }
}
