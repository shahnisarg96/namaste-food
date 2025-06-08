const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child", key: "child1" },
        [
            React.createElement("h1", { key: "heading" }, "Hello World!"),
            React.createElement("p", { key: "paragraph" }, "This is a child paragraph.")
        ]
    ),
    React.createElement(
        "div",
        { id: "child2", key: "child2" },
        [
            React.createElement("h1", { key: "heading" }, "Hello World!"),
            React.createElement("p", { key: "paragraph" }, "This is a child paragraph.")
        ]
    )],
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
