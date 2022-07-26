import React from 'react'
import {Link} from 'react-router-dom';
import {FaBackward} from 'react-icons/fa';

function About() {
  return (
    <>
        <h1> FeedBack App</h1>
        <p>This is app made by idiot Developer called Mohamed Beshri Amer . I am watching tutorial it is really amazing from bradtraversy </p>
        <Link to="/"> <FaBackward color='white' size={25} /></Link>
    </>
  )
}

export default About