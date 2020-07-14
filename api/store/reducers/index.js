import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';

const reducer = combineReducers({
    tasksReducer,
});

export default reducer;