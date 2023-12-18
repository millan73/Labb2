import Container from '../components/Container'
import Context, { NumberContext } from '../components/Context'

export default function Articles() {
    return (
        <>
            <NumberContext.Provider value={43}>
                <Container>
                    <>
                        <h2>Artiklar</h2>
                        <Context />
                    </>
                </Container>
            </NumberContext.Provider>
        </>
    )
}
