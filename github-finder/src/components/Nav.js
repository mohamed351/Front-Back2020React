import React from 'react'
import PropTypes from 'prop-types'
import {FaGithub} from "react-icons/fa";
import {Link} from 'react-router-dom';
function Nav({title}) {
  return (
    <>
        <div class="navbar bg-neutral text-neutral-content justify-between">
         <a class="btn btn-ghost normal-case text-xl"> <FaGithub className='mr-2' fontSize={20}></FaGithub> {title}</a>
         <div>
         <Link to="/" class="btn btn-active btn-ghost mx-2">Home</Link>
         <Link to="/about" class="btn btn-active btn-ghost mx-2">About</Link>
         </div>
        </div>
 
   
    </>
  )
}
Nav.prototype ={
    title:PropTypes.string
}
Nav.defaultProps  ={
    title:"GitHub"
}

export default Nav