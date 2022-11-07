import React, { useContext, useEffect } from "react";
import githubContext from "../context/github/githubContext";
import Loading from "./Loading";

const Repos = () => {
  const gitContext = useContext(githubContext);
  const { loading, repos, getUserRepos } = gitContext;

  useEffect(() => {
    if (!repos || repos.length === 0) {
      getUserRepos();
    }
  }, [repos]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='repos'>
        <h1 className='repos-title'>Github repos</h1>
        <div className='repo-grid'>
          {repos.map((repo) => (
            <div className='repo-card' key={repo.id}>
              <h3>
                <a
                  className='repos-name'
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h3>
              <div className='repo-info'>
                <p>{repo.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Repos;
