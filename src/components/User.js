import{ useState } from 'react';

const User = ({ name }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-container flex flex-col items-center p-4 border rounded-lg shadow-lg gap-4 bg-gray-100 max-w-lg min-w-xs">
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-sm">This is the user component.</p>
            <button className="border bg-blue-800 text-white p-2 rounded" onClick={() => setCount(count + 1)}>Click Me</button>
            <p className="text-sm">You clicked {count} times</p>
        </div>
    );
}

export default User;