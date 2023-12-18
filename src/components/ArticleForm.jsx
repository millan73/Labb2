/* eslint-disable react/prop-types */
import { memo, useState } from 'react'
import styled from 'styled-components'

const Img = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    margin: 20px;

    &:hover {
        border: 2px solid #000;
        cursor: pointer;
    }
`
const Div = styled.div`
    display: block;
    padding: 5px;
    font-weight: 600;
`

const ArticleForm = memo(function ArticleForm({ onSubmit }) {
    const [count, setCount] = useState(0)

    let startTime = performance.now()
    while (performance.now() - startTime < 500) {
        //Gör ingenting
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        }
        onSubmit(orderDetails)
    }

    return (
        <>
            <Img
                src="./src/assets/images/bild1.jpeg"
                onClick={() => setCount(count + 1)}
            />
            <Img
                src="./src/assets/images/bild2.jpeg"
                onClick={() => setCount(count + 1)}
            />
            <Img
                src="./src/assets/images/bild3.jpeg"
                onClick={() => setCount(count + 1)}
            />

            <form onSubmit={handleSubmit}>
                <Div>
                    <label>
                        Antal valda artiklar:
                        {' ' + count}
                    </label>
                    <p>Skicka order till:</p>
                </Div>
                <Div>
                    <label htmlFor="firstName">Förnamn:</label>
                    <br />
                    <input id="firstName" name="fornamn" />
                </Div>
                <Div>
                    <label htmlFor="lastName">Efternamn:</label>
                    <br />
                    <input id="lastName" name="efternamn" />
                </Div>
                <Div>
                    <label htmlFor="street">Gata:</label>
                    <br />
                    <input id="street" name="gata" />
                </Div>
                <Div>
                    <label htmlFor="postalcode">Postnummer:</label>
                    <br />
                    <input id="postalcode" name="pn" />
                </Div>
                <Div>
                    <label htmlFor="city">Stad:</label>
                    <br />
                    <input id="city" name="stad" />
                </Div>
                <Div>
                    <button type="submit">Skicka</button>
                </Div>
            </form>
        </>
    )
})
export default ArticleForm
