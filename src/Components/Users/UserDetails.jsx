import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function UserDetails() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    let map = null;

    const Navigate = useNavigate();

    useEffect(() => {
        fetch(`https://panorbit.in/api/users.json`)
            .then(response => response.json())
            .then(data => {
                const userData = data.users.find(user => user.id === parseInt(id));
                setUser(userData);
            })
    }, [id]);

    useEffect(() => {
        if (user && user.address) {
            map = L.map('mapid').setView([user.address.geo.lat, user.address.geo.lng], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);
            L.marker([user.address.geo.lat, user.address.geo.lng]).addTo(map);
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [user]);

    if (!user) {
        return <div>Loading...</div>
    }
    const handleSignOut = () => {
        Navigate("/")
    }

    return (
        <div>
            <div className='user-details'>
                <div className='d-md-flex align-items-center justify-content-between p-3'>
                    <h1 className='text-secondary'>Profile</h1>
                    <div>
                        <img src={user.profilepicture} alt={user.username} style={{ width: '3em', height: '3em' }} className='rounded-circle' />
                        <span className='text-secondary h6'>{user.name}</span>{' '}
                        <button onClick={handleSignOut} className='btn btn-danger rounded-pill'>Sign Out</button>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <hr />
                        {/* <pre>{JSON.stringify(user)}</pre> */}
                        <div className='text-center'>
                            <img src={user.profilepicture} alt={user.username} style={{ width: '20em', height: '20em' }} className='rounded-circle' />
                            <h2 className='text-sencondary'>{user.name}</h2>
                        </div>
                        <h3>Username : {user.username} </h3>
                        <h3>Email : {user.email}</h3>
                        <h3>Phone : {user.phone}</h3>
                        <h3>Website : {user.website}</h3>
                        <hr />
                        <h2 className='text-secondary text-center'>Company</h2>
                        {user.company && <h3>Name : {user.company.name}</h3>}
                        {user.company && <h3>catchPhrase : {user.company.catchPhrase}</h3>}
                        {user.company && <h3>bs : {user.company.bs}</h3>}
                    </div>

                    <div className='col col-md-6 mt-5 p-4'>
                        <h2 className='mb-2'>Address : </h2>
                        {user.address && <h3>Street : {user.address.street}</h3>}
                        {user.address && <h3>Suite : {user.address.suite}</h3>}
                        {user.address && <h3>City : {user.address.city}</h3>}
                        {user.address && <h3>zipcode : {user.address.zipcode}</h3>}<br />
                        <div id='mapid' style={{ height: '400px' }}></div>
                        <div className='float-right'><br />
                            {user.address && <span className='ml-4'>Lat : {user.address.geo.lat}</span>}{' '}{' '}
                            {user.address && <span>Long : {user.address.geo.lng}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;