import styled from 'styled-components';
import exitImage from '../assets/exit.png';
import AccountMovements from './AccountMovements';
import ButtonNewMovement from './ButtonNewMovement';
import { Link, useNavigate } from 'react-router-dom';

export default function Main({ token, userName }){

    const navigate = useNavigate();

    function exit(){
        navigate('/');
        window.location.reload();
    }

    return ( 
        <Container>
            <Header>
                <h3>Olá, {userName}</h3>
                <img onClick={exit} src={exitImage} alt='exit button' />
            </Header>
            <Body>
                <AccountMovements token={ token }/>
            </Body>
            <Footer>
                <Link to='/deposit' ><ButtonNewMovement icon='add-circle-outline' text='Nova entrada' /></Link>
                <Link to='/withdraw' ><ButtonNewMovement icon='remove-circle-outline' text='Nova saida' /></Link>
            </Footer>
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
`;

const Header = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h3{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`;

const Body = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 430px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
`;

const Footer = styled.div`
    width: 100%;
    height: 150px;
    
    display: flex;
    justify-content: space-between;
`;