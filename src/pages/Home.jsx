import Container from '../components/Container'

const Home = () => {
    return (
        <>
            <Container />
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
