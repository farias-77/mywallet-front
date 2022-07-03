import styled from 'styled-components';

export default function Movement({ day, value, description }){

    return (
        <Container color={ value > 0 ? '#03AC00' : '#C70000'}>
            <div>
                <h5> {day} </h5>
                <h4> {description} </h4>
            </div>
            <h3> { value.toFixed(2) } </h3>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    margin-bottom: 18px;

    display: flex;
    justify-content: space-between;

    div{
        display: flex; 
    }

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.color};        
    }
    
    h4{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: #000000;

        margin-left: 10px;
    }

    h5{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
`;