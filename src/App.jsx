import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Signup from './components/signup';
import AdminDash from './components/AdminDash';
import UserDash from './components/UserDash';



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Signup" element={<Signup/>} />
                    <Route path="/AdminDash" element={<AdminDash/>} />
                    <Route path="/UserDash" element={<UserDash/>} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
