import React from 'react'

function UserItem({user:{avatar_url, login}}) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  
    <div class="card-body" >
        <div style={{display:"flex" , justifyContent:"start",alignItems:"center"}}>
     <div><img src={avatar_url}  width="50" className='rounded-full' /></div><span className='ml-2'>{login}</span>
     </div>
    
    </div>
  </div>
  )
}

export default UserItem