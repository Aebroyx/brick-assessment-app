import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, fetchRepos } from '../store/actions/githubActions';

const SearchBar = ({ searchFilter, setSearchFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSearchFilter(event.target.value);
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm.trim()) {
                if (searchFilter === 'Users') {
                    dispatch(fetchUsers(searchTerm));
                } else {
                    dispatch(fetchRepos(searchTerm));
                }
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, searchFilter, dispatch]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <input
                        type="text"
                        placeholder="Typing to search users or repositories .."
                        value={searchTerm}
                        onChange={handleInputChange}
                        style={{
                            width: '500px',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '0 0 0 0',
                            outline: 'none',
                        }}
                    />
                    <select
                        value={searchFilter}
                        onChange={handleSelectChange}
                        style={{
                            width: 'auto',
                            minWidth: '160px',
                            padding: '10px',
                            paddingRight: '30px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '0 0 0 0',
                            outline: 'none',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'><path opacity=\'0.3\' d=\'M12 21l-12-18h24z\'/></svg>")',
                            backgroundPosition: 'right 15px center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '12px',
                        }}
                    >
                        <option value="Users">Users</option>
                        <option value="Repositories">Repositories</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;