import axios from 'axios'
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_posts";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=adsfafdat444rgf';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type : FETCH_POSTS,
    payload : request
  };
}


export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type : CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request =  axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
