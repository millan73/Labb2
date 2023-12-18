import PropTypes from 'prop-types'

function Button({ className, text, onClick }) {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: 'btn btn-primary',
    text: 'Du behöver ange en text'
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
