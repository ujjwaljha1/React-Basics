import React, { useReducer } from 'react';

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Basic() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: 'increment' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'decrement' });
    };

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Basic;
