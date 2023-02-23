import logo from './logo.svg';
import './App.css';
import Complete from './Components/Complete';
import Sidebar from './Components/Sidebar';
import Personal from './Components/Personal';
import {Route,Routes,Navigate} from "react-router-dom";
import Security from './Components/Security';
import Verification from './Components/Verification';
import Other from './Components/Other';
import Portfolio from './Components/Portfolio';
import Profilephoto from './Components/Profilephoto';
import Photos from './Components/Photos';
import Education from './Components/Education';

function App() {
  return (
    <>
    <Complete></Complete>
    <div class="sidebar-container"> 
    <Sidebar></Sidebar>
    
     <div className='content-container'>
    <Routes>
          
          <Route path='/Profile' element={<Personal></Personal>} />
          <Route path='/Education' element={<Education></Education>} />
          <Route path='/Portfolio' element={<Portfolio></Portfolio>} />
          <Route path='/Photos' element={<Photos></Photos>} />
          <Route path='/Other' element={<Other></Other>} />
          <Route path='/Profilephoto' element={<Profilephoto></Profilephoto>} />
          <Route path='/Verification' element={<Verification></Verification>} />
          <Route path='/Security' element={<Security></Security>} />
          
    </Routes>
    </div>
    </div>
   
    
    
   
   
    </>
  );
}

export default App;
