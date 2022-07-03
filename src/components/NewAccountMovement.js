import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

export default function NewAccountMovement({ text, multiplier, token }){

    const [ value, setValue ] = useState('');
    const [ description, setDescription ] = useState('');
    const navigate = useNavigate();

    function saveMovement(e){
        e.preventDefault();

        const movementInfo = {
            value: (value*multiplier),
            description,
        }

        const config = {
            headers: {
                "Authorization" :`Bearer ${token}`
            }
        }

        let promise = axios.post('http://localhost:5000/accountMovement', movementInfo, config);
        promise.then(() => {
            navigate('/main');
        })

        promise.catch(() => {
            alert('Você precisa estar logado para fazer depósitos ou saques!');
        })
    }

    return(
        <Container>
            <h3>Nova {text}</h3>
            <form onSubmit={ saveMovement }>
                <input placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} />
                <input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                <button type='submit'>Salvar {text}</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    padding: 25px;

    background-color: #8c11be;

    h3{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 40px;
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
`;