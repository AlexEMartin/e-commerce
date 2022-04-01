import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import tractor from '../assets/img/tractor.jpg'
import { mobile } from '../responsive'


const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    ${mobile({ width: '100%'})}
`;

const InfoContainer = styled.div`
    flex: 2;
    padding: 20px;
    ${mobile({ textAlign: 'center' })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    margin: 20px 40px;

    &:hover{
        background-color: #f8f4f4;
    }
    
`;


const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src={tractor} />
            </ImgContainer>
            <InfoContainer>
                <Title>Tractor</Title>
                <Desc>John Deere directo desde fábrica</Desc>
                <Price>10.000.000 AR$</Price>
                <br />
                <Button>Agregar al carrito</Button>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product