import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            company: props.company,
            bio: props.bio,
            location: props.location,
            avatar_url: props.avatar_url || ''
        };
        console.log('Child Constructor called');
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/shahnisarg96');
        const user = await data.json();
        this.setState({
            name: user.name || this.state.name,
            company: user.company || this.state.company,
            bio: user.bio || this.state.bio,
            location: user.location || this.state.location,
            avatar_url: user.avatar_url || '',
        });
        console.log('Child Component mounted');
        // You can fetch data or perform any setup here
    }

    render() {
        const { name, company, bio, location, avatar_url } = this.state;
        console.log('Child Render called');
        return (
            <div>
                <h1>User Information</h1>
                <p>Name: {name}</p>
                <p>Company: {company}</p>
                <p>Bio: {bio}</p>
                <p>Location: {location}</p>
                {avatar_url && <img src={avatar_url} alt="User Avatar" />}
            </div>
        );
    }
}

export default UserClass;