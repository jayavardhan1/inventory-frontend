import React from 'react';
import './App.css';
import Sidebar from './sidebar.component/sidebar';
import MainContent from './Maincontent.component/Maincontent';
function App() {
  

  return (
    <div className="App" style={{display:"flex"}}>
      <div className='border-end' style={{width:"20%" , height:"100vh"}}>
        < Sidebar/>
      </div>
      <MainContent style={{width:"80%" }} />
    </div>
  );
}

export default App;
