//in the action - we export "fetch-weather" - better way to code action types as then the action type is handled in one central location - if it needs to be changed to a different string - it can be done within the action and dynamically update throughout the applications
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
		case FETCH_WEATHER:
			console.log( action.payload.data );
			return [action.payload.data, ...state]; 

	}

	return state;
}