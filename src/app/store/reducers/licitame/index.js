import { combineReducers } from 'redux';
import settings from './settings.reducer';
import routes from './routes.reducer';

const licitameReducers = combineReducers({
	settings,
	routes
});

export default licitameReducers;
