import PropTypes from 'prop-types'

const Button = ({ color, text, showAddTask }) => {
    return (
        <button 
            className='btn' 
            style={{ backgroundColor: color }}
            onClick={showAddTask}
        >
            {text}
        </button>
    )
}

// Button.defaultProps = {
//     color: 'green'
// }

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Button