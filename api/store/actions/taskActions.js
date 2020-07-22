import {
    ADD_TASK, 
    DELETE_TASK, 
    TASK_DONE, 
    EDIT_TASK, 
    FINAL_DELETE, 
    RESTORE_TASK
} from '../actionTypes';

export const addTask  = (task) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
};

export const deleteTask = (task) => dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload: task
    })
};

export const taskDone = (task) => dispatch => {
    dispatch({
        type: TASK_DONE,
        payload: task
    })
};

export const editTask = (task) => dispatch => {
    dispatch({
        type: EDIT_TASK,
        payload: task
    })
};

export const finalDelete = (task) => dispatch => {
    dispatch({
        type: FINAL_DELETE,
        payload: task
    })
};

export const restoreTask = (task) => dispatch => {
    dispatch({
        type: RESTORE_TASK,
        payload: task
    })
};