import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null); // Reset error before each search

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            // Navigate to the user card page with the username as part of the URL
            navigate(`/user/${username}`);
        } catch (err) {
            setError('User not found. Please try again.');
        }
    };

    return (
        <div>
            <h2>Search for GitHub Users</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Search;

