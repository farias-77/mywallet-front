import NewAccountMovement from './components/NewAccountMovement.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import Main from './components/Main.js'
import { useState } from 'react';
import './assets/reset.css';
import './assets/styles.css';

export default function App(){

    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');

    return (
        <BrowserRouter>
            <Routes>     
                <Route path='/' element={<SignIn setToken={setToken} setUserName={setUserName} />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/main' element={<Main token={token} userName={userName} />} />
                <Route path='/deposit' element={<NewAccountMovement text='entrada' multiplier={1} token={token} />} />
                <Route path='/withdraw' element={<NewAccountMovement text='saída' multiplier={-1} token={token} />}/>
            </Routes>
        </BrowserRouter>
    )
}