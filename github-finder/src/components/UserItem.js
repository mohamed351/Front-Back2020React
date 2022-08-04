import React from 'react'

function UserItem({user:{avatar_url, login}}) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  
    <div class="card-body" >
        <div style={{display:"flex" , justifyContent:"start",alignItems:"center"}}>
     <div>
      <img src={avatar_url}  width="50" className='rounded-full'  alt='a person' />
     </div>
     <div>
     <span className='ml-2'>{login}</span>
     <p className='ml-3 text-xs	subpixel-antialiased font-extrabold	text-gray-700 cursor-pointer'>Visit Profile</p>
     </div>
     </div>
   
    </div>
  </div>
  )
}

export default UserItem