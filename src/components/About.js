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
            <div>
                <h1>{this.state.title}</h1>
                <p>This is the about page of our application.</p>
                <User name="Function Component" />
                <UserClass />
            </div>
        );
    }
}

export default About;