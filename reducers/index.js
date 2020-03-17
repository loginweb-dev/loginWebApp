const reducerApp = (state = {user: {}, config: {}}, action) => {
    switch (action.type) {
        case 'SET_USER':
                return {...state, user: action.payload};
    }
    return state;
}

export default reducerApp;