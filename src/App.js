import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import './assets/reset.css';
import './assets/styles.css';
import { useState } from 'react';
import SignUp from './components/SignUp.js';

export default function App(){

    const [token, setToken] = useState('vazio');

    return (
        <BrowserRouter>
            <Routes>     
                <Route path='/' element={<Login setToken={setToken}/>} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}