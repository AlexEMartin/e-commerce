import React from 'react'
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Search } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from '../responsive';
import Link from '@material-ui/core/Link'
import { Link as RouterLink} from 'react-router-dom'


const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 18px;
    ${mobile({ fontSize : '14px' })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{color: 'gray', fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>Mercado Pampeano.</Logo></Center>
                <Right>
                    
                    <MenuItem><Link color="inherit"
                                    aria-label="menu"
                                    component={RouterLink} to='/register'>REGISTER</Link></MenuItem>
                    <MenuItem><Link color="inherit"
                                    aria-label="menu"
                                    component={RouterLink} to='/login'>SIGN IN</Link></MenuItem>
                    <MenuItem>

                        <Badge badgeContent={4} color="secondary">
                            <Link component={RouterLink} to='/cart'>
                            <ShoppingCartOutlinedIcon /> 
                            </Link>
                        </ Badge>
                        
                    </MenuItem>
                </Right>
            </Wrapper>  
        </Container>
    </div>
  )
}

export default Navbar

