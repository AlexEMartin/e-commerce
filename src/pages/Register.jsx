import styled from 'styled-components'
import { mobile } from '../responsive'
import Link from '@material-ui/core/Link'
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
    width: 30%;
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 20%;
    margin: 5px;
    padding: 10px;
`;

const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-left: 7px;
`;

const Volver = styled.span`
    margin-left: 35px;
    margin-top: 30px;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>REGISTRARSE</Title>
            <Form>
                <Input placeholder='name' />
                <Input placeholder='last name' />
                <Input placeholder='username' />
                <Input placeholder='email' />
                <Input placeholder='password' />
                <Input placeholder='confirm password' />
                <Button>ENVIAR</Button>
                <Volver><Link color="inherit"
                              arial-label='menu'
                              component={RouterLink}
                              to='/'>Volver a Inicio
                        </Link>
                </Volver>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register