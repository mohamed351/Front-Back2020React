import React from 'react'
import {BrowserRouter as Router , Link, Route, Routes} from 'react-router-dom';
import { FeedbackProvider } from '../context/feedback';
import About from './About';
import Feedback from './Feedback';
import {FaMicrosoft} from 'react-icons/fa';

function App() {
  return (
    <FeedbackProvider>
    <Router>
   
        <Routes>
        <Route  path='/' element={<Feedback/>} />
        <Route path='/about' element={<About></About>}/>
        </Routes>
        <Link to="/about"> <FaMicrosoft color='white' size={25} /></Link>
   
    </Router>
    </FeedbackProvider>
 
    
  )
}

export default App