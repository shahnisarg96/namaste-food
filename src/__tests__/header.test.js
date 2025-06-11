import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import React from "react";

it("Should render Header Component with a Status ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const status = screen.getByText((content) => content.includes("Status:"));

    expect(status).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText((content) => content.includes("Cart: 0"));

    expect(cartItems).toBeInTheDocument();
});
