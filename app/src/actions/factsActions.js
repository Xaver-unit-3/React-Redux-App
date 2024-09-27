import axios from 'axios';

export const FACT_START = 'FACT_START';
export const FACT_SUCCESS = 'FACT_SUCCESS';
export const FACT_FAIL = 'FACT_FAIL';

export const factsActions = () => (dispatch) => {
  dispatch({type: FACT_START});
  axios
  .get('https://cat-fact.herokuapp.com/facts')
  .then(res => {
    console.log('res data', res);
    dispatch({type: FACT_SUCCESS, payload: res.data});
  }).catch(err => dispatch({type: FACT_FAIL, payload: err.data}));
};