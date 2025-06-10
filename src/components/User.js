import{ useState } from 'react';

const User = ({ name }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{name}</h1>
            <p>This is the user component.</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>You clicked {count} times</p>
        </div>
    );
}

export default User;