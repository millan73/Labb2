import Container from '../components/Container'
import Headline, { HeaderContext } from '../components/Headline'

export default function Services() {
    return (
        <HeaderContext.Provider value={'Tjänster'}>
            <Container>
                <>
                    <Headline />
                    <p>Här kommer vi att visa vilka tjänster som vi erbjuder</p>
                </>
            </Container>
        </HeaderContext.Provider>
    )
}
