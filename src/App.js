import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import './assets/reset.css';
import './assets/styles.css';
import { useState } from 'react';
import SignUp from './components/SignUp.js';
import Main from './components/Main.js'

export default function App(){

    const [token, setToken] = useState('');
    
    return (
        <BrowserRouter>
            <Routes>     
                <Route path='/' element={<SignIn setToken={setToken}/>} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/main' element={<Main token={token} />} />
            </Routes>
        </BrowserRouter>
    )
}