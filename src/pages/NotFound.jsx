import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [navigate])

    return (
        <>
            <h2>Sidan du försökte nå finns inte</h2>
            <p>Du kommer automatiskt att förflyttas till Startsidan</p>
        </>
    )
}
export default NotFound
