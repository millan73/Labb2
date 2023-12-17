import PropTypes from 'prop-types'

function Header({ companyName }) {
    return (
        <header className="col-9">
            <h1>{companyName}</h1>
        </header>
    )
}

Header.propTypes = {
    companyName: PropTypes.string
}
export default Header
