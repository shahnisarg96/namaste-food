import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <p>{error.status}: {error.statusText}</p>
        </div>
    );
}

export default Error;
