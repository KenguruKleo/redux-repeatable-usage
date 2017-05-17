import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { getReusableReducer } from '../helpers/reusable';

const todoApp = combineReducers({
    todos_1: getReusableReducer( todos, 'todos_1'),
    todos_2: getReusableReducer( todos, 'todos_2'),
    visibilityFilter
});

export default todoApp;