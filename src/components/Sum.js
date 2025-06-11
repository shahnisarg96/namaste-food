import React from 'react';

const Sum = ({ a, b }) => {
    return (
        <div>
            <h1>Sum Component</h1>
            <p>The sum of {a} and {b} is {a + b}</p>
        </div>
    );
}

export default Sum;