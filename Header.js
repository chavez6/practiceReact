import PropTypes from "prop-types"
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header>
            <h6 style={headingStyle}>{title}</h6>
            <Button color={ showAdd ? 'red' : 'green' } 
            onClick={onAdd} 
            text={ showAdd ? 'close' : 'open' } />
        </header>
    )
}

Header.defaultProps = {
    title: 'hi',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
}

export default Header
