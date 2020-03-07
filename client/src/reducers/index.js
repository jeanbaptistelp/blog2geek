import { combineReducers } from 'redux';
import postsList from './postsList';
//import usersReducer from './usersReducer'

//dummy reducer



export default combineReducers({
    posts : postsList,
});