import {TASK_DONE} from '../actionTypes';

const initialState = [];

const tasksDoneReducer = (state = initialState, action) => {
    console.log('task done', state)
    switch(action.type) {
        case TASK_DONE: {
            return [
                ...state,
                action.payload
            ]
        }
        default: {
            return state
        }
    }
};

export default tasksDoneReducer;