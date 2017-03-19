import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

//this is basically8 the application state object.  So "weather" below - will contain all of the weather state that is generated from the weather reducers.
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
