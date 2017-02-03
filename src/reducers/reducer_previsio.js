import { FETCH_PREVISIO } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_PREVISIO:
    return  {  ...state, data: action.payload.data};
  }
  return state;
}
