import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import FranjesReducer from './reducer_franjes';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  franjes: FranjesReducer,

});

export default rootReducer;
