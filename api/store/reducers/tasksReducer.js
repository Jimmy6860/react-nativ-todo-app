import {ADD_TASK} from '../actionTypes';

const initialState = [
        {
            id: 1,
            title: 'Test123',
            description: 'Long story short time to tell.',
            priority: 'high'
        },
        {
            id: 2,
            title: 'Dummy1234',
            description: 'This is my dummy text.',
            priority: 'medium'
        },
];

const tasksReducer = (state = initialState, action) => {
    console.log('reducer', action.payload)
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state, 
                action.payload
            ]
        default:
            return state;
    }
};

export default tasksReducer;