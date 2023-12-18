import Button from './Button'
import { useReducer, useRef } from 'react'
import Container from './Container'

export default function ContactFormula() {
    const [email, setEmail] = useReducer((_, action) => {
        return action
    }, '')
    const [subject, setSubject] = useReducer((_, action) => {
        return action
    }, '')
    const [message, setMessage] = useReducer((_, action) => {
        return action
    }, '')

    const setFokusOnInput = useRef()

    const focusInput = () => {
        setFokusOnInput.current.focus()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted: ', email, subject, message)
    }

    return (
        <Container>
            <div className="row">
                <div className="col-9">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                onChange={handleEmailChange}
                                autoFocus
                                ref={setFokusOnInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">
                                Ämne
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Här anger du vad ditt ärende gäller"
                                onChange={handleSubjectChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Meddelande
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="3"
                                placeholder="Här beskriver du vad du funderar över"
                                onChange={handleMessageChange}
                            ></textarea>
                        </div>
                        <Button
                            className="btn btn-primary"
                            text="Skicka meddelande"
                            onClick={() => {
                                focusInput
                                {
                                    /**window.location.reload()*/
                                }
                            }}
                        />
                    </form>
                    <h3>Meddelande som skickas</h3>
                    <p>{message}</p>
                </div>
            </div>
        </Container>
    )
}
