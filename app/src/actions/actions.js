import axios from 'axios'

export const CHARACTER_SEARCH_START = "CHARACTER_SEARCH_START";
export const CHARACTER_SEARCH_SUCCESS = "CHARACTER_SEARCH_SUCCESS";
export const CHARACTER_SEARCH_FAIL = "CHARACTER_SEARCH_FAIL";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const getCharacter = () => dispatch => {
  dispatch({ type: CHARACTER_SEARCH_START });
  axios.get(`https://www.swapi.tech/api/people/${getRandomInt(1,84)}`)
  .then(res => {
    console.log(res.data.result.properties.name);
    dispatch({ type: CHARACTER_SEARCH_SUCCESS, payload: res.data.result.properties.name});
  })
  .catch(err =>{
    console.log(err);
    dispatch({ type: CHARACTER_SEARCH_FAIL, payload: err});
  })
}