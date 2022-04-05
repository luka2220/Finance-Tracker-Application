import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Investments from './pages/Investments';
import Savings from './pages/Savings';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/Home' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/Analytics' element={<Analytics/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Investments' element={<Investments/>} />
                <Route path='/Savings' element={<Savings/>} />
                <Route path='/Signup' element={<Signup/>} />
            </Routes>
        </Router>
    );
}

export default App;