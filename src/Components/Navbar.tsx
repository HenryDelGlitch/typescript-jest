import React from "react";
import { User } from "../Model/Model";
import { Link } from 'react-router-dom';

export class Navbar extends React.Component<{
    user: User | undefined
}> {
    render() {
        let loginLogOut: any

        // Login button will change depending if there is a user or not
        if (this.props.user) {
            loginLogOut = <Link to='/logout' style={{ float: 'right' }}>Logout</Link>
        } else {
            loginLogOut = <Link to='/login' style={{ float: 'right' }}>Login</Link>
        }

        return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                {loginLogOut}
                <Link to="/spaces">Spaces</Link>
            </div>
        )
    }
}