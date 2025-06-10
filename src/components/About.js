import User from "./User";
import UserClass from "./UserClass";
import React from 'react';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "About Us"
        };
        console.log('Parent Constructor called');
    }

    componentDidMount() {
        console.log('Parent Component mounted');
        // You can fetch data or perform any setup here
    }

    render() {
        console.log('Parent Render called');
        return (
            <div className="about-container flex flex-col items-center p-4">
                <h1 className="text-2xl font-bold mb-4">About Page</h1>
                <h1 className="text-xl font-semibold">{this.state.title}</h1>
                <p className="text-sm">This is the about page of our application.</p>
                <User name="Function Component" />
                <UserClass />
            </div>
        );
    }
}

export default About;