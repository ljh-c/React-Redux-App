import axios from 'axios';

export const FETCHING_ITEMS_START = 'FETCHING_ITEMS_START';
export const FETCHING_ITEMS_SUCCESS = 'FETCHING_ITEMS_SUCCESS';
export const FETCHING_ITEMS_FAILURE = 'FETCHING_ITEMS_FAILURE';

export const fetchItems = () => dispatch => {
  dispatch({ type: FETCHING_ITEMS_START });
  axios.get('https://api.open5e.com/magicitems')
  .then(res => {
    // console.dir(res.data);
    dispatch({ type: FETCHING_ITEMS_SUCCESS, payload: res.data.results })
  })
  .catch(err => {
    dispatch({ type: FETCHING_ITEMS_FAILURE, payload: err.response })
  })
};