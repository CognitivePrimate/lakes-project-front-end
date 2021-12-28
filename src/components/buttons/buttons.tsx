import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {ButtonComponent, theme } from './buttons.Styles';

interface Props {
    // className: string;
    onClick?: () => {};
    to: string;
    text: string;
    theme: any


}

const Button = ({onClick, to, text, theme}: Props) => {

    return (
        <ThemeProvider theme={theme}>
            <Link to={to}>
                <ButtonComponent onClick={onClick}>{text}</ButtonComponent>
            </Link>
        </ThemeProvider>
    )
}

export default Button;