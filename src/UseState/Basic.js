import React, { useState } from 'react';

function Basic() {
    const [count, setCount] = useState(0);

    const handlechangeInc = () => {
        setCount(count + 1);
    };
    const handlechangeDec = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handlechangeInc}>+</button>
            <button onClick={handlechangeDec}>-</button>
        </div>
    );
}

export default Basic;
