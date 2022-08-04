import React,{useState, useContext} from 'react';
import {gitHubContext} from '../context/context';



function UserSearch() {
    const [getSearch,setSearch] = useState('');
    const contextValue = useContext(gitHubContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(getSearch.trim() === ""){
            alert("Please Enter the name");
            return false;
        }
      
        contextValue.getUser(getSearch);
    }
  return (
  <>
  <form onSubmit={handleSubmit} style={{"margin":"10px" ,"display":"flex" , justifyContent:"center"}}>
    <input type="text" onChange={(e)=> setSearch(e.target.value) } value={getSearch} placeholder="Type here" class="input input-bordered input-md " style={{width:"80%"}} />
    <button class="btn btn-active btn-ghost rounded-tr-md ml-2">Search</button>
    </form>
    </>
  )
}

export default UserSearch