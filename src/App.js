import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider
} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import React, { Suspense } from "react";
import UserContext from "./utils/UserContext";

const Grocery = React.lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = React.useState("Guest");

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>,
            }
        ],
        errorElement: <Error />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
