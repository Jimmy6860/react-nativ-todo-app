import {TASK_DONE, FINAL_DELETE, RESTORE_TASK} from '../actionTypes';

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
        case FINAL_DELETE: {
            const filtered = state.filter(i => i.id !== action.payload);
            return [
                ...filtered, 
            ]
        }
        case RESTORE_TASK: {

        }
        default: {
            return state
        }
    }
};

export default tasksDoneReducer;