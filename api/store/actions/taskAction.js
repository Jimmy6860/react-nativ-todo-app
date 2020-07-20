import {ADD_TASK} from '../actionTypes';

export const addTask  = (task) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
};