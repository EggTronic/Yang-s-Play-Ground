import { GET_LEADS, ADD_LEADS, DELETE_LEADS } from '../actions/types.js';

const initialState = {
    something: 'text',
    leads: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            };
        case ADD_LEADS:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            };
        case DELETE_LEADS:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !==
                    action.payload)
            };
        default:
            return state;
    }
}