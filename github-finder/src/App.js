import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import Footer from './components/Footer';
import UserPage from './Pages/UserPage';
import {GitHubProvider} from "./context/context";
function App() {
  return (

   <GitHubProvider>
  <Router>
     <Nav />
 
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/user/:login' element={<UserPage/>}></Route>
     </Routes>
   
   <Footer/>
     
  </Router>
  </GitHubProvider>

  );
}

export default App;
