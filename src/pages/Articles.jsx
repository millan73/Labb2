import Container from '../components/Container'
import Headline, { HeaderContext } from '../components/Headline'

export default function Articles() {
    return (
        <>
            <HeaderContext.Provider value={'Artiklar'}>
                <Container>
                    <>
                        <Headline />
                        <p>Detta är lite text</p>
                    </>
                </Container>
            </HeaderContext.Provider>
        </>
    )
}
