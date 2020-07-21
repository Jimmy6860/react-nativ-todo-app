import {ADD_TASK, DELETE_TASK} from '../actionTypes';

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