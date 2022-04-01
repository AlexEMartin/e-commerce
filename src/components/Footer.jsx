import { Facebook, Instagram, Twitter, Room, Phone, MailOutline } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from '../responsive'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1; 
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;   
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}        
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Mercado Pampeano.
            </Logo>
            <Desc>
                La Pampa tiene mucho que ofrecer
            </Desc>
            <SocialContainer>
                <SocialIcon color='385999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links relevantes</Title>
            <List>
                <ListItem><Link color="inherit"
                                aria-label="menu"
                                component={RouterLink} to='/'>Home</Link></ListItem>
                <ListItem><Link color="inherit"
                                aria-label="menu"
                                component={RouterLink} to='/cart'>Cart</Link></ListItem>
                <ListItem>My acoount</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacto</Title>
            <ContactItem><Room style={{marginRight: '10px'}} />Garibaldi esquina H.Yrigoyen</ContactItem>
            <ContactItem><Phone style={{marginRight: '10px'}} />+54 9 11 2376 3974</ContactItem>
            <ContactItem><MailOutline style={{marginRight: '10px'}}/>mercadopampeano@gmail.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer