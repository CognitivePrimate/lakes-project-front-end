import styled, { ThemeProvider } from 'styled-components';
import device from '../../media-query-sizes';


export const theme = {
    menuButton: {
        background: 'blue',
    }
}


export const ButtonComponent = styled.button`
    margin: 5px;
    border: none;
    padding: 5px;
    background: ${theme};
`

