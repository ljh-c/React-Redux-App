// reducers/index.js

import { FETCHING_ITEMS_START, FETCHING_ITEMS_SUCCESS, FETCHING_ITEMS_FAILURE } from '../actions/itemsActions';

const initialState = {
  isFetching: false,
  items: null,
  error: ''
};

const itemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_ITEMS_START:
      return {
        ...state,
        isFetching: true
      };
    
    case FETCHING_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload
      }

    case FETCHING_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default itemsReducer;