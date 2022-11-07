import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import { SET_LOADING, GET_REPOS } from "../types";

const GithubState = (props) => {
  const initialState = {
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  // get repos
  const getUserRepos = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/yupher/repos?per_page=6`,
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        loading: state.loading,
        repos: state.repos,
        getUserRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
