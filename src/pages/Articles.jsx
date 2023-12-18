/* eslint-disable react/prop-types */
import Container from '../components/Container'
import Headline, { HeaderContext } from '../components/Headline'
import ArticleForm from '../components/ArticleForm'
import { useCallback } from 'react'

export default function Articles({ produktId, referrer }) {
    const handleSubmit = useCallback(
        (ordeDetails) => {
            post('/produkt/' + '/buy', {
                referrer,
                ordeDetails
            })
        },
        [produktId, referrer]
    )

    return (
        <>
            <HeaderContext.Provider value={'Artiklar'}>
                <Container>
                    <>
                        <Headline />
                        <ArticleForm onSubmit={handleSubmit} />
                    </>
                </Container>
            </HeaderContext.Provider>
        </>
    )
}

function post(url, data) {
    console.log('Post /' + url)
    console.log(data)
}
