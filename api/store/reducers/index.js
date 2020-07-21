import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import tasksDoneReducer from './tasksDoneReducer';

const reducer = combineReducers({
    tasksReducer,
    tasksDoneReducer
});

export default reducer;