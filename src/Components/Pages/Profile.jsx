import React from 'react';
import UserDetails from '../Users/UserDetails';

function Profile() {
    return (
        <div>
            <h1 style={{ fontSize: "60px", margin: "20px", textAlign: "center", fontFamily: "monospace" }}>Profile Page</h1>
            <UserDetails />
        </div>
    )
}

export default Profile;