import {createContext, useState, useReducer} from "react";
import {gitHubReducer} from './githubReducer';

export const  gitHubContext = createContext();


export const GitHubProvider = ({children})=>{

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
      }


    const [state,dispatch] = useReducer(gitHubReducer,initialState);
    
    const getUser = async (query) =>{
        const api = await fetch(`https://api.github.com/search/users?q=${query}`)
        const data = await api.json();
        dispatch({
            type:"GET_USERS",
            payload:data.items

        })
    }
    return (
        <gitHubContext.Provider value={{state, getUser}}>
            {children}
        </gitHubContext.Provider>
    )
}

