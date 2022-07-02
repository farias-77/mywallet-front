import styled from 'styled-components';
import logo from "../assets/logo.png";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Login({ setToken }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function checkLogin(e){
        e.preventDefault();
        
        const loginData = {
            email,
            password
        }


        let promise = axios.post('http://localhost:5000/sign-in', loginData);

        promise.then((response) => {
            setToken(response.data);
            console.log(response.data)
        })

        promise.catch(() => {
            alert('Login inválido, por favor verifique os dados');
        })

    }

    return (
        <Container>
            <img src={logo} alt='logo' />
            <form onSubmit={ checkLogin }>
                <input placeholder="E-mail" type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Senha" type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/sign-up'>Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #8c11be;

    img{
        width: 150px;
        margin-bottom: 25px;
    }

    form{
        display: flex;
        flex-direction: column;

        input{
            border: none;
            
            width: 326px;
            height: 58px;
            background: #FFFFFF;
            border-radius: 5px;

            margin-bottom: 15px;
            padding-left: 15px;

            font-size: 20px;
            line-height: 23px;

            color: #000000;
        }

        input::placeholder{
            font-size: 20px;
            line-height: 23px;

            color: #000000;
        }

        button {
            border: none;

            width: 326px;
            height: 46px;
            background: #A328D6;
            border-radius: 5px;

            font-weight: 700;
            font-size: 20px;
            line-height: 23px;

            color: #FFFFFF;
        }
    }

    a{
        width: 191px;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 35px;

        color: #FFFFFF;
    }
`