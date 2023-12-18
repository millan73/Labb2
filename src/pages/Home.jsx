import Container from '../components/Container'
import styled from 'styled-components'

const Img = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 400px;
    margin: 0;
    padding: 0;
    filter: sepia(100%);
`

const Home = () => {
    return (
        <>
            <Container>
                <Img src="./src/assets/images/top.jpeg" />
            </Container>
            <Container primary>
                <div>
                    <div>
                        <h2>Tjänster</h2>
                    </div>
                    <p>Detta är en del text</p>
                </div>
            </Container>
            <Container>
                <div>
                    <div>
                        <h2>Nyheter</h2>
                    </div>
                    <p>Detta är en del text</p>
                </div>
            </Container>
        </>
    )
}
export default Home
