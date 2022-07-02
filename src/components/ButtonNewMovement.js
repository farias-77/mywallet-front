import styled from 'styled-components';

export default function ButtonNewMovement( { icon, text }){
    return (

        <Button>
            <ion-icon name={icon}></ion-icon>
            <p>{text}</p>
        </Button>
    )
}

const Button = styled.div`
    width: 156px;
    height: 115px;

    padding: 10px;

    background: #A328D6;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
        width: 80px;
    }

    img{
        width: 25px;
    }

    ion-icon{
        color: white;
        font-size: 28px;
    }
`;