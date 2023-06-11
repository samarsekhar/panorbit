import React, { useState, useEffect } from 'react';
import "./UserList.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        displayUsers()
    }, [])

    const displayUsers = async () => {
        const response = await axios.get('https://panorbit.in/api/users.json')
        setUsers(response.data.users)
    }

    return (
        <div>
            <div className='container-fluid bg-info'>
                {/* <pre>{JSON.stringify(users)}</pre> */}
                <div className='row'>
                    <div className='col'>
                        <div className='card card-main'>
                            <div className='card-header'>
                                <h2 className='text-center p-3 text-sencondary bg'>Select an account</h2>
                            </div>
                            <div className='card-body'>
                                {
                                    users.map((user) => {
                                        return (
                                            <div className='card' key={user.id}>
                                                <Link to={`/user/${user.id}`} className='nav-link'>
                                                    <div className='row'>
                                                        <div className='col col-md-2'>
                                                            <img src={user.profilepicture} alt='profile' style={{ width: "3em", height: "3em" }} className='rounded-circle' />
                                                        </div>
                                                        <div className='col col-md-9'>
                                                            <h3 className='text-secondary'>{user.name}</h3>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList;