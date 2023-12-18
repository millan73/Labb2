import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
    background-color: #ea661e;
    padding: 1em;
`
const WhiteWrapper = styled(Wrapper)`
    background-color: white;
`

function Container({ children, primary }) {
    if (primary) return <Wrapper>{children}</Wrapper>
    else return <WhiteWrapper>{children}</WhiteWrapper>
}

Container.propTypes = {
    children: PropTypes.element,
    primary: PropTypes.any
}
export default Container
