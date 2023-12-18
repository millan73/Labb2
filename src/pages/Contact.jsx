import Container from '../components/Container'
import ContactFormula from '../components/ContactFormula'
import Headline, { HeaderContext } from '../components/Headline'

export default function Contacts() {
    return (
        <HeaderContext.Provider value={'Kontakta oss'}>
            <Container>
                <>
                    <Headline />
                    <ContactFormula />
                </>
            </Container>
        </HeaderContext.Provider>
    )
}
