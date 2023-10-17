import './App.css';
import React  from 'react'
import {BrowserRoutes, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRoutes>
      <Routes>
        <Route to='/' path={<Navbar />} ></Route>
      </Routes>
      </BrowserRoutes>
    </div>
  );
}

export default App;
