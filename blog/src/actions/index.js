import _ from 'lodash';
import jsonPlaceHoder from '../apis/jsonPlaceholder';

export const fetchPostAndUser = () => async dispatch => {
  await dispatch(fetchPost());
}

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceHoder.get('/posts');

  console.log("FETCH POST")
  dispatch({type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceHoder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data})
};

// export const fetchUser = (id) =>  dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize( async (id, dispatch) => {
//   const response = await jsonPlaceHoder.get(`/users/${id}`);
//   console.log("FETCH USER")
//   dispatch({type: 'FETCH_USER', payload: response.data})
// });