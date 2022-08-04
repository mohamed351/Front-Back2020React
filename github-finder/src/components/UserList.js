import React , {useContext} from 'react'
import {gitHubContext} from "../context/context";
import UserItem from "./UserItem"
function UserList() {
  const value =  useContext(gitHubContext);
  return (
    <div className='grid grid-cols-3'>
        {value.state.users.map(user => <UserItem user={user}></UserItem>)}
    </div>
  )
}

export default UserList