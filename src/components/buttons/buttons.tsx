import { Link } from 'react-router-dom';
import { StyledComponent, ThemeProvider } from 'styled-components';

// css import
import {  ButtonVariant } from './buttons.Styles';

interface Props {
    // className: string;
    onClick?: () => {};
    to: string;
    text: string;
    className: string


}

const ButtonComponent = ({onClick, to, text, className}: Props) => {

    return (
       
        <Link to={to}>
            <ButtonVariant className={`default, ${className}`} onClick={onClick}>{text}</ButtonVariant>
        </Link>
        
    )
}

export default ButtonComponent;