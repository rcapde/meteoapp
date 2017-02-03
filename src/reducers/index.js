import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import FranjesReducer from './reducer_franjes';
import PrevisioReducer from './reducer_previsio';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  franjes: FranjesReducer,
  previsio: PrevisioReducer,
});

export default rootReducer;
