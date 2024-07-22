import React from 'react';
import githubLogo from '../assets/github-mark.svg';

const GithubLogo = () => {
    return (
        <>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <img src={githubLogo} alt="GitHub Logo" width={'auto'} height={'64px'} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '22px' }}>
                        Github Searcher
                    </h1>
                    <p style={{ fontSize: '14px', color: 'grey', marginTop: '-12px' }}>
                        Search users or repositories below
                    </p>
                </div>
            </div>
        </>
    );
};

export default GithubLogo;