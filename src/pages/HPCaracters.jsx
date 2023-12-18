import Container from '../components/Container'
import HeadLine, { HeaderContext } from '../components/Headline'
import Gryffindor from '../components/Gryffindor'

export default function HPCharacters() {
    return (
        <HeaderContext.Provider value={'Karaktärer från Harry Potter'}>
            <Container>
                <>
                    <HeadLine />
                    <Gryffindor />
                </>
            </Container>
        </HeaderContext.Provider>
    )
}
