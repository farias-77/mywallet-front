import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movement from './Movement.js';
import axios from 'axios';

export default function AccountMovements({ token }){
    
    const [ accountMovements, setAccountMovements ] = useState([]);

    useEffect(() => {

        const config = {
            headers: {
                "Authorization" :`Bearer ${token}`
            }
        }

        let promise = axios.get('http://localhost:5000/accountMovement', config);

        promise.then((res) => {
            setAccountMovements([...res.data]);
        })

        promise.catch(() => {
            alert('Você precisa estar logado para continuar');
        })

    }, []);

    return( <>
    {accountMovements.length > 0 ?

    <Movements>
        { accountMovements.map((movement, index) => <Movement key={index} day={movement.day} description={movement.description} value={movement.value} /> )} 
    </Movements>

    : 
    
    <NoMovements><p>Não há registros de entrada ou saída</p></NoMovements>
    }
    </>)
}

const NoMovements = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 180px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`;

const Movements = styled.div`
    width: 100%;
    height: calc(100% - 10px);

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: scroll;

    margin-bottom: 6px;

    box-shadow: inset 0 -25px 50px -35px rgba(0, 0, 0, 0.2);
`;

