import axios from 'axios';

const API_KEY = 'bdb6a0604b3762ea3d08c8360fb249bc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	//create hte rest of the url with city and country.
	const url = `${ROOT_URL}&q=${city},us`;
	//make a get request ot the url.  This returns a promise - but redux-promise middleware deals with that promise automatically for us. 
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER, 
		//if the payload is a promise - redux-promise automatically converts the promise and returns it
		payload: request
	};
}