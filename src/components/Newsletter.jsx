import { Send } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: 'center' })}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: '80%' })}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    border: none;
    font-size: 18px;
    
`;

const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    cursor: pointer;
`;



const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Recibe actualizaciones sobre Mercado Pampeano</Desc>
        <InputContainer>
            <Input placeholder='Correo' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter