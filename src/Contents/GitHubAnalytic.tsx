import React from 'react';
import { useQuery } from 'react-query';

const GitHubAnalytic = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )
    return (
        <>
            {isLoading && (
                <div>Loading...</div>
            )}
            {error && (
                <div>Error</div>
            )}
            {data && (<div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{' '}
                <strong>✨ {data.stargazers_count}</strong>{' '}
                <strong>🍴 {data.forks_count}</strong>{' '}
            </div>
            )}
        </>
    );
};

export default GitHubAnalytic;