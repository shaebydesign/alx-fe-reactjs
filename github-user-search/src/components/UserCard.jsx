import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserCard = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            setError(null); // Reset error before each request

            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUser(response.data);
            } catch (err) {
                setError('User not found.');
            }
        };

        fetchUserData();
    }, [username]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <img src={user.avatar_url} alt={user.name} width="150" />
                    <h3>{user.name}</h3>
                    <p>{user.bio}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                    </a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserCard;
