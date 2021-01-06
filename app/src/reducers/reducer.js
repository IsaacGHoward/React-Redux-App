import {CHARACTER_SEARCH_START, CHARACTER_SEARCH_SUCCESS, CHARACTER_SEARCH_FAIL} from '../actions/actions';

const initialState = {
  character: [],
  error: '',
  isFetching: false,
};

function reducer(state = initialState, action){
  switch(action.type){
    case CHARACTER_SEARCH_START:
      console.log(action);
      return{
        ...state,
        error: '',
        isFetching: true,
      };
    default:
      return state;
  }
}
export default reducer;