import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'


const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Super Ofertas</Title>
        <FilterContainer>
            <Filter>
                <FilterText>CAMPO</FilterText>
                <Select>
                    <Option disabled selected>Productos</Option>
                    <Option>Vehículos</Option>
                    <Option>Mate</Option>
                    <Option>Campo</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>CIUDAD</FilterText>
                <Select>
                    <Option disabled selected>Productos</Option>
                    <Option>Vehículos</Option>
                    <Option>Mate</Option>
                    <Option>Ropa</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList