import {ADD_TASK, DELETE_TASK, TASK_DONE} from '../actionTypes';

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