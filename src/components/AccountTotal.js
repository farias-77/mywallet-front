import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function AccountTotal({ token }){

    const [ accountMovements, setAccountMovements ] = useState([]);
    const [ aux, setAux ] = useState(false); 
    const [ total, setTotal ] = useState(0);

    useEffect(() => {

        const config = {
            headers: {
                "Authorization" :`Bearer ${token}`
            }
        }

        let promise = axios.get('http://localhost:5000/accountMovement', config);

        promise.then((res) => {
            setAccountMovements([...res.data]);
            setAux(true);
        })

        promise.catch(() => {
            alert('Você precisa estar logado para continuar');
        })

    }, []);

    useEffect(() => {
        if(aux){
            let soma = 0;
            accountMovements.map(movement => soma += movement.value);
            setTotal(soma);
        }
    }, [aux]);

    return <>{ aux && accountMovements.length > 0 ? 
        
        <Container color={ total >= 0 ? '#03AC00' : '#C70000'}><h3>SALDO</h3><h4>{ total.toFixed(2) }</h4></Container>
        
        : 
        
        ''
        }</>
} 

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0 10px;

    h3{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    h4{
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${props => props.color};
    }
`;