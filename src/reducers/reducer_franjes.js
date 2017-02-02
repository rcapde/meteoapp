import { FETCH_FRANJES } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_FRANJES:
    return  {  ...state, data: action.payload.data};
  }
  return state;
}
