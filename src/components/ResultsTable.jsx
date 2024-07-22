import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import SkeletonLoader from './SkeletonLoader';

const ResultsTable = (searchFilter) => {
  const { users, repositories } = useSelector((state) => state.github);
  const { loading: loadingUsers, error: errorUsers, data: userResults } = users;
  const { loading: loadingRepos, error: errorRepos, data: repoResults } = repositories;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  if (loadingUsers || loadingRepos) return <SkeletonLoader />;
  if (errorUsers) return <p>Error: {errorUsers}</p>;
  if (errorRepos) return <p>Error: {errorRepos}</p>;

  const paginatedUserResults = paginate(userResults);
  const paginatedRepoResults = paginate(repoResults);
  const totalPages = Math.ceil(userResults.length / itemsPerPage);

  return (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
    {
      searchFilter.searchFilter == "Users" ? (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {
              paginatedUserResults.map((user) => (
                <div key={user.id} style={{ 
                        border: '1px solid #ddd',
                        padding: '15px', 
                        textAlign: 'center', 
                        backgroundColor: '#fff', 
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        width: '370px',
                        height: '170px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <img src={user.avatar_url} alt={user.login} style={{ 
                          borderRadius: '50%', 
                          width: '80px', 
                          height: '80px', 
                          objectFit: 'cover',
                          alignSelf: 'center'
                        }} />
                        <h3>{user.login}</h3>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ 
                          textDecoration: 'none', 
                          color: '#0366d6',
                          marginTop: 'auto'
                        }}>Profile</a>
                </div>
              ))
            }
          </div>
        </>
      )
      : searchFilter.searchFilter == "Repositories" ? (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {
              paginatedRepoResults.map((repo) => (
                <div key={repo.id} style={{ 
                        border: '1px solid #ddd',
                        padding: '15px', 
                        textAlign: 'center', 
                        backgroundColor: '#fff', 
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        width: '370px',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <h3>{repo.full_name}</h3>
                        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>{repo.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                          <span>Stars: {repo.stargazers_count}</span>
                          <span>Forks: {repo.forks_count}</span>
                        </div>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ 
                          textDecoration: 'none', 
                          color: '#0366d6',
                          marginTop: 'auto'
                        }}>Repository</a>
                </div>
              ))
            }
          </div>
        </>
      )
      : 
        <p>Results not found.</p>
    }
    </div>
    <div style={{marginTop: '2.5rem'}}>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  </div>
  );
};

export default ResultsTable;