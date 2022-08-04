import React, {useContext, useEffect} from 'react'
import {gitHubContext} from "../context/context"
import {useParams} from "react-router-dom";

function UserPage() {

  const {login} = useParams()
  const { user, loading, repos, getcurrentUser } = useContext(gitHubContext);
  useEffect(()=>{
    getcurrentUser(login);
  },[login])
  return (
    <>
    <div>UserPage</div>
    <div>
      {login}
    </div>
    </>
  )
}

export default UserPage