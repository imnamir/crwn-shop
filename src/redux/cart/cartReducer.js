import cartTypes from './cartTypes';

const initial_state = {
    hidden: true
}

const cartReducer = (state = initial_state, action) => {
    switch(action.type) {
        case cartTypes.TOGGLE_CART_DROPDOWN: return {
            ...state,
            hidden: !state.hidden
        }
        default: return state
    }
}

export default cartReducer;