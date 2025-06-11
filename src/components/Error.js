import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error-container flex flex-col items-center justify-center h-screen bg-gray-100 text-red-600">
            <div className="error-content text-center p-4 border rounded-lg shadow-lg bg-white">
                <h1 className="text-xl font-bold">Error</h1>
                <p className="text-sm">{error.status}: {error.statusText}</p>
            </div>
        </div>
    );
}

export default Error;
