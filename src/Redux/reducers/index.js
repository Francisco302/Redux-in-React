import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({ 
    todos,
    visibilityFilter,
    form: formReducer
    });
