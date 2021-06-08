import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) =>{
        console.log(e)
    }

    return (
        <header>
            <h6 style={headingStyle}>{title}</h6>
            <Button onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'hi',
}

const headingStyle = {
    color: 'red',
}

export default Header
