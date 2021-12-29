import { Link } from 'react-router-dom';
import styled, { StyledComponent, ThemeProps, ThemeProvider } from 'styled-components';

// css import
// import {  ButtonVariant } from './buttons.Styles';

interface Props {
    // className: string;
    onClick?: () => {};
    to: string;
    text: string;
    theme: string


}

const ButtonComponent = ({onClick, to, text, theme}: Props) => {
    // make variants an array of objects and make theme dependent on theme input by dev?
    const variants = {
        
       menuButton: {
           background: 'blue'
       }
    }

    const ButtonVariant = styled.button`
        margin: .2rem;
        padding: .2rem .3rem;
        box-shadow: var(--boxShadowPrimary);

        background: ${props => props.theme.background};

    `


    return (

        <ThemeProvider theme={undefined}>
            <Link to={to}>
                <ButtonVariant onClick={onClick}>{text}</ButtonVariant>
            </Link>
        </ThemeProvider>
        
        
    )
}

export default ButtonComponent;