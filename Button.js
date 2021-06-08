import PropTypes from "prop-types"

const Button = ({color, text, onClick}) =>{

    return (
        <button onClick={onClick} style={btnStyle}>{text}</button>
    );
};

Button.defaultProps = {
    color: 'steelblue'
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onCLick: PropTypes.func,
};

const btnStyle = {
    background: 'orange'
};

export default Button