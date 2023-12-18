import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: #ea661e;
    min-height: 300px;
    padding: 1em;
`

function Footer() {
    return (
        <>
            <StyledFooter>
                <h2>Information om företaget</h2>
            </StyledFooter>
        </>
    )
}

export default Footer
