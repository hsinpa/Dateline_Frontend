import {combineReducers} from 'redux';

import {ProjectReducer} from '../components/Project/ProjectReducer';


export const Reducer = combineReducers({
    projects : ProjectReducer
});