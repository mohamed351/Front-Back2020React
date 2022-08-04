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
        dispatch({
            type:"LOADING"
        });
        const api = await fetch(`https://api.github.com/search/users?q=${query}`)
        const data = await api.json();
        dispatch({
            type:"GET_USERS",
            payload:data.items

        });
        dispatch({
            type:"DELETE_LOADING"
        });
    }

    const getcurrentUser = async (loginName)=>{
        dispatch({
            type:"LOADING"
        });
        const api = await fetch(`https://api.github.com/users/${loginName}`);
        if(api.status === 404){

        }
        const data = await api.json();
        
        const repoapi = await fetch(`https://api.github.com/users/${loginName}/repos`)
        const repoData = await repoapi.json();
        dispatch({
            type:"GET_USER_LOGIN",
            payload:{
                user:data,
                repos:repoData
            }
        });
        dispatch({
            type:"DELETE_LOADING"
        });

        


    }
    return (
        <gitHubContext.Provider value={{...state, getUser, getcurrentUser }}>
            {children}
        </gitHubContext.Provider>
    )
}

