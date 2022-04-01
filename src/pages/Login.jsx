import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link as RouterLink } from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://www.definicionabc.com/wp-content/uploads/geografia/La-Pampa.jpg');
    display: flex;
    align-items: center;
    ${mobile({ justifyContent: 'center' })}
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })}
    
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    width: 70%;
    margin: 5px;
    padding: 10px;
`;

const Button = styled.button`
    width: 30%;
    height: 40px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Link = styled.a`
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='username' />
                <Input placeholder='password' />
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                <Link><RouterLink to='/'>Volver al Inicio</RouterLink></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login