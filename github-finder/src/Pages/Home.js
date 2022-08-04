import React from 'react'
import UserSearch from '../components/UserSearch'
import UserList from '../components/UserList'
function Home() {
  return (
    <div className='container' style={{margin:"auto"}}>
    <div style={{height:"auto", minHeight:"75vh" }}>
      

     <UserSearch></UserSearch>

    <UserList></UserList>
    </div>
    </div>
  )
}

export default Home