import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #107c10;
    color: #eeecec;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 2px;
`;

const Announcement = () => {
  return (
    <div>
        <Container>
            ¡LA PAMPA tiene mucho que ofrecer!
        </Container>

    </div>
  )
}

export default Announcement
