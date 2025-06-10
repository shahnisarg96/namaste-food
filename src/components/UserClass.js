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
            <div className="flex user-class-container flex flex-col items-center p-4 border rounded-lg shadow-lg gap-4 bg-gray-100 max-w-lg min-w-xs">
                <h1 className="text-lg font-semibold">User Information</h1>
                <p className="text-sm">Name: {name}</p>
                <p className="text-sm">Company: {company}</p>
                <p className="text-sm">Bio: {bio}</p>
                <p className="text-sm">Location: {location}</p>
                {avatar_url && <img className="w-24 h-24 object-cover rounded-full" src={avatar_url} alt="User Avatar" />}
            </div>
        );
    }
}

export default UserClass;