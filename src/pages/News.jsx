import Container from '../components/Container'
import Headline, { HeaderContext } from '../components/Headline'

export default function News() {
    return (
        <>
            <HeaderContext.Provider value={'Nyheter'}>
                <Container>
                    <Headline />
                </Container>
            </HeaderContext.Provider>
        </>
    )
}
