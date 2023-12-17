import PropTypes from 'prop-types'

function Footer({ className }) {
    return (
        <>
            <div className={className}>
                <footer>
                    <h2>Information om företaget</h2>
                </footer>
            </div>
        </>
    )
}

Footer.defaultProps = {
    className: 'row'
}

Footer.propTypes = {
    className: PropTypes.string
}

export default Footer
