import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import logo from "../assets/logo.png";
import { useState } from 'react';
import axios from 'axios';

export default function SignUp(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState(''); 
    const navigate = useNavigate();

    function signUpUser(e){
        e.preventDefault();

        if(password !== passwordConfirm){
            alert('Confirmação de senha inválida.');
            return;
        }

        const signUpData = {
            name,
            email, 
            password
        }

        let promise = axios.post("http://localhost:5000/sign-up", signUpData);
        promise.then(() => {
            navigate('/');
        })

        promise.catch(() => {
            alert('Informações inválidas, por favor verifique.');
        })
    }


    return (
        <Container>
            <img src={logo} alt='logo' />
            <form onSubmit={ signUpUser }>
                <input placeholder="Nome" type='name' value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="E-mail" type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Senha" type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <input placeholder="Confirme a senha" type='password' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                <button type='submit'>Cadastrar</button>
            </form>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
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
        width: 227;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 35px;

        color: #FFFFFF;
    }
`;