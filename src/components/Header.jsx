import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeader = styled.header`
    background-color: white;
    border-bottom: 4px solid #ea661e;
    padding-left: 1em;
    padding-bottom: 0;
`
const StyledH1 = styled.h1`
    margin-bottom: 0.25em;
`

function Header({ companyName }) {
    return (
        <>
            <StyledHeader>
                <StyledH1>{companyName}</StyledH1>
            </StyledHeader>
        </>
    )
}

Header.propTypes = {
    companyName: PropTypes.string
}
export default Header
