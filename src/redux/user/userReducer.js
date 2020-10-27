import { SET_CURRENT_USER } from './userTypes';

const initial_state = {
    currentUser: null
}

export const userReducer = (state = initial_state, action) => {
    switch(action.type) {
        case SET_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        default: return state;
    }
}