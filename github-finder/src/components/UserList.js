import React , {useContext} from 'react'
import {gitHubContext} from "../context/context";
import Spinner from './Spinner';
import UserItem from "./UserItem";


function UserList() {
  const value =  useContext(gitHubContext);
  if(value.state.loading){
    return <Spinner />;
  }
  return (
    <div className='grid grid-cols-3'>
     
        {value.state.users.map(user => <UserItem key={user.login} user={user}></UserItem>)}
    </div>
  )
}

export default UserList