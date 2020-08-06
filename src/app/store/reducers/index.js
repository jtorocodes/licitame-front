import { combineReducers } from 'redux';
import licitame from './licitame';

const createReducer = asyncReducers =>
	combineReducers({
		licitame,
		...asyncReducers
	});

export default createReducer;
