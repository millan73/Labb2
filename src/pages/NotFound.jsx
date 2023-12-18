import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import Headline, { HeaderContext } from '../components/Headline'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [navigate])

    return (
        <HeaderContext.Provider value={'Sidan finns inte'}>
            <Container>
                <>
                    <Headline />
                    <h3>Sidan du försöker att nå finns inte</h3>
                    <p>Du kommer automatiskt att förflyttas till Startsidan</p>
                </>
            </Container>
        </HeaderContext.Provider>
    )
}
export default NotFound
