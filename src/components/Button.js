import PropTypes from 'prop-types'


const Button = ({colour, text, onClick}) => {
    
    return (
        <button onClick={onClick} style={{ backgroundColor: colour}} className='btn'> {text} </button>
    )
}

Button.defaultProps={
    colour : "green",
    text : "Add",
}
Button.propTypes= {
    text : PropTypes.string,
    colour: PropTypes.string,
}
export default Button

