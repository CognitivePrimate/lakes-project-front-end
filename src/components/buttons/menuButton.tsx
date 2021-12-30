import { ButtonWrapper, StyledMenuButton } from "./buttons.Styles";
import { Link, Route } from 'react-router-dom';

interface Props {
    to: string;
    text: string;
}

const MenuButton = ({to, text}: Props) => {

    return(
        <ButtonWrapper>
            <Link to={to}>
                <StyledMenuButton>
                    {text}
                </StyledMenuButton>
            </Link>
        </ButtonWrapper>
    )
}

export default MenuButton