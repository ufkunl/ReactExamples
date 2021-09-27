import React from 'react';
import { useState } from 'react';

function Counter() {


    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    return <div>
            <div>{count}</div>
            <button onClick={increase}>ARTTIR</button>
            <button onClick={decrease}>AZALT</button>
    </div>
}
export default Counter;