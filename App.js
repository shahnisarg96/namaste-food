import ReactDOM from "react-dom/client";

const heading = (<h1 id="heading" tabIndex={5}>Namaste React</h1>);

const TitleComponent = () => {
    return (
        <div>
            {heading}
            <h2>Namaste React Title</h2>
        </div>
    );
}

const HeadingComponent = () => {
    return (
        <div>
            <TitleComponent />
            <h2>Namaste React Functional Component</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
