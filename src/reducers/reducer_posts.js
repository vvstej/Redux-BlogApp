
import { FETCH_POSTS, FETCH_POST } from '../actions/index.js';

const INITIAL_STATE = {all:[] , post:null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_POSTS:
      return { ...state , all: action.payload.data};
    case FETCH_POST:
      console.log("after request");
      console.log(action.payload.data);
      return {...state, post: action.payload.data};
    default:
      return state;
  }
}
