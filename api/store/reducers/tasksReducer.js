import {ADD_TASK, DELETE_TASK} from '../actionTypes';

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
    switch (action.type) {
        case ADD_TASK: {
            return [
                ...state, 
                action.payload
            ]
        }
        case DELETE_TASK: {
            const filtered = state.filter(i => i.id !== action.payload)
            console.log('delete action', filtered)
            return [
                ...filtered, 
            ]
        }
        default:
            return state;
    }
};

export default tasksReducer;