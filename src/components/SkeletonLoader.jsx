import React from 'react';

const SkeletonLoader = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {Array.from(new Array(9)).map((_, index) => (
        <div key={index} style={{ 
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                padding: '15px', 
                width: '370px',
                height: '170px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}>
        </div>
        ))}
    </div>
);

export default SkeletonLoader;